"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const typeSupplier_model_1 = __importDefault(require("./typeSupplier.model"));
const typeDocument_model_1 = __importDefault(require("./typeDocument.model"));
const typeService_model_1 = __importDefault(require("./typeService.model"));
const banks_model_1 = __importDefault(require("./banks.model"));
const suppliers = database_1.default.define("supplier", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    typeSupplierId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    typeDocumentId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    document: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    typeServiceId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bankId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    bankOptionalId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    accountNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    accountNumberOptional: {
        type: sequelize_1.DataTypes.STRING,
    },
    info: {
        type: sequelize_1.DataTypes.STRING,
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
}, { schema: "PROVEEDORES" });
//--- ASOCIACIONES---//
typeSupplier_model_1.default.hasMany(suppliers, { foreignKey: "typeSupplierId" });
suppliers.belongsTo(typeSupplier_model_1.default);
typeDocument_model_1.default.hasMany(suppliers, { foreignKey: "typeDocumentId" });
suppliers.belongsTo(typeDocument_model_1.default);
typeService_model_1.default.hasMany(suppliers, { foreignKey: "typeServiceId" });
suppliers.belongsTo(typeService_model_1.default);
banks_model_1.default.hasMany(suppliers, { foreignKey: "bankId" });
suppliers.belongsTo(banks_model_1.default);
exports.default = suppliers;
//# sourceMappingURL=suppliers.model.js.map