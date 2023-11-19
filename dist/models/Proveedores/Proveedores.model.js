"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const tipoProveedores_model_1 = __importDefault(require("./tipoProveedores.model"));
const Proveedores = database_1.default.define("proveedor", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tipoDocumentoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipoServicioId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    direccionId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    entidadBancariaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    documento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    numeroCuenta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    infoAdicional: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
    tipoContactoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipoProveedorId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "PROVEEDORES" });
//--- ASOCIACIONES---//
tipoProveedores_model_1.default.hasMany(Proveedores, { foreignKey: "tipoProveedorId" });
Proveedores.belongsTo(tipoProveedores_model_1.default);
exports.default = Proveedores;
//# sourceMappingURL=Proveedores.model.js.map