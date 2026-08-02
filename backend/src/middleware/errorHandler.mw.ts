import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";
import { AppError } from "../utils/error";

export const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let statusCode = 500;
  let message = "Something went wrong. Please try again later.";
  let details: unknown;
  logger.error({ error: err.message, stack: err.stack }, "An error occurred");
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    details = err.details;
  }
  res.sendResponse(statusCode, { success: false, error: message, details });
};
