"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const itemType_model_1 = __importDefault(require("./itemType.model"));
const item = database_1.default.define("item", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    stock: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0.0,
    },
    minimunStock: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0.0,
    },
    unitPrice: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0.0,
    },
    cost: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    itemTypeId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    accountId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    state: {
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
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
}, { schema: "INVENTARIO" });
//--- ASOCIACIONES---//
itemType_model_1.default.hasMany(item, { foreignKey: "itemTypeId" });
item.belongsTo(itemType_model_1.default);
exports.default = item;
//# sourceMappingURL=Item.model.js.map