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

import { VastCreativeLinear } from 'vast-client';

// This is the ad unit?
export class VPAIDParser implements iab.vpaid.VpaidCreative {
    constructor(readonly response: VastCreativeLinear) {}

    inject(element: Element) {
        const iframe = document.createElement('iframe');
        iframe.id = `${this.response.id}${Date.now()}`;
        iframe.style.cssText = 'margin:0;border:0;';
        element.appendChild(iframe);

        const iframeDoc = iframe.contentDocument;
        if (iframeDoc) {
            const script = iframeDoc.createElement('script');
            script.src = this.response.mediaFiles[0].fileURL || '';
            script.onload = () => {
                // iframe.contentWindow['getVPAIDAd'] will be available here
                //    var fn = iframe.contentWindow['getVPAIDAd'];
                //    if (fn && typeof fn == 'function') {
                //    VPAIDCreative = fn();
                // getVPAIDAd?: () => iab.vpaid.VpaidCreative;
                // Inject iframe into element
            };

            iframeDoc.appendChild(script);
        }

        // Use css to reset the frame style
        // Inject VPAIDCreative wrapper function

        // Listen to mouse move/touch events
        // Set player user Active
    }

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
