"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_model_1 = __importDefault(require("../Empresa/empresa.model"));
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const tipoCuenta_model_1 = __importDefault(require("./tipoCuenta.model"));
const grupoCuenta_model_1 = __importDefault(require("./grupoCuenta.model"));
const moneda_model_1 = __importDefault(require("../../models/Facturacion/moneda/moneda.model"));
const cuentasContables = connectionDB_1.default.define("cuentaContable", {
    noCuenta: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
    tipoCuentaContableId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    grupoCuentasContableId: {
        type: sequelize_1.DataTypes.INTEGER,
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
}, { schema: "CUENTAS" });
//---- ASOCIACIONES -------//
tipoCuenta_model_1.default.hasMany(cuentasContables, {
    foreignKey: "tipoCuentaContableId",
});
cuentasContables.belongsTo(tipoCuenta_model_1.default);
grupoCuenta_model_1.default.hasMany(cuentasContables, {
    foreignKey: "grupoCuentasContableId",
});
cuentasContables.belongsTo(grupoCuenta_model_1.default);
empresa_model_1.default.hasMany(cuentasContables, { foreignKey: "empresaId" });
cuentasContables.belongsTo(empresa_model_1.default);
moneda_model_1.default.hasMany(cuentasContables, { foreignKey: "monedaId" });
cuentasContables.belongsTo(moneda_model_1.default);
exports.default = cuentasContables;
//# sourceMappingURL=cuentasContables.model.js.map