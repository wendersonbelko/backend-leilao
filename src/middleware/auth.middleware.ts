import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { environment } from '../config/environment';
import { UserRepository } from '../module/user/user.repository';
import { Result } from '../handler/response';
import { HttpStatusCode } from 'axios';

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null

  if (!token) {
    return new Result().handler(
      'ERROR',
      HttpStatusCode.Unauthorized,
      'Token não fornecido',
      res
    );
  }

  try {
    jwt.verify(token, environment.JWT_SECRET!);
    const decoded = jwt.decode(token, {
      json: true,
      complete: false
    })

    req.user = decoded!.user;
  } catch (error) {
    return new Result().handler(
      'ERROR',
      HttpStatusCode.Unauthorized,
      'Token inválido',
      res
    );
  }

  next();
};
