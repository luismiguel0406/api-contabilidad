"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const os_1 = __importDefault(require("os"));
const movimientoCuentas = connectionDB_1.default.define("movimientoCuentas", {
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    cuenta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tipoRegistroId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
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
        defaultValue: 'SA'
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: os_1.default.hostname()
    },
    referenciaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    transaccionId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    saldoResultante: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, { schema: "CUENTAS" });
exports.default = movimientoCuentas;
//# sourceMappingURL=movimientoCuentas.model.js.map