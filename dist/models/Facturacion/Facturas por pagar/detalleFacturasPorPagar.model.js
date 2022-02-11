"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cuentasContables_model_1 = __importDefault(require("models/Cuentas Contables/cuentasContables.model"));
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../../Database/connectionDB"));
const facturasPorPagar_model_1 = __importDefault(require("./facturasPorPagar.model"));
const detalleFacturasPorPagar = connectionDB_1.default.define("detalleFacturaPorPagar", {
    descripcionCuenta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    valor: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    detalleImpuesto: {
        type: sequelize_1.DataTypes.JSONB,
    },
    facturaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    cuentaContableId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "FACTURACION" });
//---ASOCIACIONES---//
facturasPorPagar_model_1.default.hasMany(detalleFacturasPorPagar, { foreignKey: "facturaId" });
detalleFacturasPorPagar.belongsTo(facturasPorPagar_model_1.default);
cuentasContables_model_1.default.hasMany(facturasPorPagar_model_1.default, { foreignKey: "cuentaContableId" });
facturasPorPagar_model_1.default.belongsTo(cuentasContables_model_1.default);
exports.default = detalleFacturasPorPagar;
//# sourceMappingURL=detalleFacturasPorPagar.model.js.map