"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_model_1 = __importDefault(require("../Empresa/empresa.model"));
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const moneda_model_1 = __importDefault(require("../Facturacion/moneda/moneda.model"));
const tipoCuentaContable_model_1 = __importDefault(require("./tipoCuentaContable.model"));
const grupoCuentasContables = connectionDB_1.default.define("grupoCuentasContable", {
    cuenta: {
        type: sequelize_1.DataTypes.STRING,
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
    tipoCuentaContableId: {
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
// --- ASOCIACIONES --- //
grupoCuentasContables.hasMany(tipoCuentaContable_model_1.default, {
    foreignKey: "tipoCuentaContableId",
});
tipoCuentaContable_model_1.default.belongsTo(grupoCuentasContables);
moneda_model_1.default.hasMany(grupoCuentasContables, { foreignKey: "monedaId" });
grupoCuentasContables.belongsTo(moneda_model_1.default);
empresa_model_1.default.hasMany(grupoCuentasContables, { foreignKey: "empresaId" });
grupoCuentasContables.belongsTo(empresa_model_1.default);
exports.default = grupoCuentasContables;
//# sourceMappingURL=grupoCuentasContables.model.js.map