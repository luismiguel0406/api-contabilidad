"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const tipoProveedores_model_1 = __importDefault(require("./tipoProveedores.model"));
const Proveedores = connectionDB_1.default.define("proveedor", {
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
//--- ASOCIACIONES---// 
tipoProveedores_model_1.default.hasMany(Proveedores, { foreignKey: "tipoProveedorId" });
Proveedores.belongsTo(tipoProveedores_model_1.default);
exports.default = Proveedores;
//# sourceMappingURL=Proveedores.model.js.map