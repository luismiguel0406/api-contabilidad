"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tipoCuenta_model_1 = __importDefault(require("../Cuentas Contables/tipoCuenta.model"));
const Transaccion_model_1 = __importDefault(require("../Transaccion/Transaccion.model"));
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const accionesEntradasContables = connectionDB_1.default.define("accionEntradaContable", {
    transaccionId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipoCuentaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipoEfectoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipoRegistroId: {
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
}, { schema: "DIARIO" });
//ASOCIACIONES//
Transaccion_model_1.default.belongsToMany(tipoCuenta_model_1.default, {
    through: "accionEntradaContable",
    foreignKey: "transaccionId",
});
tipoCuenta_model_1.default.belongsToMany(Transaccion_model_1.default, {
    through: "accionEntradaContable",
    foreignKey: "tipoCuentaId",
});
exports.default = accionesEntradasContables;
//# sourceMappingURL=accionEntradaContable.model.js.map