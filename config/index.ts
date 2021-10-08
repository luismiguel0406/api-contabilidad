import dotenv from "dotenv";

dotenv.config();

export default  {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  HOST:process.env.HOST,
  HOST_DB:process.env.HOST_DB,
  USER_DB:process.env.USER_DB,
  DATABASE_NAME:process.env.DATABASE_NAME,
  PASSWORD_DB:process.env.PASSWORD_DB,
  DATABASE_URL:process.env.DATABASE_URL
};


