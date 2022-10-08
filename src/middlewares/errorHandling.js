import logger from "../containers/indexLogger.js";

export const errorHandling = (err, req, res, next) => {
    logger.error(err.stack);
    next(err);
}