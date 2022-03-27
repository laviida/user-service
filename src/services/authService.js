const jwt = require('jsonwebtoken');
const { tokenSecret } = require('../config/config');

exports.verify = (token) => jwt.verify(token, tokenSecret);

