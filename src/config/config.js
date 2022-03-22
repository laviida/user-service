require("dotenv").config();

const keys = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_logging: false,
    port: process.env.PORT,
    connection_limit: process.env.DB_CONNECTION_LIMIT,
    request_limit: process.env.LIMIT,
    dialect: process.env.DIALECT
}

module.exports = keys;
