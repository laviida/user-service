const userDatabase = require(`../database/user/userDatabase`);

exports.getUser = async (id) => await userDatabase.get(id);

exports.createUser = async (name, surname, email, password) => await userDatabase.create(name, surname, email, password);

exports.updateUser = async (id, updatedUser) => await userDatabase.update(id, updatedUser);

exports.listUsers = async (page, limit) => await userDatabase.list(page, limit)

exports.deleteUser = async (id) => await userDatabase.delete(id);
