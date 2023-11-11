"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../../database"));
const Cliente_model_1 = __importDefault(require("../../Clientes/Cliente.model"));
const empresa_model_1 = __importDefault(require("../../Empresa/empresa.model"));
const medioDePago_model_1 = __importDefault(require("../medioDePago/medioDePago.model"));
const moneda_model_1 = __importDefault(require("../moneda/moneda.model"));
const tipoVentas_model_1 = __importDefault(require("../ventas/tipoVentas.model"));
const facturas = database_1.default.define("factura", {
    noFactura: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    Ncf: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    subTotal: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    totalDescuentos: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    totalImpuestos: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 0,
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
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
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    empresaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    clienteId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    monedaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    medioDePagoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    tipoVentaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "FACTURACION" });
//--- ASOCIACIONES---//
Cliente_model_1.default.hasMany(facturas, { foreignKey: "clienteId" });
facturas.belongsTo(Cliente_model_1.default);
moneda_model_1.default.hasMany(facturas, { foreignKey: "monedaId" });
facturas.belongsTo(moneda_model_1.default);
empresa_model_1.default.hasMany(facturas, { foreignKey: "empresaId" });
facturas.belongsTo(empresa_model_1.default);
medioDePago_model_1.default.hasMany(facturas, { foreignKey: "medioDePagoId" });
facturas.belongsTo(medioDePago_model_1.default);
tipoVentas_model_1.default.hasMany(facturas, { foreignKey: "tipoVentaId" });
facturas.belongsTo(tipoVentas_model_1.default);
exports.default = facturas;
//# sourceMappingURL=factura.model.js.map