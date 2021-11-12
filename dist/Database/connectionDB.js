"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("../config/index"));
const db = new sequelize_1.Sequelize(index_1.default.DATABASE_URL || "", {
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
exports.default = db;
//# sourceMappingURL=connectionDB.js.map