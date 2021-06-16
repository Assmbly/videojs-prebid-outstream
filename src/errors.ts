export const VAST_PARSING_ERROR = 100;
export const VAST_VALIDATION_ERROR = 101;
export const VAST_VERSION_NOT_SUPPORTED = 102;
export const VIDEO_TRAFFIC_ERROR = 200;
export const VIDEO_LINEARITY_UNEXPECTED = 201;
export const VIDEO_DURATION_UNEXPECTED = 202;
export const VIDEO_SIZE_UNEXPECTED = 203;
export const VAST_WRAPPER_ERROR = 300;
export const VAST_URI_TIMEOUT = 301;
export const VAST_WRAPPER_LIMIT_REACHED = 302;
export const VAST_NO_ADS = 303;
export const LINEAR_ERROR = 400;
export const LINEAR_FILE_NOT_FOUND = 401;
export const LINEAR_URI_TIMEOUT = 402;
export const LINEAR_FILE_NOT_SUPPORTED = 403;
export const LINEAR_CANNOT_DISPLAY_MEDIA = 405;
export const NONLINEAR_ERROR = 500;
export const NONLINEAR_DIMENSION_TOO_LARGE = 501;
export const NONLINEAR_RESOURCE_NOT_FOUND = 502;
export const NONLINEAR_NOT_SUPPORTED = 503;
export const COMPANION_ERROR = 600;
export const COMPANION_DIMENSION_TOO_LARGE = 601;
export const COMPANION_REQUIRED_AND_CANNOT_DISPLAY = 602;
export const COMPANION_RESOURCE_NOT_FOUND = 603;
export const COMPANION_NOT_SUPPORTED = 604;
export const UNDEFINED_ERROR = 900;
export const VPAID_ERROR = 901;

type VastErrorCode =
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
    name = 'VastError';
    constructor(readonly vastErrorCode: VastErrorCode, readonly message: string) {
        super(message);
    }
}
