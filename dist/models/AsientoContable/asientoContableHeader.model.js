"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const empresa_model_1 = __importDefault(require("../../models/Empresa/empresa.model"));
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const asientosContables = connectionDB_1.default.define("asientoContable", {
    createAt: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    noEntrada: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
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
}, { schema: "ASIENTOS" });
empresa_model_1.default.hasMany(asientosContables, { foreignKey: "empresaId" });
asientosContables.belongsTo(empresa_model_1.default);
exports.default = asientosContables;
//# sourceMappingURL=asientoContableHeader.model.js.map