export declare const VAST_PARSING_ERROR = 100;
export declare const VAST_VALIDATION_ERROR = 101;
export declare const VAST_VERSION_NOT_SUPPORTED = 102;
export declare const VIDEO_TRAFFIC_ERROR = 200;
export declare const VIDEO_LINEARITY_UNEXPECTED = 201;
export declare const VIDEO_DURATION_UNEXPECTED = 202;
export declare const VIDEO_SIZE_UNEXPECTED = 203;
export declare const VAST_WRAPPER_ERROR = 300;
export declare const VAST_URI_TIMEOUT = 301;
export declare const VAST_WRAPPER_LIMIT_REACHED = 302;
export declare const VAST_NO_ADS = 303;
export declare const LINEAR_ERROR = 400;
export declare const LINEAR_FILE_NOT_FOUND = 401;
export declare const LINEAR_URI_TIMEOUT = 402;
export declare const LINEAR_FILE_NOT_SUPPORTED = 403;
export declare const LINEAR_CANNOT_DISPLAY_MEDIA = 405;
export declare const NONLINEAR_ERROR = 500;
export declare const NONLINEAR_DIMENSION_TOO_LARGE = 501;
export declare const NONLINEAR_RESOURCE_NOT_FOUND = 502;
export declare const NONLINEAR_NOT_SUPPORTED = 503;
export declare const COMPANION_ERROR = 600;
export declare const COMPANION_DIMENSION_TOO_LARGE = 601;
export declare const COMPANION_REQUIRED_AND_CANNOT_DISPLAY = 602;
export declare const COMPANION_RESOURCE_NOT_FOUND = 603;
export declare const COMPANION_NOT_SUPPORTED = 604;
export declare const UNDEFINED_ERROR = 900;
export declare const VPAID_ERROR = 901;
declare type VastErrorCode =
    | 100
    | 101
    | 102
    | 200
    | 201
    | 202
    | 203
    | 300
    | 301
    | 302
    | 303
    | 400
    | 401
    | 402
    | 403
    | 405
    | 500
    | 501
    | 502
    | 503
    | 600
    | 601
    | 602
    | 603
    | 604
    | 900
    | 901;
export default class VastError extends Error {
    readonly vastErrorCode: VastErrorCode;
    readonly message: string;
    name: string;
    constructor(vastErrorCode: VastErrorCode, message: string);
}
export {};
