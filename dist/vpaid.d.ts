/// <reference types="iab-vpaid" />
import { VastCreativeLinear } from 'vast-client';
export declare class VPAIDParser implements iab.vpaid.VpaidCreative {
    readonly response: VastCreativeLinear;
    constructor(response: VastCreativeLinear);
    inject(element: Element): void;
    initAd(): void;
    startAd(): void;
    stopAd(): void;
    setAdVolume(): void;
    getAdVolume(): number;
    resizeAd(): void;
    pauseAd(): void;
    resumeAd(): void;
    expandAd(): void;
    getAdExpanded(): boolean;
    getAdSkippableState(): boolean;
    collapseAd(): void;
    skipAd(): void;
    subscribe(): void;
    unsubscribe(): void;
    handshakeVersion(): string;
    getAdLinear(): boolean;
    getAdWidth(): number;
    getAdHeight(): number;
    getAdRemainingTime(): number;
    getAdDuration(): number;
    getAdCompanions(): string;
    getAdIcons(): boolean;
}
