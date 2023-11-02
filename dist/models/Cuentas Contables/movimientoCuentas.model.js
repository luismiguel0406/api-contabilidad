"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const Transaccion_model_1 = __importDefault(require("../../models/Transaccion/Transaccion.model"));
const cuentasContables_model_1 = __importDefault(require("./cuentasContables.model"));
const tipoRegistro_model_1 = __importDefault(require("./tipoRegistro.model"));
const tipoEfecto_model_1 = __importDefault(require("./tipoEfecto.model"));
const movimientoCuentas = connectionDB_1.default.define("movimientoCuentas", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    },
    cuentaId: {
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
    monto: {
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
    saldo: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "CUENTAS" });
// --- ASOCIACIONES --- //
Transaccion_model_1.default.hasMany(movimientoCuentas, { foreignKey: "transaccionId" });
movimientoCuentas.belongsTo(Transaccion_model_1.default);
cuentasContables_model_1.default.hasMany(movimientoCuentas, { foreignKey: "cuentaId" });
movimientoCuentas.belongsTo(cuentasContables_model_1.default);
tipoRegistro_model_1.default.hasMany(movimientoCuentas, { foreignKey: "tipoRegistroId" });
movimientoCuentas.belongsTo(tipoRegistro_model_1.default);
tipoEfecto_model_1.default.hasMany(movimientoCuentas, { foreignKey: "tipoEfectoId" });
movimientoCuentas.belongsTo(tipoEfecto_model_1.default);
exports.default = movimientoCuentas;
//# sourceMappingURL=movimientoCuentas.model.js.map