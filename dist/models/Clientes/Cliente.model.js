"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const Correos_model_1 = __importDefault(require("../Contacto/Correos.model"));
const Direcciones_model_1 = __importDefault(require("../Contacto/Direcciones.model"));
const telefono_model_1 = __importDefault(require("../Contacto/telefono.model"));
const clientes = connectionDB_1.default.define("clientes", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    RNC_Cedula: {
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
    },
    tipoClienteId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, { schema: "CLIENTES" });
clientes.hasMany(Correos_model_1.default, {
    foreignKey: "contactoId",
});
Correos_model_1.default.belongsTo(clientes, { as: "contacto" });
//-----------------------------------//
clientes.hasMany(telefono_model_1.default, {
    foreignKey: "contactoId",
});
telefono_model_1.default.belongsTo(clientes, { as: "contacto" });
//------------------------------------//
clientes.hasMany(Direcciones_model_1.default, {
    foreignKey: "contactoId",
});
Direcciones_model_1.default.belongsTo(clientes, { as: "contacto" });
exports.default = clientes;
//# sourceMappingURL=Cliente.model.js.map