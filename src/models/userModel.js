const mongoose = require("../database/database")
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        surname: { type: String, required: true }
    },
    { collection: 'users' }
);

UserSchema.plugin(mongoosePaginate);


const userModel = mongoose.model('User', UserSchema);

userModel.paginate().then({});

module.exports = userModel;