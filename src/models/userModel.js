const { mongoose } = require("../database/database")
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String, required: false },
        surname: { type: String, required: false }
    },
    { collection: 'users' }
);

UserSchema.plugin(mongoosePaginate);


const userModel = mongoose.model('User', UserSchema);

module.exports = userModel;