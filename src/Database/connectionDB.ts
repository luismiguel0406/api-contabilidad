import { Sequelize } from "sequelize";
import variablesEnv from "../config/index";


const db = new Sequelize(`${variablesEnv.DATABASE_URL_DIGITAL_OCEAN}`, {
  dialect: "postgres",
  define: {
    freezeTableName: true,
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default db;


