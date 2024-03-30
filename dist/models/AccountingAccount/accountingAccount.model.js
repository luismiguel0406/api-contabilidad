"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import empresas from "../Empresa/empresa.model";
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const accountType_model_1 = __importDefault(require("./accountType.model"));
const accountingGroup_model_1 = __importDefault(require("./accountingGroup.model"));
const currency_model_1 = __importDefault(require("../Facturacion/currency/currency.model"));
const accountingAccount = database_1.default.define("accountingAccount", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    accountNumber: {
        type: sequelize_1.DataTypes.STRING(25),
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
        allowNull: false,
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
    },
    accountingGroupId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    companyId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    currencyId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "CUENTAS" });
//---- ASOCIACIONES -------//
accountType_model_1.default.hasMany(accountingAccount, {
    foreignKey: "accountTypeId",
});
accountingAccount.belongsTo(accountType_model_1.default);
accountingGroup_model_1.default.hasMany(accountingAccount, {
    foreignKey: "accountingGroupId",
});
accountingAccount.belongsTo(accountingGroup_model_1.default);
/*empresas.hasMany(accountingAccount, { foreignKey: "empresaId" });
accountingAccount.belongsTo(empresas);*/
currency_model_1.default.hasMany(accountingAccount, { foreignKey: "currencyId" });
accountingAccount.belongsTo(currency_model_1.default);
exports.default = accountingAccount;
//# sourceMappingURL=accountingAccount.model.js.map