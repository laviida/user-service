require("dotenv").config();

const keys = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbLogging: false,
    port: process.env.PORT,
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
    requestLimit: process.env.LIMIT,
    dialect: process.env.DIALECT,
    authUri: process.env.AUTH_SERVICE_URI,
    salt: parseInt(process.env.SALT),
    tokenSecret: process.env.TOKEN_SECRET

}

module.exports = keys;
