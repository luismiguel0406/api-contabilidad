"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const empresa_model_1 = __importDefault(require("../../Empresa/empresa.model"));
const suppliers_model_1 = __importDefault(require("../../suppliers/suppliers.model"));
const database_1 = __importDefault(require("../../../database"));
const medioDePago_model_1 = __importDefault(require("../medioDePago/medioDePago.model"));
const moneda_model_1 = __importDefault(require("../moneda/moneda.model"));
const gastos_model_1 = __importDefault(require("./Gastos/gastos.model"));
const tiposFacturasPorPagar_model_1 = __importDefault(require("./tiposFacturasPorPagar/tiposFacturasPorPagar.model"));
const facturasPorPagar = database_1.default.define("facturaPorPagar", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    noFactura: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    Ncf: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    ncfModificado: {
        type: sequelize_1.DataTypes.STRING(25),
    },
    subTotal: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    totalDescuentos: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    },
    totalImpuestos: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 0.0,
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
    fechaLimitePago: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
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
    tipoFacturasPorPagarId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    empresaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    proveedorId: {
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
    },
    tipoGastoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    detalle: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
}, { schema: "FACTURACION" });
//-------ASOCIACIONES-------//
tiposFacturasPorPagar_model_1.default.hasMany(facturasPorPagar, {
    foreignKey: "tipoFacturasPorPagarId",
});
facturasPorPagar.belongsTo(tiposFacturasPorPagar_model_1.default);
empresa_model_1.default.hasMany(facturasPorPagar, { foreignKey: "empresaId" });
facturasPorPagar.belongsTo(empresa_model_1.default);
suppliers_model_1.default.hasMany(facturasPorPagar, { foreignKey: "proveedorId" });
facturasPorPagar.belongsTo(suppliers_model_1.default);
moneda_model_1.default.hasMany(facturasPorPagar, { foreignKey: "monedaId" });
facturasPorPagar.belongsTo(moneda_model_1.default);
medioDePago_model_1.default.hasMany(facturasPorPagar, { foreignKey: "medioDePagoId" });
facturasPorPagar.belongsTo(medioDePago_model_1.default);
gastos_model_1.default.hasMany(facturasPorPagar, { foreignKey: "tipoGastoId" });
facturasPorPagar.belongsTo(gastos_model_1.default);
exports.default = facturasPorPagar;
//# sourceMappingURL=facturasPorPagar.model.js.map