import { VASTTracker } from 'vast-client';

import { BaseWithCreativeAndTracker } from './index';
import VastError, { VPAID_ERROR } from './errors';
import { ILogger } from './logger';

const VIEW_MODE: Record<string, iab.vpaid.ViewMode> = {
    NORMAL: 'normal',
    FULLSCREEN: 'fullscreen',
    THUMBNAIL: 'thumbnail',
};

interface VPAIDProps extends BaseWithCreativeAndTracker {
    handleError: PrebidOutStreamPlugin.Instance['handleError'];
}

type VPAIDErrorHandler = (main: () => void) => void;

export function displayVPAID({
    player,
    logger,
    options,
    display: { creative, media },
    tracker,
    handleError,
}: VPAIDProps) {
    logger.debug('Displaying VPAID...');
    player.trigger('adVPAIDSelected');
    let startVPAIDTimeout = -1;

    // Failsafe to check if VPAID loaded and video played
    if (options.maxVPAIDAdStart! >= 0) {
        startVPAIDTimeout = window.setTimeout(() => {
            handleError(async () => {
                // If url differs from original url, vpaid has loaded correctly
                // but may be paused due to user browser settings. Errors while
                // playing will be caught by other errors.
                if (player && player.el().querySelector('video')?.src === tracker.beforeAdLoadSrc) {
                    throw new VastError(VPAID_ERROR, 'VPAID is not loading');
                }
            });
        }, options.maxVPAIDAdStart);
    }

    player.on('dispose', () => {
        clearTimeout(startVPAIDTimeout);
    });

    // Clear timeout if creative is playing so that it can pause
    // without error
    tracker.on('creativeView', () => {
        clearTimeout(startVPAIDTimeout);
    });

    const iframe = document.createElement('iframe');
    iframe.id = `${creative.id}_${Date.now()}`;
    iframe.className = 'vjs-pop-vpaid-container';
    iframe.onload = () => {
        const iframeDoc = iframe.contentDocument;
        if (!iframeDoc) {
            handleError(async () => {
                throw new Error('unable to write iframe');
            });
        }

        const handleVPAIDError: VPAIDErrorHandler = (main) => {
            handleError(async () => {
                try {
                    main();
                } catch (e) {
                    // Prevent stacking errors
                    clearTimeout(startVPAIDTimeout);

                    const message = typeof e === 'string' ? e : (e as ErrorEvent).message;
                    throw new VastError(VPAID_ERROR, message);
                }
            });
        };

        const script = iframeDoc!.createElement('script');

        script.src = media.fileURL || '';
        script.onload = () => {
            handleVPAIDError(() => {
                logger.debug('VPAID script has loaded...');
                const adunit = iframe.contentWindow?.getVPAIDAd?.();
                if (!adunit) {
                    throw new Error('no VPAID adunit found');
                }

                logger.debug('Subscribing to VPAID adunit events');
                subscribeToCallbacks(adunit, tracker, logger, handleVPAIDError);

                logger.debug('Initializing VPAID adunit...', adunit);
                adunit.initAd(
                    player.width(),
                    player.height(),
                    VIEW_MODE.NORMAL,
                    media.bitrate,
                    { AdParameters: creative.adParameters || '' },
                    {
                        slot: iframeDoc!.body,
                        videoSlot: player.el().querySelector('video') as HTMLVideoElement,
                        videoSlotCanAutoPlay: !!player.autoplay(),
                    }
                );

                tracker.on('complete', () => {
                    logger.debug('Sending VPAID complete...');
                    adunit.stopAd();
                });

                tracker.on('skip', () => {
                    logger.debug('Sending VPAID skip...');
                    if (typeof adunit.skipAd === 'function') {
                        adunit.skipAd();
                    } else {
                        adunit.stopAd();
                    }
                });
            });
        };

        iframeDoc!.head.appendChild(script);
        iframeDoc!.body.style.margin = '0';
    };

    player.el().appendChild(iframe);
}

function subscribeToCallbacks(
    adunit: iab.vpaid.VpaidCreative,
    tracker: VASTTracker,
    logger: ILogger,
    handleError: VPAIDErrorHandler
) {
    const dummy = () => {
        // Dummy method to squelch errors from callbacks not found
        // See https://github.com/redbrickmedia/videojs-prebid-outstream/pull/16
    };

    const callbacks: iab.vpaid.EventsMap = {
        AdStarted: dummy,
        AdStopped: dummy,
        AdSkipped: dummy,
        AdLoaded: () => {
            logger.debug('VPAID adunit loaded...');
            // TODO only start vpaid ad unit when in view

            // Check if start ad is a method, not all vpaid units
            // require start ad to be called, as init ad will start the ad
            if (typeof adunit.startAd === 'function') {
                logger.debug('Starting VPAID adunit...');
                adunit.startAd();
            }
        },
        AdLinearChange: dummy,
        AdSizeChange: dummy,
        AdExpandedChange: dummy,
        AdSkippableStateChange: dummy,
        AdDurationChange: dummy,
        AdRemainingTimeChange: dummy,
        AdVolumeChange: dummy,
        AdImpression: dummy,
        AdClickThru: (url: string, _id: string, playerHandles: boolean) => {
            // The creative should provide click through handling
            // However, the player must still send the tracking to the VAST
            // ClickTracking and VideoClicks elements
            if (!playerHandles) {
                tracker.click();
                return;
            }

            // Player is handling the clickthrough now
            // If url is NOT defined, then
            // video player must use the VAST element VideoClicks/ClickThrough
            if (!url) {
                tracker.on('clickthrough', (mUrl) => {
                    window.open(mUrl, '_blank');
                });
            }

            // Handler should be defined before click is sent through for tracking
            tracker.click();

            // URL is optional, if it is defined then the player should open
            // the URL
            if (url) {
                window.open(url, '_blank');
            }
        },
        AdInteraction: dummy,
        AdVideoStart: dummy,
        AdVideoFirstQuartile: dummy,
        AdVideoMidpoint: dummy,
        AdVideoThirdQuartile: dummy,
        AdVideoComplete: dummy,
        AdUserAcceptInvitation: dummy,
        AdUserMinimize: dummy,
        AdUserClose: dummy,
        AdPaused: dummy,
        AdPlaying: dummy,
        AdError: (message: string) => {
            handleError(() => {
                throw new Error(message);
            });
        },
        AdLog: (message: string) => {
            logger.debug('VPAID Ad Log: ', message);
        },
    };

    Object.keys(callbacks).forEach((name) => {
        const eventName = name as iab.vpaid.EventsNames;
        adunit.subscribe(callbacks[eventName], eventName);
    });
}
