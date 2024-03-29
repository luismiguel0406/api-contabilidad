"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const suppliers_model_1 = __importDefault(require("../../suppliers/suppliers.model"));
const database_1 = __importDefault(require("../../../database"));
const currency_model_1 = __importDefault(require("../currency/currency.model"));
const paymentMethod_model_1 = __importDefault(require("../PaymentMethod/paymentMethod.model"));
const bills = database_1.default.define("bills", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    billNumber: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    ncf: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    ncfModified: {
        type: sequelize_1.DataTypes.STRING(25),
    },
    subTotal: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    totalDiscount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    },
    totalTaxes: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 0.0,
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    comments: {
        type: sequelize_1.DataTypes.STRING,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    limitDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
    paymentConditions: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    companyId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    supplierId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    currencyId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    paymentMethodId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    costCenter: {
        type: sequelize_1.DataTypes.STRING,
    },
    billDetailItems: {
        type: sequelize_1.DataTypes.JSONB,
    },
}, { schema: "FACTURACION" });
//-------ASOCIACIONES-------//
suppliers_model_1.default.hasMany(bills, { foreignKey: "supplierId" });
bills.belongsTo(suppliers_model_1.default);
currency_model_1.default.hasMany(bills, { foreignKey: "currencyId" });
bills.belongsTo(currency_model_1.default);
paymentMethod_model_1.default.hasMany(bills, { foreignKey: "paymentMethodId" });
bills.belongsTo(paymentMethod_model_1.default);
exports.default = bills;
//# sourceMappingURL=bills.model.js.map