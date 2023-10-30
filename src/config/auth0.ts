import { alterEnvironment, environment } from '../config/environment';
import cron from 'node-cron';
import { apiConnectionAuth0 } from './axios';

export const config = {
  authRequired: false,
  strict: true,
  audience: environment.AUTH0_AUDIENCE,
  issuerBaseURL: environment.AUTH0_DOMAIN,
  certificate: environment.AUTH0_CERTIFICATE,
};

const refrashTokenAuth0 = async () => {
  const data = await apiConnectionAuth0().post('/oauth/token', {
    grant_type: 'client_credentials',
    client_id: environment.AUTH0_CLIENT_ID,
    client_secret: environment.AUTH0_SECRET_KEY,
    audience: environment.AUTH0_AUDIENCE,
  });

  return data;
};

export const cronAuth0 = async () => {
  //executa quando inicia
  const token = await refrashTokenAuth0();
  alterEnvironment('AUTH0_TOKEN', token.data.access_token);

  //executa a cada 1400 minutos (23 horas e 20 minutos)
  cron.schedule(`0 0/1400 * * * *`, async () => {
    const token = await refrashTokenAuth0();
    alterEnvironment('AUTH0_TOKEN', token.data.access_token);
  });
};