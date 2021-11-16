"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const Cliente_model_1 = __importDefault(require("./Cliente.model"));
const tipoCliente = connectionDB_1.default.define("tipoCliente", {
    descripcion: {
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
}, {
    schema: "CLIENTES"
});
tipoCliente.sync();
tipoCliente.hasMany(Cliente_model_1.default, {
    foreignKey: 'tipoClienteId'
});
exports.default = tipoCliente;
//# sourceMappingURL=tiposClientes.model.js.map