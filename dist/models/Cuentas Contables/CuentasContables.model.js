"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_model_1 = __importDefault(require("../Empresa/empresa.model"));
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const tipoCuentaContable_model_1 = __importDefault(require("./tipoCuentaContable.model"));
const grupoCuentasContables_model_1 = __importDefault(require("./grupoCuentasContables.model"));
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
    createAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    updateAt: {
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
    grupoCuentaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "CUENTAS" });
//---- ASOCIACIONES -------//
tipoCuentaContable_model_1.default.hasMany(cuentasContables, {
    foreignKey: "tipoCuentaContableId",
});
cuentasContables.belongsTo(tipoCuentaContable_model_1.default);
grupoCuentasContables_model_1.default.hasMany(cuentasContables, {
    foreignKey: "grupoCuentaId",
});
cuentasContables.belongsTo(grupoCuentasContables_model_1.default);
empresa_model_1.default.hasMany(cuentasContables, { foreignKey: "empresaId" });
cuentasContables.belongsTo(empresa_model_1.default);
exports.default = cuentasContables;
//# sourceMappingURL=cuentasContables.model.js.map