"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const empresas = database_1.default.define("empresa", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    alias: {
        type: sequelize_1.DataTypes.STRING,
    },
    rnc: {
        type: sequelize_1.DataTypes.STRING(11),
        allowNull: false,
        unique: true,
    },
    sucursalId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    planId: {
        type: sequelize_1.DataTypes.INTEGER,
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
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { schema: "EMPRESA" });
//empresas.sync()
exports.default = empresas;
//# sourceMappingURL=empresa.model.js.map