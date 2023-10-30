import { environment } from "../src/config/environment";
import helmet from 'helmet';
import { auth } from 'express-oauth2-jwt-bearer';
import { rateLimit } from 'express-rate-limit';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './config/route';
import { server, app } from './app';
import { config, cronAuth0 } from "./config/auth0";

// app.set('trust proxy', 1);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth(config));
app.use(helmet());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  limit: 50,
  message: 'Muitas requisições pelo mesmo IP, tente novamente mais tarde!',
  standardHeaders: 'draft-7',
  legacyHeaders: false
})
app.use(limiter);

cronAuth0();

app.use(router);

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({ message: 'Rota não encontrada!' })
});

server.listen(environment.PORT, () => {
  console.log(`Example app listening at http://localhost:${environment.PORT}`);
});
