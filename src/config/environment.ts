import dotenv from 'dotenv';
dotenv.config();

export const environment: Record<string, any> = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  BASE_URL: process.env.BASE_URL,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_SECRET_KEY: process.env.AUTH0_SECRET_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
  AUTH0_TOKEN: "",
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
  AUTH0_CERTIFICATE: process.env.AUTH0_CERTIFICATE,
}

export const alterEnvironment = (key: string, value: string) => {
  environment[key] = value;
};
