"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_model_1 = __importDefault(require("../../Empresa/empresa.model"));
const Proveedores_model_1 = __importDefault(require("../../Proveedores/Proveedores.model"));
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../../Database/connectionDB"));
const medioDePago_model_1 = __importDefault(require("../medioDePago/medioDePago.model"));
const moneda_model_1 = __importDefault(require("../moneda/moneda.model"));
const gastos_model_1 = __importDefault(require("./Gastos/gastos.model"));
const tiposFacturasPorPagar_model_1 = __importDefault(require("./tiposFacturasPorPagar/tiposFacturasPorPagar.model"));
const facturasPorPagar = connectionDB_1.default.define("facturaPorPagar", {
    noFactura: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    Ncf: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    NcfModificado: {
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
    tipoFacturaIPorPagard: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
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
        defaultValue: 1,
    },
    tipoGastoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "FACTURACION" });
//-------ASOCIACIONES-------//
tiposFacturasPorPagar_model_1.default.hasMany(facturasPorPagar, { foreignKey: " tipoFacturaIPorPagard" });
facturasPorPagar.belongsTo(tiposFacturasPorPagar_model_1.default);
empresa_model_1.default.hasMany(facturasPorPagar, { foreignKey: "empresaId" });
facturasPorPagar.belongsTo(empresa_model_1.default);
Proveedores_model_1.default.hasMany(facturasPorPagar, { foreignKey: "proveedorId" });
facturasPorPagar.belongsTo(Proveedores_model_1.default);
moneda_model_1.default.hasMany(facturasPorPagar, { foreignKey: "monedaId" });
facturasPorPagar.belongsTo(moneda_model_1.default);
medioDePago_model_1.default.hasMany(facturasPorPagar, { foreignKey: "medioDePagoId" });
facturasPorPagar.belongsTo(medioDePago_model_1.default);
gastos_model_1.default.hasMany(facturasPorPagar, { foreignKey: "tipoGastoId" });
facturasPorPagar.belongsTo(gastos_model_1.default);
exports.default = facturasPorPagar;
//# sourceMappingURL=facturasPorPagar.model.js.map