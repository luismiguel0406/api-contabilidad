import { Sequelize } from "sequelize";
import variablesEnv from "../config/index";

 const db = new Sequelize(
  `${variablesEnv.DB_NAME_LOCAL}`,
  `${variablesEnv.USER_LOCAL}`,
  `${variablesEnv.PASSWORD_LOCAL}`,
  {
    host: `${variablesEnv.DB_URL_LOCAL}`,
    dialect: "postgres",
    define: {
      freezeTableName: true,
    },
    /* dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },*/
  }
);

export default db;
