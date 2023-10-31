"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const tipoCliente_model_1 = __importDefault(require("./tipoCliente.model"));
const clientes = connectionDB_1.default.define("clientes", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    documento: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
    },
    pagaItbis: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: "1",
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
    tipoContactoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipoClienteId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "CLIENTES" });
//--- ASOCIACIONES---//
tipoCliente_model_1.default.hasMany(clientes, { foreignKey: "tipoClienteId" });
clientes.belongsTo(tipoCliente_model_1.default);
exports.default = clientes;
//# sourceMappingURL=Cliente.model.js.map