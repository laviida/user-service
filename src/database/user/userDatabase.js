const User = require("../../models/userModel");

exports.create = async (name, surname, email, password) => {
    const user = new User({ name, surname, email, password });
    await user.save();
    return user;
}

exports.update = async (id, updatedUser) => await User.findByIdAndUpdate(id, updatedUser);

exports.delete = async (id) => await User.findByIdAndDelete(id);

exports.get = async (id) => await User.findById(id);

exports.list = async (page, limit) => await User.paginate({}, { page, limit, sort: { _id: "asc" } })



