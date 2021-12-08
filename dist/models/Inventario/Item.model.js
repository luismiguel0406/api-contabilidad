"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const item = connectionDB_1.default.define("item", {
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    precioCompra: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0.0,
    },
    precioVenta: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0.0,
    },
    margenGanancia: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0.0,
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    cantidadMinima: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    ubicacion: {
        type: sequelize_1.DataTypes.STRING,
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
    tipoItemId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { schema: "INVENTARIO" });
exports.default = item;
//# sourceMappingURL=Item.model.js.map