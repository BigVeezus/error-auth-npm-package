import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";
import { RequestValidationError } from "../errors/request-validation";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    // console.log("handling this error as a Request Validation error");

    return res.status(400).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
