import dotenv from "dotenv";

dotenv.config();

export default  {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  DB_NAME :process.env.DB_NAME,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  HOST: process.env.HOST
};


