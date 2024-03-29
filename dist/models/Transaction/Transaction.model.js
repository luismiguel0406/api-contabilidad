"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const transaction = database_1.default.define("transaction", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    payload: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    username: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
}, { schema: "DIARIO" });
exports.default = transaction;
//# sourceMappingURL=Transaction.model.js.map