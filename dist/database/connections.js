"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("../config/index"));
const sequelizeConnection = new sequelize_1.Sequelize(`${index_1.default.DB_NAME_LOCAL}`, `${index_1.default.USER_LOCAL}`, `${index_1.default.PASSWORD_LOCAL}`, {
    host: `${index_1.default.DB_URL_LOCAL}`,
    dialect: "postgres",
    define: {
        freezeTableName: true,
    },
    /* dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },*/
});
exports.default = sequelizeConnection;
//# sourceMappingURL=connections.js.map