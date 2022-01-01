"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../../Database/connectionDB"));
const Cliente_model_1 = __importDefault(require("../../Clientes/Cliente.model"));
const empresa_model_1 = __importDefault(require("../../Empresa/empresa.model"));
const moneda_model_1 = __importDefault(require("../moneda/moneda.model"));
const facturas = connectionDB_1.default.define("factura", {
    numeroFactura: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Ncf: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    NcfModificado: {
        type: sequelize_1.DataTypes.STRING,
    },
    subTotal: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    descuento: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
    },
    totalImpuestos: {
        type: sequelize_1.DataTypes.NUMBER,
        defaultValue: 0,
    },
    total: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    comentario: {
        type: sequelize_1.DataTypes.STRING,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    fechaVencimiento: {
        type: sequelize_1.DataTypes.DATE,
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
        allowNull: false,
    },
    empresaId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    clienteId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    monedaId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
});
//--- ASOCIACIONES---//
Cliente_model_1.default.hasMany(facturas, { foreignKey: "clienteId" });
facturas.belongsTo(Cliente_model_1.default);
moneda_model_1.default.hasMany(facturas, { foreignKey: "monedaId" });
facturas.belongsTo(moneda_model_1.default);
empresa_model_1.default.hasMany(facturas, { foreignKey: "empresaId" });
facturas.belongsTo(empresa_model_1.default);
exports.default = facturas;
//# sourceMappingURL=factura.model.js.map