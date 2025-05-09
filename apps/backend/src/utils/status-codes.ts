import type { ContentfulStatusCode } from 'hono/utils/http-status';

export const DEFAULT_ERROR_MAPPING = {
  status: 500,
  message: 'Internal Server Error',
  verboseCode: 'INTERNAL_SERVER_ERROR',
} as const satisfies StatusCodeMapping;

export const verboseStatusCodes = [
  'CONTINUE',
  // 'SWITCHING_PROTOCOLS',
  'PROCESSING',
  'EARLY_HINTS',
  'OK',
  'CREATED',
  'ACCEPTED',
  'NON_AUTHORITATIVE_INFORMATION',
  // 'NO_CONTENT',
  // 'RESET_CONTENT',
  'PARTIAL_CONTENT',
  'MULTI_STATUS',
  'ALREADY_REPORTED',
  'IM_USED',
  'MULTIPLE_CHOICES',
  'MOVED_PERMANENTLY',
  'FOUND',
  'SEE_OTHER',
  // 'NOT_MODIFIED',
  'USE_PROXY',
  'TEMPORARY_REDIRECT',
  'PERMANENT_REDIRECT',
  'NOT_FOUND',
  'BAD_REQUEST',
  'UNAUTHORIZED',
  'PAYMENT_REQUIRED',
  'FORBIDDEN',
  'METHOD_NOT_ALLOWED',
  'NOT_ACCEPTABLE',
  'PROXY_AUTHENTICATION_REQUIRED',
  'REQUEST_TIMEOUT',
  'CONFLICT',
  'GONE',
  'LENGTH_REQUIRED',
  'PRECONDITION_FAILED',
  'PAYLOAD_TOO_LARGE',
  'URI_TOO_LONG',
  'UNSUPPORTED_MEDIA_TYPE',
  'RANGE_NOT_SATISFIABLE',
  'EXPECTATION_FAILED',
  'IM_A_TEAPOT',
  'MISDIRECTED_REQUEST',
  'UNPROCESSABLE_ENTITY',
  'LOCKED',
  'FAILED_DEPENDENCY',
  'UPGRADE_REQUIRED',
  'PRECONDITION_REQUIRED',
  'TOO_MANY_REQUESTS',
  'REQUEST_HEADER_FIELDS_TOO_LARGE',
  'UNAVAILABLE_FOR_LEGAL_REASONS',
  'INTERNAL_SERVER_ERROR',
  'NOT_IMPLEMENTED',
  'BAD_GATEWAY',
  'SERVICE_UNAVAILABLE',
  'GATEWAY_TIMEOUT',
  'HTTP_VERSION_NOT_SUPPORTED',
  'VARIANT_ALSO_NEGOTIATES',
  'INSUFFICIENT_STORAGE',
  'LOOP_DETECTED',
  'NOT_EXTENDED',
  'NETWORK_AUTHENTICATION_REQUIRED',
] as const;

export type VerboseStatusCode = (typeof verboseStatusCodes)[number];

export type StatusCodeMapping = {
  status: ContentfulStatusCode;
  message: string;
  verboseCode: VerboseStatusCode;
};

