"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const Cliente_model_1 = __importDefault(require("../Clientes/Cliente.model"));
const tipoContactos_model_1 = __importDefault(require("./tipoContactos.model"));
const direcciones = connectionDB_1.default.define("direccion", {
    direccion: {
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
    clienteId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    proveedorId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    tipoContactoId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, { schema: "CONTACTOS" });
//--- ASOCIACIONES---// 
Cliente_model_1.default.hasMany(direcciones, { foreignKey: "clienteId" });
direcciones.belongsTo(Cliente_model_1.default);
tipoContactos_model_1.default.hasMany(direcciones, { foreignKey: "tipoContactoId" });
direcciones.belongsTo(tipoContactos_model_1.default);
exports.default = direcciones;
//# sourceMappingURL=Direcciones.model.js.map