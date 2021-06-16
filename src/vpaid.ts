// Load vpaid
// iframe.contentWindow.document.write('<script id="adloaderscript" src="' + url + '"></scr' + 'ipt>');
// const script = iframe.contentWindow.document.querySelector('#adloaderscript')
// script.onload = function() {
// iframe.contentWindow['getVPAIDAd'] will be available here
//    var fn = iframe.contentWindow['getVPAIDAd'];
//    if (fn && typeof fn == 'function') {
//    VPAIDCreative = fn();
//    }
//}

import { VideoJsPlayer } from 'video.js';
import { VastCreativeLinear } from 'vast-client';

import { BaseWithCreative } from './index';

const VIEW_MODE: Record<string, iab.vpaid.ViewMode> = {
    NORMAL: 'normal',
    FULLSCREEN: 'fullscreen',
    THUMBNAIL: 'thumbnail',
};

export function displayVPAID({ player, logger, display: { creative, media } }: BaseWithCreative) {
    logger.debug('Displaying VPAID...');

    const container = document.createElement('div');
    player.el().appendChild(container);

    const iframe = document.createElement('iframe');
    iframe.id = `${creative.id}_${Date.now()}`;
    iframe.style.cssText = 'margin:0;border:0;';
    player.el().appendChild(iframe);

    // Add script to post ready message
    const iframeDoc = iframe.contentDocument;
    if (!iframeDoc) {
        // Unable to write iframe
        return;
    }
    const script = iframeDoc.createElement('script');

    script.src = media.fileURL || '';
    script.onload = () => {
        logger.debug('VPAID script has loaded...');
        const adunit = iframe.contentWindow?.getVPAIDAd?.();
        if (!adunit) {
            // no adunit found
            logger.error('no VPAID adunit found...');
            return;
        }

        logger.debug('Initializing VPAID adunit...');
        adunit.initAd(
            player.width(),
            player.height(),
            VIEW_MODE.NORMAL,
            media.bitrate,
            { AdParameters: creative.adParameters || '' },
            {
                slot: container,
                videoSlot: player.tech({ ignoreWarning: true }).el() as HTMLVideoElement,
                videoSlotCanAutoPlay: !!player.autoplay(),
            }
        );
    };

    iframeDoc.head.appendChild(script);
}

// Inject VPAIDCreative wrapper function
// Listen to mouse move/touch events
// Set player user Active

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class VPAIDWrapper implements iab.vpaid.VpaidCreative {
    constructor(readonly player: VideoJsPlayer, readonly creative: VastCreativeLinear) {}

    initAd() {
        // Initialize VPAID ad
    }

    startAd() {
        // Undefined method
    }

    stopAd() {
        // Undefined method
    }

    setAdVolume() {
        // Undefined method
    }

    getAdVolume(): number {
        // Undefined method
        return 0;
    }

    resizeAd() {
        // Undefined method
    }

    pauseAd() {
        // Undefined method
    }

    resumeAd() {
        // Undefined method
    }

    expandAd() {
        // Undefined method
    }

    getAdExpanded(): boolean {
        // Undefined method
        return false;
    }

    getAdSkippableState(): boolean {
        // Undefined method
        return false;
    }

    collapseAd() {
        // Undefined method
    }

    skipAd() {
        // Undefined method
    }

    subscribe() {
        // Undefined method
    }

    unsubscribe() {
        // Undefined method
    }

    handshakeVersion(): string {
        // VPAID version supported
        return '2.0';
    }

    getAdLinear(): boolean {
        return false;
    }

    getAdWidth(): number {
        return 640;
    }

    getAdHeight(): number {
        return 480;
    }

    getAdRemainingTime(): number {
        return 0;
    }

    getAdDuration(): number {
        return 10000;
    }

    getAdCompanions(): string {
        // If the video player calls for adCompanions(), it must wait until after receiving the VPAID
        // AdLoaded event, and any companions provided must not display until after the VPAID
        // AdImpression event is received.
        return '';
    }

    getAdIcons(): boolean {
        return false;
    }
}

/*class VPAIDWrapper {
    checkVPAIDInterface() {}

    setCallbacksForCreative() {
        //The key of the object is the event name and the value is a reference to the callback function that is registered with the creative
        const callbacks = {
            AdStarted: this.onStartAd,
            AdStopped: this.onStopAd,
            AdSkipped: this.onSkipAd,
            AdLoaded: this.onAdLoaded,
            AdLinearChange: this.onAdLinearChange,
            AdSizeChange: this.onAdSizeChange,
            AdExpandedChange: this.onAdExpandedChange,
            AdSkippableStateChange: this.onAdSkippableStateChange,
            AdDurationChange: this.onAdDurationChange,
            AdRemainingTimeChange: this.onAdRemainingTimeChange,
            AdVolumeChange: this.onAdVolumeChange,
            AdImpression: this.onAdImpression,
            AdClickThru: this.onAdClickThru,
            AdInteraction: this.onAdInteraction,
            AdVideoStart: this.onAdVideoStart,
            AdVideoFirstQuartile: this.onAdVideoFirstQuartile,
            AdVideoMidpoint: this.onAdVideoMidpoint,
            AdVideoThirdQuartile: this.onAdVideoThirdQuartile,
            AdVideoComplete: this.onAdVideoComplete,
            AdUserAcceptInvitation: this.onAdUserAcceptInvitation,
            AdUserMinimize: this.onAdUserMinimize,
            AdUserClose: this.onAdUserClose,
            AdPaused: this.onAdPaused,
            AdPlaying: this.onAdPlaying,
            AdError: this.onAdError,
            AdLog: this.onAdLog,
        };

        // Looping through the object and registering each of the callbacks with the creative
        for (const eventName in callbacks) {
            this._creative.subscribe(callbacks[eventName], eventName, this);
        }
    }

    initAd() {
        this._creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
    }
}*/
