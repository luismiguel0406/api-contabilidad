"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const Cliente_model_1 = __importDefault(require("../Clientes/Cliente.model"));
const suppliers_model_1 = __importDefault(require("../suppliers/suppliers.model"));
const typeContacts_model_1 = __importDefault(require("./typeContacts.model"));
const correos = database_1.default.define("correo", {
    correo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
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
Cliente_model_1.default.hasMany(correos, { foreignKey: "clienteId" });
correos.belongsTo(Cliente_model_1.default);
suppliers_model_1.default.hasMany(correos, { foreignKey: "proveedorId" });
correos.belongsTo(suppliers_model_1.default);
typeContacts_model_1.default.hasMany(correos, { foreignKey: "tipoContactoId" });
correos.belongsTo(typeContacts_model_1.default);
exports.default = correos;
//# sourceMappingURL=Correos.model.js.map