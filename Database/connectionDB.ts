import { Sequelize } from "sequelize";
import variablesEnv from "../config/index";


const db = new Sequelize(variablesEnv.DATABASE_URL || '', {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default db;
