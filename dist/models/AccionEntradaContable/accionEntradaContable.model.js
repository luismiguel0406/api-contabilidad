"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accountType_model_1 = __importDefault(require("../AccountingAccount/accountType.model"));
const Transaction_model_1 = __importDefault(require("../Transaction/Transaction.model"));
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const accionesEntradasContables = database_1.default.define("accionEntradaContable", {
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
Transaction_model_1.default.belongsToMany(accountType_model_1.default, {
    through: "accionEntradaContable",
    foreignKey: "transaccionId",
});
accountType_model_1.default.belongsToMany(Transaction_model_1.default, {
    through: "accionEntradaContable",
    foreignKey: "tipoCuentaId",
});
exports.default = accionesEntradasContables;
//# sourceMappingURL=accionEntradaContable.model.js.map