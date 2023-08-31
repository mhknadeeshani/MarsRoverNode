import { createLogger, transports, format } from "winston";
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} - ${level}: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(timestamp(), myFormat),
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
});

export { logger };
