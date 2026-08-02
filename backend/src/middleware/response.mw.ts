import { RequestHandler, Request, Response, NextFunction } from "express";

const responseMiddleware: RequestHandler = (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.success = (data: unknown) => {
    res.status(200).json({ status: "success", data });
  };
  res.sendResponse = (statusCode: number, data: unknown) => {
    res.status(statusCode).json({ status: statusCode, data });
  };
  next();
};

export default responseMiddleware;
