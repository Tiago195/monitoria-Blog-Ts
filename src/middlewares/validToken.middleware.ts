import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';

import ErrorGenerate from '../utils/ErrorGenerate';
import Token from '../utils/Token';

// interface ITeste extends Request {
//   user: string | JwtPayload | null
// }

export default (req: Request, _res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) return next(new ErrorGenerate('Token not found', 401));

  try {
    Token.decode(token);
  } catch (error) {
    return next(new ErrorGenerate('Expired or invalid token', 401));
  }
  return next();
};
