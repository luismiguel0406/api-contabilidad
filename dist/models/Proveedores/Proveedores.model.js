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
const Proveedores = connectionDB_1.default.define("proveedor", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    RNC_Cedula: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
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
//----------  ASOCIACIONES ------------//
Proveedores.hasMany(Correos_model_1.default, { foreignKey: "proveedorId" });
Correos_model_1.default.belongsTo(Proveedores);
Proveedores.hasMany(telefono_model_1.default, { foreignKey: "proveedorId" });
telefono_model_1.default.belongsTo(Proveedores);
Proveedores.hasMany(Direcciones_model_1.default, { foreignKey: "proveedorId" });
Direcciones_model_1.default.belongsTo(Proveedores);
exports.default = Proveedores;
//# sourceMappingURL=Proveedores.model.js.map