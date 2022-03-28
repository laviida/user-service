const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { tokenSecret, salt } = require('../config/config');

exports.hash = (password) => bcrypt.hashSync(password, salt)

exports.verify = (token) => jwt.verify(token, tokenSecret);

