import "dotenv/config";

export const PORT = parseInt(process.env.API_PORT as string) || 5999;

export const POSTGRESS_DATABASE = process.env.POSTGRESS_DATABASE as string;
export const POSTGRESS_USERNAME = process.env.POSTGRESS_USERNAME as string;
export const POSTGRESS_PASSWORD = process.env.POSTGRESS_PASSWORD as string;
