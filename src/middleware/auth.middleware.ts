import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { environment } from '../config/environment';

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null

  if (!token) {
    return new ErrorHandler(HttpStatusCodes.ClientError.Unauthorized, 'Token não fornecido');
  }

  try {
    const decoded = jwt.verify(token, environment.JWT_SECRET!);
    req.user = decoded as User.User;
  } catch (error) {
    return new ErrorHandler(HttpStatusCodes.ClientError.Unauthorized, 'Token inválido');
  }

  next();
};
