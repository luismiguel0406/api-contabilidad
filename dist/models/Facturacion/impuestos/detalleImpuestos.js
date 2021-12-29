"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../../Database/connectionDB"));
const factura_model_1 = __importDefault(require("../facturas/factura.model"));
const impuestos_model_1 = __importDefault(require("./impuestos.model"));
const detallesImpuesto = connectionDB_1.default.define("detalleImpuesto", {
    facturaId: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    impuestoId: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    valor: {
        type: sequelize_1.DataTypes.NUMBER,
        defaultValue: 0
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
});
impuestos_model_1.default.belongsToMany(factura_model_1.default, { through: 'detalleImpuesto' });
factura_model_1.default.belongsToMany(impuestos_model_1.default, { through: 'detalleImpuesto' });
exports.default = detallesImpuesto;
//# sourceMappingURL=detalleImpuestos.js.map