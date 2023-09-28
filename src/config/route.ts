import { Router } from 'express';
import { authController } from '../module/auth/auth.controller';

interface IRoutes {
    prefix: string
    controllers: Router[]
}

const route = Router();

export const Routes: IRoutes[] = [
    {
        prefix: '/auth',
        controllers: [
          route.post('/login', authController.login),
          route.post('/register', authController.register)
        ]
    }
];