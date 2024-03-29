"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../../database"));
const currency = database_1.default.define("currency", {
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    symbol: {
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
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { schema: "FACTURACION" });
exports.default = currency;
//# sourceMappingURL=currency.model.js.map