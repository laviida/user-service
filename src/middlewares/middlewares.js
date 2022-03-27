const { HTTP_STATUS_CODES } = require("../constants/constants");
const { response } = require("../services/responseService");
const { verify } = require("../services/authService");
const { tokenSecret } = require("../config/config");

exports.checkToken = (req, res, next) => {
    try {
        if (!req.headers.authorization) return res.status(HTTP_STATUS_CODES.FORBIDDEN).json(response.error({}, "Authorization header not found"));

        const token = req.headers.authorization.split(" ")[1];
        if (!verify(token, tokenSecret)) return res.status(HTTP_STATUS_CODES.FORBIDDEN).json(response.error({}, "Token expired"));

        next();
    } catch (error) {
        res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_SERVER).json(response.error(error.name, error.message, error.stack))
    }
}
