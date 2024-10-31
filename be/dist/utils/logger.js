import { createLogger, transports, format } from 'winston';
const logger = createLogger({
    format: format.combine(format.timestamp(), format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
    ],
});
export default logger;
