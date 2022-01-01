"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const moneda_model_1 = __importDefault(require("../Facturacion/moneda/moneda.model"));
const cuentaContable = connectionDB_1.default.define("cuentasContable", {
    cuenta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cuentaPadreId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    empresaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    monedaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
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
}, { schema: "CUENTAS" });
// --- ASOCIACIONES --- //
cuentaContable.hasMany(cuentaContable, { foreignKey: "cuentaPadreId" });
moneda_model_1.default.hasMany(cuentaContable, { foreignKey: "monedaId" });
cuentaContable.belongsTo(moneda_model_1.default);
exports.default = cuentaContable;
//# sourceMappingURL=CuentasContables.model.js.map