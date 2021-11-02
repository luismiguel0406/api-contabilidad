"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const tiposClientes_model_1 = __importDefault(require("./tiposClientes.model"));
const clientes = connectionDB_1.default.define("cliente", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    RNC: {
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
}, { schema: "CLIENTES",
    tableName: "clientes" });
clientes.sync({ force: true });
clientes.hasOne(tiposClientes_model_1.default, {
    foreignKey: 'tipoClienteId',
});
exports.default = clientes;
//# sourceMappingURL=Cliente.model.js.map