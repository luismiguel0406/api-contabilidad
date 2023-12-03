"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const typeContacts_model_1 = __importDefault(require("./typeContacts.model"));
const address = database_1.default.define("address", {
    districtId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    sector: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    street: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    buildingNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
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
    referenceId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    typeContactId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, { schema: "CONTACTOS" });
//--- ASOCIACIONES---//
typeContacts_model_1.default.hasMany(address, { foreignKey: "typeContactId" });
address.belongsTo(typeContacts_model_1.default);
exports.default = address;
//# sourceMappingURL=address.model.js.map