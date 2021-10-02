import dotenv from "dotenv";

//dotenv.config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 3000,
  HOST:process.env.HOST || '127.0.0.1',
  HOST_DB:process.env.HOST_DB,
  USER_DB:process.env.USER_DB,
  DATABASE_NAME:process.env.DATABASE_NAME,
  PASSWORD_DB:process.env.PASSWORD_DB,
  DATABASE_URL:process.env.DATABASE_URL
};


