const userDatabase = require(`../database/user/userDatabase`);
const { hash } = require(`../services/authService`);

exports.getUser = async (id) => await userDatabase.get(id);

exports.createUser = async (name, surname, email, password) => await userDatabase.create(name, surname, email, hash(password));

exports.updateUser = async (id, updatedUser) => {
    if (updatedUser.password) updatedUser.password = hash(updatedUser.password);
    return await userDatabase.update(id, updatedUser)
};

exports.listUsers = async (page, limit) => await userDatabase.list(page, limit)

exports.deleteUsers = async (ids) => await userDatabase.delete(ids);
