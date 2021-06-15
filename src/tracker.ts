import { VASTTracker, VastAd } from 'vast-client';

import { BaseWithCreative } from './index';

interface TrackerProps extends BaseWithCreative {
    ad: VastAd;
}

export function createTracker({ player, creative, logger, ad }: TrackerProps) {
    const tracker = new VASTTracker(null, ad, creative);
    player.on('canplay', () => {
        logger.debug('Sending tracking impression...');
        player.trigger('adimpression');
        tracker.trackImpression();
    });

    tracker.on('creativeView', () => {
        player.trigger('adimpressionsent');
    });

    player.on('ended', () => {
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
        logger.debug('Sending resume tracking...');
        tracker.setPaused(false);
    });

    player.on('pause', () => {
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
