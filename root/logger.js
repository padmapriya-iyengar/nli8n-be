const winston = require('winston')
const drFile = require('winston-daily-rotate-file')
const config = require('./config')

const logFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(
    info => `${info.timestamp} ${info.level}: ${info.message}`)
);

const transport = new drFile({
    filename: config.log_config.folder + config.log_config.file,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '10m',
    maxFiles:'10d',
    prepend: true
});
transport.on('rotate', function (oldFilename, newFilename) {
    // upload to cloud
});

const logger = winston.createLogger({
    format: logFormat,
    transports: [
        transport,
        new winston.transports.Console({level: 'info', format: winston.format.combine( winston.format.colorize(), logFormat)})
    ]
});

module.exports = logger;