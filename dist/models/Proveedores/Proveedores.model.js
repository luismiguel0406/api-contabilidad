"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const tipoProveedores_model_1 = __importDefault(require("./tipoProveedores.model"));
const tipoDocumento_model_1 = __importDefault(require("./tipoDocumento.model"));
const tipoServicio_model_1 = __importDefault(require("./tipoServicio.model"));
const entidadBancaria_model_1 = __importDefault(require("./entidadBancaria.model"));
const proveedores = database_1.default.define("proveedor", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipoProveedorId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipoDocumentoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    documento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tipoServicioId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    entidadBancariaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    entidadBancariaOpcionalId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    numeroCuenta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    numeroCuentaOpcional: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    infoAdicional: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
}, { schema: "PROVEEDORES" });
//--- ASOCIACIONES---//
proveedores.sync();
tipoProveedores_model_1.default.hasMany(proveedores, { foreignKey: "tipoProveedorId" });
proveedores.belongsTo(tipoProveedores_model_1.default);
tipoDocumento_model_1.default.hasMany(proveedores, { foreignKey: "tipoDocumentoId" });
proveedores.belongsTo(tipoDocumento_model_1.default);
tipoServicio_model_1.default.hasMany(proveedores, { foreignKey: "tipoServicioId" });
proveedores.belongsTo(tipoServicio_model_1.default);
entidadBancaria_model_1.default.hasMany(proveedores, { foreignKey: "entidadBancariaId" });
proveedores.belongsTo(entidadBancaria_model_1.default);
exports.default = proveedores;
//# sourceMappingURL=proveedores.model.js.map