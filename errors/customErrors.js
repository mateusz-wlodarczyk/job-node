import { StatusCodes } from "http-status-codes";

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = "NotFound Error";
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = "BadRequestError ";
    this.statusCode = StatusCodes.BadRequestError;
  }
}

export class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = "UnauthenticatedError Error";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = "UnauthorizedError Error";
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
