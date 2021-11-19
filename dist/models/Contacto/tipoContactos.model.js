"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const Cliente_model_1 = __importDefault(require("../Clientes/Cliente.model"));
const Correos_model_1 = __importDefault(require("./Correos.model"));
const Direcciones_model_1 = __importDefault(require("./Direcciones.model"));
const telefono_model_1 = __importDefault(require("./telefono.model"));
const tiposContactos = connectionDB_1.default.define("tipoContactos", {
    tipoContacto: {
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
    }
}, { schema: "CONTACTOS" });
//--------- ASOCIACIONES ---------//
tiposContactos.hasMany(Cliente_model_1.default, { foreignKey: "tipoContactoId" });
Cliente_model_1.default.belongsTo(tiposContactos, { as: "tipoContacto" });
tiposContactos.hasMany(Correos_model_1.default, { foreignKey: "tipoContactoId" });
Correos_model_1.default.belongsTo(tiposContactos, { as: "tipoContacto" });
tiposContactos.hasMany(Direcciones_model_1.default, { foreignKey: "tipoContactoId" });
Direcciones_model_1.default.belongsTo(tiposContactos, { as: "tipoContacto" });
tiposContactos.hasMany(telefono_model_1.default, { foreignKey: "tipoContactoId" });
telefono_model_1.default.belongsTo(tiposContactos, { as: "tipoContacto" });
exports.default = tiposContactos;
//# sourceMappingURL=tipoContactos.model.js.map