"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const moneda_model_1 = __importDefault(require("../Facturacion/moneda/moneda.model"));
const tipoCuenta_model_1 = __importDefault(require("./tipoCuenta.model"));
const grupoCuenta = connectionDB_1.default.define("grupoCuenta", {
    cuenta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
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
    tipoCuentaContableId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    monedaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "CUENTAS" });
// --- ASOCIACIONES --- //
tipoCuenta_model_1.default.hasMany(grupoCuenta, {
    foreignKey: "tipoCuentaContableId",
});
grupoCuenta.belongsTo(tipoCuenta_model_1.default);
moneda_model_1.default.hasMany(grupoCuenta, { foreignKey: "monedaId" });
grupoCuenta.belongsTo(moneda_model_1.default);
exports.default = grupoCuenta;
//# sourceMappingURL=grupoCuenta.model.js.map