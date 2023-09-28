import axios from 'axios';
import { environment } from './environment';

export const apiConnectionAuth0 = () => {
  const api = axios.create({
    baseURL: environment.AUTH0_DOMAIN,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.AUTH0_TOKEN}`,
    }
  });

  return api;
};
