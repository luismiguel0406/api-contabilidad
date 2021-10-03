import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

let DataBaseUrl = process.env.DATABASE_URL;

const db = new Sequelize(DataBaseUrl || "", {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default db;
