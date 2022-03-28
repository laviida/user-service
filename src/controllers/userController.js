const userBusiness = require(`../business/userBusiness`);
const { HTTP_STATUS_CODES } = require("../constants/constants");
const { response } = require("../services/responseService");

exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userBusiness.getUser(id);
        res.json(response.success({ user }))
    } catch (error) {
        res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_SERVER).json(response.error(error.name, error.message, error.stack))
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = req.body.user;
        const user = await userBusiness.updateUser(id, updatedUser);
        res.json(response.success({ user }))
    } catch (error) {
        res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_SERVER).json(response.error(error.name, error.message, error.stack))
    }
}


exports.saveUser = async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const user = await userBusiness.createUser(name, surname, email, password);
        res.json(response.success({ user }))
    } catch (error) {
        res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_SERVER).json(response.error(error.name, error.message, error.stack))
    }
}
exports.listUsers = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const users = await userBusiness.listUsers(page, limit);
        res.json(response.success({ users }))
    } catch (error) {
        res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_SERVER).json(response.error(error.name, error.message, error.stack))
    }
}

exports.deleteUsers = async (req, res) => {
    try {
        const { ids } = req.body;
        await userBusiness.deleteUsers(ids);
        res.json(response.success({}))
    } catch (error) {
        res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_SERVER).json(response.error(error.name, error.message, error.stack))
    }
}