export const statusCodeMap = {
  CONTINUE: { status: 100, message: 'Continue', verboseCode: 'CONTINUE' },
  // SWITCHING_PROTOCOLS: {
  //   status: 101,
  //   message: 'Switching Protocols',
  //   verboseCode: 'SWITCHING_PROTOCOLS',
  // },
  PROCESSING: { status: 102, message: 'Processing', verboseCode: 'PROCESSING' },
  EARLY_HINTS: {
    status: 103,
    message: 'Early Hints',
    verboseCode: 'EARLY_HINTS',
  },
  OK: { status: 200, message: 'OK', verboseCode: 'OK' },
  CREATED: { status: 201, message: 'Created', verboseCode: 'CREATED' },
  ACCEPTED: { status: 202, message: 'Accepted', verboseCode: 'ACCEPTED' },
  NON_AUTHORITATIVE_INFORMATION: {
    status: 203,
    message: 'Non-Authoritative Information',
    verboseCode: 'NON_AUTHORITATIVE_INFORMATION',
  },
  // NO_CONTENT: { status: 204, message: 'No Content', verboseCode: 'NO_CONTENT' },
  // RESET_CONTENT: {
  //   status: 205,
  //   message: 'Reset Content',
  //   verboseCode: 'RESET_CONTENT',
  // },
  PARTIAL_CONTENT: {
    status: 206,
    message: 'Partial Content',
    verboseCode: 'PARTIAL_CONTENT',
  },
  MULTI_STATUS: {
    status: 207,
    message: 'Multi-Status',
    verboseCode: 'MULTI_STATUS',
  },
  ALREADY_REPORTED: {
    status: 208,
    message: 'Already Reported',
    verboseCode: 'ALREADY_REPORTED',
  },
  IM_USED: { status: 226, message: 'IM Used', verboseCode: 'IM_USED' },
  MULTIPLE_CHOICES: {
    status: 300,
    message: 'Multiple Choices',
    verboseCode: 'MULTIPLE_CHOICES',
  },
  MOVED_PERMANENTLY: {
    status: 301,
    message: 'Moved Permanently',
    verboseCode: 'MOVED_PERMANENTLY',
  },
  FOUND: { status: 302, message: 'Found', verboseCode: 'FOUND' },
  SEE_OTHER: { status: 303, message: 'See Other', verboseCode: 'SEE_OTHER' },
  // NOT_MODIFIED: { status: 304, message: 'Not Modified', verboseCode: 'NOT_MODIFIED' },
  USE_PROXY: { status: 305, message: 'Use Proxy', verboseCode: 'USE_PROXY' },
  TEMPORARY_REDIRECT: {
    status: 307,
    message: 'Temporary Redirect',
    verboseCode: 'TEMPORARY_REDIRECT',
  },
  PERMANENT_REDIRECT: {
    status: 308,
    message: 'Permanent Redirect',
    verboseCode: 'PERMANENT_REDIRECT',
  },
  BAD_REQUEST: {
    status: 400,
    message: 'Bad request',
    verboseCode: 'BAD_REQUEST',
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'Unauthorized',
    verboseCode: 'UNAUTHORIZED',
  },
  PAYMENT_REQUIRED: {
    status: 402,
    message: 'Payment required',
    verboseCode: 'PAYMENT_REQUIRED',
  },
  FORBIDDEN: { status: 403, message: 'Forbidden', verboseCode: 'FORBIDDEN' },
  NOT_FOUND: {
    status: 404,
    message: 'Resource not found',
    verboseCode: 'NOT_FOUND',
  },
  METHOD_NOT_ALLOWED: {
    status: 405,
    message: 'Method not allowed',
    verboseCode: 'METHOD_NOT_ALLOWED',
  },
  NOT_ACCEPTABLE: {
    status: 406,
    message: 'Not acceptable',
    verboseCode: 'NOT_ACCEPTABLE',
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    status: 407,
    message: 'Proxy authentication required',
    verboseCode: 'PROXY_AUTHENTICATION_REQUIRED',
  },
  REQUEST_TIMEOUT: {
    status: 408,
    message: 'Request timeout',
    verboseCode: 'REQUEST_TIMEOUT',
  },
  CONFLICT: { status: 409, message: 'Conflict', verboseCode: 'CONFLICT' },
  GONE: { status: 410, message: 'Gone', verboseCode: 'GONE' },
  LENGTH_REQUIRED: {
    status: 411,
    message: 'Length required',
    verboseCode: 'LENGTH_REQUIRED',
  },
  PRECONDITION_FAILED: {
    status: 412,
    message: 'Precondition failed',
    verboseCode: 'PRECONDITION_FAILED',
  },
  PAYLOAD_TOO_LARGE: {
    status: 413,
    message: 'Payload too large',
    verboseCode: 'PAYLOAD_TOO_LARGE',
  },
  URI_TOO_LONG: {
    status: 414,
    message: 'URI too long',
    verboseCode: 'URI_TOO_LONG',
  },
  UNSUPPORTED_MEDIA_TYPE: {
    status: 415,
    message: 'Unsupported media type',
    verboseCode: 'UNSUPPORTED_MEDIA_TYPE',
  },
  RANGE_NOT_SATISFIABLE: {
    status: 416,
    message: 'Range not satisfiable',
    verboseCode: 'RANGE_NOT_SATISFIABLE',
  },
  EXPECTATION_FAILED: {
    status: 417,
    message: 'Expectation failed',
    verboseCode: 'EXPECTATION_FAILED',
  },
  IM_A_TEAPOT: {
    status: 418,
    message: "I'm a teapot",
    verboseCode: 'IM_A_TEAPOT',
  },
  MISDIRECTED_REQUEST: {
    status: 421,
    message: 'Misdirected request',
    verboseCode: 'MISDIRECTED_REQUEST',
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    message: 'Unprocessable entity',
    verboseCode: 'UNPROCESSABLE_ENTITY',
  },
  LOCKED: { status: 423, message: 'Locked', verboseCode: 'LOCKED' },
  FAILED_DEPENDENCY: {
    status: 424,
    message: 'Failed dependency',
    verboseCode: 'FAILED_DEPENDENCY',
  },
  UPGRADE_REQUIRED: {
    status: 426,
    message: 'Upgrade required',
    verboseCode: 'UPGRADE_REQUIRED',
  },
  PRECONDITION_REQUIRED: {
    status: 428,
    message: 'Precondition required',
    verboseCode: 'PRECONDITION_REQUIRED',
  },
  TOO_MANY_REQUESTS: {
    status: 429,
    message: 'Too many requests',
    verboseCode: 'TOO_MANY_REQUESTS',
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    status: 431,
    message: 'Request header fields too large',
    verboseCode: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
  },
  UNAVAILABLE_FOR_LEGAL_REASONS: {
    status: 451,
    message: 'Unavailable for legal reasons',
    verboseCode: 'UNAVAILABLE_FOR_LEGAL_REASONS',
  },
  INTERNAL_SERVER_ERROR: DEFAULT_ERROR_MAPPING,
  NOT_IMPLEMENTED: {
    status: 501,
    message: 'Not Implemented',
    verboseCode: 'NOT_IMPLEMENTED',
  },
  BAD_GATEWAY: {
    status: 502,
    message: 'Bad Gateway',
    verboseCode: 'BAD_GATEWAY',
  },
  SERVICE_UNAVAILABLE: {
    status: 503,
    message: 'Service Unavailable',
    verboseCode: 'SERVICE_UNAVAILABLE',
  },
  GATEWAY_TIMEOUT: {
    status: 504,
    message: 'Gateway Timeout',
    verboseCode: 'GATEWAY_TIMEOUT',
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    status: 505,
    message: 'HTTP Version Not Supported',
    verboseCode: 'HTTP_VERSION_NOT_SUPPORTED',
  },
  VARIANT_ALSO_NEGOTIATES: {
    status: 506,
    message: 'Variant Also Negotiates',
    verboseCode: 'VARIANT_ALSO_NEGOTIATES',
  },
  INSUFFICIENT_STORAGE: {
    status: 507,
    message: 'Insufficient Storage',
    verboseCode: 'INSUFFICIENT_STORAGE',
  },
  LOOP_DETECTED: {
    status: 508,
    message: 'Loop Detected',
    verboseCode: 'LOOP_DETECTED',
  },
  NOT_EXTENDED: {
    status: 510,
    message: 'Not Extended',
    verboseCode: 'NOT_EXTENDED',
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    status: 511,
    message: 'Network Authentication Required',
    verboseCode: 'NETWORK_AUTHENTICATION_REQUIRED',
  },
} as const satisfies Record<VerboseStatusCode, StatusCodeMapping>;

export type StatusCodeToVerboseCode<T extends number> = {
  [K in keyof typeof statusCodeMap]: (typeof statusCodeMap)[K]['status'] extends T
    ? (typeof statusCodeMap)[K]['verboseCode']
    : never;
}[keyof typeof statusCodeMap];
