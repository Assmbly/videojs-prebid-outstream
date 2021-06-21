import { VASTTracker } from 'vast-client';

import { BaseWithCreativeAndTracker } from './index';
import VastError, { VPAID_ERROR } from './errors';

const VIEW_MODE: Record<string, iab.vpaid.ViewMode> = {
    NORMAL: 'normal',
    FULLSCREEN: 'fullscreen',
    THUMBNAIL: 'thumbnail',
};

export function displayVPAID({
    player,
    logger,
    options,
    display: { creative, media },
    tracker,
}: BaseWithCreativeAndTracker) {
    logger.debug('Displaying VPAID...');

    const iframe = document.createElement('iframe');
    iframe.id = `${creative.id}_${Date.now()}`;
    iframe.style.cssText = `margin:0;border:0;width:${player.width()}px;height:${player.height()}px`;
    player.el().appendChild(iframe);

    // Add script to post ready message
    const iframeDoc = iframe.contentDocument;
    if (!iframeDoc) {
        // Unable to write iframe
        return;
    }

    // Failsafe to check if VPAID loaded and video played
    const startVPAIDTimeout = setTimeout(() => {
        if (player && player.paused()) {
            throw new VastError(VPAID_ERROR, 'VPAID is not playing');
        }
    }, options.minVPAIDAdStart);

    player.on('dispose', () => {
        clearTimeout(startVPAIDTimeout);
    });

    iframe.contentWindow!.onerror = (e) => {
        const message = typeof e === 'string' ? e : (e as ErrorEvent).message;
        throw new VastError(VPAID_ERROR, message);
    };

    const script = iframeDoc.createElement('script');

    script.src = media.fileURL || '';
    script.onload = () => {
        logger.debug('VPAID script has loaded...');
        const adunit = iframe.contentWindow?.getVPAIDAd?.();
        if (!adunit) {
            throw new Error('no VPAID adunit found');
        }

        logger.debug('Subscribing to VPAID adunit events');
        const wrapper = new VPAIDWrapper(adunit, tracker);
        wrapper.registerCallbacks();

        logger.debug('Initializing VPAID adunit...');
        adunit.initAd(
            player.width(),
            player.height(),
            VIEW_MODE.NORMAL,
            media.bitrate,
            { AdParameters: creative.adParameters || '' },
            {
                slot: iframeDoc.body,
                videoSlot: player.tech({ ignoreWarning: true }).el() as HTMLVideoElement,
                videoSlotCanAutoPlay: !!player.autoplay(),
            }
        );
    };

    iframeDoc.head.appendChild(script);
}

class VPAIDWrapper {
    private callbacks: iab.vpaid.EventsMap = {
        AdStarted: this.dummy,
        AdStopped: this.dummy,
        AdSkipped: this.dummy,
        AdLoaded: this.dummy,
        AdLinearChange: this.dummy,
        AdSizeChange: this.dummy,
        AdExpandedChange: this.dummy,
        AdSkippableStateChange: this.dummy,
        AdDurationChange: this.dummy,
        AdRemainingTimeChange: this.dummy,
        AdVolumeChange: this.dummy,
        AdImpression: this.dummy,
        AdClickThru: this.onAdClickThru,
        AdInteraction: this.dummy,
        AdVideoStart: this.dummy,
        AdVideoFirstQuartile: this.dummy,
        AdVideoMidpoint: this.dummy,
        AdVideoThirdQuartile: this.dummy,
        AdVideoComplete: this.dummy,
        AdUserAcceptInvitation: this.dummy,
        AdUserMinimize: this.dummy,
        AdUserClose: this.dummy,
        AdPaused: this.dummy,
        AdPlaying: this.dummy,
        AdError: this.dummy,
        AdLog: this.dummy,
    };

    constructor(readonly adunit: iab.vpaid.VpaidCreative, readonly tracker: VASTTracker) {}

    registerCallbacks() {
        if (typeof this.adunit.subscribe === 'function') {
            // Subscribe to callbacks
            Object.keys(this.callbacks).forEach((name) => {
                const eventName = name as iab.vpaid.EventsNames;
                this.adunit.subscribe(this.callbacks[eventName], eventName);
            });
        }
    }

    onAdClickThru(url: string, _id: string, playerHandles: boolean) {
        // It is already clicked here....
        console.debug(url, _id, playerHandles);
        if (playerHandles && !url) {
            // Use vast click url
            this.tracker.on('clickthrough', (mUrl) => {
                window.open(mUrl, '_blank');
            });
        }

        this.tracker.click();

        if (url) {
            window.open(url, '_blank');
        }
    }

    dummy() {
        // Dummy method to squelch errors from callbacks not found
        // See https://github.com/redbrickmedia/videojs-prebid-outstream/pull/16
    }
}
