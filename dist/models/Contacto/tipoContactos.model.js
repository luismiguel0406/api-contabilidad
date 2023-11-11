"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const Cliente_model_1 = __importDefault(require("../Clientes/Cliente.model"));
const Proveedores_model_1 = __importDefault(require("../Proveedores/Proveedores.model"));
const tiposContactos = database_1.default.define("tipoContactos", {
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
}, { schema: "CONTACTOS" });
//--------- ASOCIACIONES ---------//--verificar
tiposContactos.hasMany(Cliente_model_1.default, { foreignKey: "tipoContactoId" });
Cliente_model_1.default.belongsTo(tiposContactos);
tiposContactos.hasMany(Proveedores_model_1.default, { foreignKey: "tipoContactoId" });
Proveedores_model_1.default.belongsTo(tiposContactos);
exports.default = tiposContactos;
//# sourceMappingURL=tipoContactos.model.js.map