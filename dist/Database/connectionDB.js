"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let DataBaseUrl = process.env.DATABASE_URL;
const db = new sequelize_1.Sequelize(DataBaseUrl || "", {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});
exports.default = db;
//# sourceMappingURL=connectionDB.js.map