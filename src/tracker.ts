import { VASTTracker } from 'vast-client';

import { BaseWithCreative } from './index';

export function createTracker({ player, logger, display: { creative, ad } }: BaseWithCreative): VASTTracker {
    const beforeAdLoad = player.currentSrc();
    const tracker = new VASTTracker(null, ad, creative);
    let canplay = false;
    player.on('canplay', () => {
        if (beforeAdLoad === player.el().querySelector('video')?.src) {
            // No ad media was loaded
            return;
        }

        canplay = true;
        logger.debug('Sending tracking impression...');
        player.trigger('adimpression');
        tracker.trackImpression();
    });

    tracker.on('creativeView', () => {
        player.trigger('adimpressionsent');
    });

    player.on('ended', () => {
        if (!canplay) {
            return;
        }

        logger.debug('Sending tracking complete...');
        player.trigger('adcomplete');
        tracker.complete();
    });

    tracker.on('complete', () => {
        player.trigger('adcompletesent');
    });

    player.on('timeupdate', () => {
        tracker.setProgress(player.currentTime());
    });

    player.on('fullscreenchange', () => {
        logger.debug('Sending full screen change...', player.isFullscreen());
        tracker.setFullscreen(player.isFullscreen());
    });

    player.on('volumechange', () => {
        tracker.setMuted(player.muted());
    });

    player.on('play', () => {
        if (!canplay) {
            return;
        }

        logger.debug('Sending resume tracking...');
        tracker.setPaused(false);
    });

    player.on('pause', () => {
        if (!canplay) {
            return;
        }

        logger.debug('Sending pause tracking...');
        tracker.setPaused(true);
    });

    tracker.on('skip', () => {
        player.trigger('adskipsent');
    });

    tracker.on('clickthrough', (url) => {
        player.trigger('adclicksent');
        window.open(url, '_blank');
    });

    return tracker;
}
