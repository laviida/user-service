exports.LOGGER = Object.freeze({
    LEVELS: {
        FUNCTION: 'function',
        ERROR: 'error',
        INFO: 'info',
        DEBUG: 'debug',
        REQUEST: 'request',
        RESPONSE: 'response'
    },
    COLORS: { BLACK: '[30m', PURPLE: '[35m', BLUE: '[34m', GREEN: '[32m', YELLOW: '[33m', LIGHTBLUE: '[36m', RED: '[31m', RESET: '[39m' },
});

exports.HTTP_STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500
}

exports.RESPONSE = Object.freeze({
    OK: "OK",
    KO: "KO"
})
