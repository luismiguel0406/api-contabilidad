"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const Transaccion_model_1 = __importDefault(require("../Transaccion/Transaccion.model"));
const cuentasContables_model_1 = __importDefault(require("./cuentasContables.model"));
const tipoRegistro_model_1 = __importDefault(require("./tipoRegistro.model"));
const tipoEfecto_model_1 = __importDefault(require("./tipoEfecto.model"));
const movimientoCuenta = database_1.default.define("movimientoCuenta", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
        allowNull: false,
    },
    cuentaContableId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipoRegistroId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipoEfectoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    debito: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    credito: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    saldo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "SA",
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "SA",
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    referenciaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    transaccionId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "CUENTAS", updatedAt: false });
// --- ASOCIACIONES --- //
Transaccion_model_1.default.hasMany(movimientoCuenta, { foreignKey: "transaccionId" });
movimientoCuenta.belongsTo(Transaccion_model_1.default);
cuentasContables_model_1.default.hasMany(movimientoCuenta, { foreignKey: "cuentaContableId" });
movimientoCuenta.belongsTo(cuentasContables_model_1.default);
tipoRegistro_model_1.default.hasMany(movimientoCuenta, { foreignKey: "tipoRegistroId" });
movimientoCuenta.belongsTo(tipoRegistro_model_1.default);
tipoEfecto_model_1.default.hasMany(movimientoCuenta, { foreignKey: "tipoEfectoId" });
movimientoCuenta.belongsTo(tipoEfecto_model_1.default);
exports.default = movimientoCuenta;
//# sourceMappingURL=movimientoCuenta.model.js.map