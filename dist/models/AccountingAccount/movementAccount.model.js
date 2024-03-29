"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const Transaction_model_1 = __importDefault(require("../Transaction/Transaction.model"));
const accountingAccount_model_1 = __importDefault(require("./accountingAccount.model"));
const registryType_model_1 = __importDefault(require("./registryType.model"));
const effectType_model_1 = __importDefault(require("./effectType.model"));
const movementAccount = database_1.default.define("movementAccount", {
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
    accountingAccountId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    registryTypeId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    effectTypeId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    debit: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    credit: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    balance: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    comment: {
        type: sequelize_1.DataTypes.STRING,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "SA",
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "SA",
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    referenceId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    transactionId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "CUENTAS", updatedAt: false });
// --- ASOCIACIONES --- //
Transaction_model_1.default.hasMany(movementAccount, { foreignKey: "transactionId" });
movementAccount.belongsTo(Transaction_model_1.default);
accountingAccount_model_1.default.hasMany(movementAccount, {
    foreignKey: "accountingAccountId",
});
movementAccount.belongsTo(accountingAccount_model_1.default);
registryType_model_1.default.hasMany(movementAccount, { foreignKey: "registryTypeId" });
movementAccount.belongsTo(registryType_model_1.default);
effectType_model_1.default.hasMany(movementAccount, { foreignKey: "effectTypeId" });
movementAccount.belongsTo(effectType_model_1.default);
exports.default = movementAccount;
//# sourceMappingURL=movementAccount.model.js.map