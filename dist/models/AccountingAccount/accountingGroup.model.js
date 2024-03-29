"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const currency_model_1 = __importDefault(require("../Facturacion/currency/currency.model"));
const accountType_model_1 = __importDefault(require("./accountType.model"));
const accountingGroup = database_1.default.define("accountingGroup", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    accountNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
    accountTypeId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    currencyId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "CUENTAS" });
// --- ASOCIACIONES --- //
accountType_model_1.default.hasMany(accountingGroup, {
    foreignKey: "accountTypeId",
});
accountingGroup.belongsTo(accountType_model_1.default);
currency_model_1.default.hasMany(accountingGroup, { foreignKey: "currencyId" });
accountingGroup.belongsTo(currency_model_1.default);
exports.default = accountingGroup;
//# sourceMappingURL=accountingGroup.model.js.map