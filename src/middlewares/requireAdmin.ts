import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ApiError from '../utils/apiError.utils';

const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { user } = res.locals;

  if (!user) {
    throw new ApiError(StatusCodes.FORBIDDEN, 'Not logged in');
  }

  if (user.isTokenExpired)
    throw new ApiError(StatusCodes.UNAUTHORIZED, 'JWT Token expired');

  if (user.decoded.auth !== 'admin')
    throw new ApiError(
      StatusCodes.UNAUTHORIZED,
      'Only admins have acess to this route'
    );

  return next();
};

export default requireAdmin;
