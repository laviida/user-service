const express = require('express');
const app = express();
const logger = require("./src/services/logger");
const helmet = require('helmet');
const compression = require('compression');
const config = require("./src/config/config");
const database = require("./src/database/database");
const cors = require('cors');

// Settings
app.set('port', config.port);

// Middlewares
app.use(express.json({ limit: config.requestLimit }));
app.use(express.urlencoded({ limit: config.requestLimit, extended: true }));
app.use(helmet());
app.use(compression());
app.use(cors());

// Routes
app.use('/api/v1/user', require("./src/routes/userRoute"));

// HEALTH CHECK
app.use('/health', (req, res) => res.status(200).send("I'm alive"));

database.connect().then(() => {
    app.listen(app.get('port'), () => logger.info(`Server running on port ${app.get('port')}`));
})





