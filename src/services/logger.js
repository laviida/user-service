const { createLogger, format, transports } = require('winston');
const { LOGGER, RESPONSE } = require(`../constants/constants`);

const formatter = format((info) => {
    var { level, message, timestamp } = info;
    var _level = '';
    message = message.replace(/KO$/, `${LOGGER.COLORS.RED}${RESPONSE.KO}${LOGGER.COLORS.RESET}`).replace(/OK$/, `${LOGGER.COLORS.GREEN}${RESPONSE.OK}${LOGGER.COLORS.RESET}`);
    timestamp = `${LOGGER.COLORS.LIGHTBLUE}[${LOGGER.COLORS.GREEN}${timestamp}${LOGGER.COLORS.LIGHTBLUE}]${LOGGER.COLORS.RESET}`;
    switch (level) {
        case LOGGER.LEVELS.ERROR:
            _level = `${LOGGER.COLORS.RED}${level.toUpperCase()}${LOGGER.COLORS.RESET} :: `;
            break;
        case LOGGER.LEVELS.FUNCTION:
            _level = `${LOGGER.COLORS.PURPLE}${level.toUpperCase()}${LOGGER.COLORS.RESET} :: `;
            break;
        case LOGGER.LEVELS.REQUEST:
            _level = `${LOGGER.COLORS.BLUE}${level.toUpperCase()}${LOGGER.COLORS.RESET} :: `;
            break;
        case LOGGER.LEVELS.RESPONSE:
            _level = `${LOGGER.COLORS.LIGHTBLUE}${level.toUpperCase()}${LOGGER.COLORS.RESET} :: `;
            break;
        case LOGGER.LEVELS.INFO:
            message = `${LOGGER.COLORS.YELLOW}${message}${LOGGER.COLORS.RESET}`;
            break;
        default:
            break;
    }

    info.message = `${timestamp} ${_level}${message} END`.replace(/\t/g, '').replace(/\n/g, '');
    return info;
});

module.exports = createLogger({
    levels: { error: 0, function: 1, request: 2, response: 3, debug: 4, info: 5 },
    format: format.combine(
        format.simple(),
        format.align(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        formatter(),
        format.printf(info => info.message)
    ),
    transports: [
        new transports.File({
            maxsize: 5120000,
            filename: `./src/data/logs/log-api.log`
        }),
        new transports.Console({
            format: format.printf(info => info.message.replace(/ END/g, ''))
        })
    ]
})