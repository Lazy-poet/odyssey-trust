import HttpStatusCodes from "http-status-codes";
import response from "../utils/response";
import env from "../config/env.config";
import { Request, Response } from "express";

export abstract class CustomError extends Error {
  public readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(msg: string, httpStatus: number) {
    super(msg);
    this.HttpStatus = httpStatus;
  }
}

export class ValidationError extends CustomError {
  public static readonly Msg =
    "One or more of the required parameters was missing.";
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(msg: string) {
    super(msg, ValidationError.HttpStatus);
  }
}
export class ClientVerificationError extends CustomError {
  public static readonly Msg =
    "One or more of the required parameters was missing.";
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(msg: string) {
    super(msg, ValidationError.HttpStatus);
  }
}

export class UserNotFoundError extends CustomError {
  public static readonly Msg =
    "A user with the given id does not exists in the database.";
  public static readonly HttpStatus = HttpStatusCodes.NOT_FOUND;

  constructor() {
    super(UserNotFoundError.Msg, UserNotFoundError.HttpStatus);
  }
}

const NODE_ENV = env.getValue("NODE_ENV");

export class AsyncError {
  /**
   *
   * @param asyncFn The async controller function
   * @param errorMessage The error message to be sent if an error is caught
   * @returns an async function wrapped in the trycatch block
   */
  public catchAsyncError = (
    asyncFn: (req: Request, res: Response) => Promise<void>,
    errorMessage?: string
  ) => {
    return async (req: Request, res: Response) => {
      try {
        await asyncFn(req, res);
      } catch (error: any) {
        NODE_ENV === "local" && console.log(error); //log error to console in dev mode
        return response.setError(res, 500, errorMessage || error.message);
      }
    };
  };
}

export const catchAsyncError = new AsyncError().catchAsyncError;
