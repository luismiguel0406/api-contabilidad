"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const empresa_model_1 = __importDefault(require("../Empresa/empresa.model"));
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const TransaccionesComerciales_model_1 = __importDefault(require("../TransaccionesComerciales/TransaccionesComerciales.model"));
const entradasContables = connectionDB_1.default.define("entradaContable", {
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    noEntrada: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    totalDebito: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    totalCredito: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    comentario: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "ASIENTO CONTABLE",
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
    empresaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    transaccionComercialId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    transaccionId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    detalle: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false
    }
}, { schema: "DIARIO" });
//entradasContables.sync({force:true})
empresa_model_1.default.hasMany(entradasContables, { foreignKey: "empresaId" });
entradasContables.belongsTo(empresa_model_1.default);
TransaccionesComerciales_model_1.default.hasMany(entradasContables, { foreignKey: "transaccionComercialId" });
entradasContables.belongsTo(TransaccionesComerciales_model_1.default);
exports.default = entradasContables;
//# sourceMappingURL=entradaContableHeader.model.js.map