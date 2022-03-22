const config = require(`../config/config`);
const logger = require("../services/logger");

const mongoose = require("mongoose");
const dbUri = `mongodb+srv://${config.username}:${config.password}@technical-test.nibj1.mongodb.net/${config.database}?retryWrites=true&w=majority`;
mongoose.connect(dbUri);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => logger.info("Mongoose default connection open"));

// If the connection throws an error
mongoose.connection.on('error', (err) => logger.error(`Mongoose default connection error: ${err}`));

// When the connection is disconnected
mongoose.connection.on('disconnected', (err) => logger.info(`Mongoose default connection disconnected`));

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        logger.info('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose;