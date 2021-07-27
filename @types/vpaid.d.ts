interface VPAIDWrapper {
    adParameters: string;
    mediaFiles: VPAIDMediaFile[];
}

interface VPAIDMediaFile {
    id: string;
    delivery: 'progressive';
    type: string;
    bitrate: number;
    width: number;
    height: number;
    scalable: boolean;
    maintainAspectRatio: boolean;
    uri: string;
    apiFramework: string | null;
    codec: string | null;
    minBitrate?: number;
    maxBitrate?: number;
    value: string;
}
