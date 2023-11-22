"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const tipoContactos_model_1 = __importDefault(require("./tipoContactos.model"));
const direcciones = database_1.default.define("direccion", {
    distrito: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sector: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    calle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    numeroEdificio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
    referenciaContactoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipoContactoId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, { schema: "CONTACTOS" });
//--- ASOCIACIONES---//
tipoContactos_model_1.default.hasMany(direcciones, { foreignKey: "tipoContactoId" });
direcciones.belongsTo(tipoContactos_model_1.default);
exports.default = direcciones;
//# sourceMappingURL=direcciones.model.js.map