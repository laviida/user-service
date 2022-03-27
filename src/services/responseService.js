exports.response = {
    success: (data, message) => ({ data, message, error: false }),
    error: (data, message, stack) => ({ data, message, stack, error: true })
}