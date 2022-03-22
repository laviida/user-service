const express = require('express');
const app = express();
const logger = require("./src/services/logger");
const helmet = require('helmet');
const compression = require('compression');
const config = require("./src/config/config");

// Settings
app.set('port', config.port);

// Middlewares
app.use(express.json({ limit: config.request_limit }));
app.use(express.urlencoded({ limit: config.request_limit, extended: true }));
app.use(helmet());
app.use(compression());

// Routes
app.use('/api/v1', require("./src/routes/userRoute"));

// HEALTH CHECK
app.use('/health', (req, res) => res.status(200).send("I'm alive"));

app.listen(app.get('port'), () => logger.info(`Server running on port ${app.get('port')}`));





