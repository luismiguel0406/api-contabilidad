"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../../database"));
const impuestos = database_1.default.define("impuesto", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    alias: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    porcentaje: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    estado: {
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
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
}, { schema: "FACTURACION" });
exports.default = impuestos;
//# sourceMappingURL=impuestos.model.js.map