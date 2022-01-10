"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../../Database/connectionDB"));
const detalleFactura_1 = __importDefault(require("../facturas/detalleFactura"));
const impuestos_model_1 = __importDefault(require("./impuestos.model"));
const detallesImpuesto = connectionDB_1.default.define("detalleImpuesto", {
    detalleFacturaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    impuestoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    valor: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 0,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, { schema: "FACTURACION" });
//--- ASOCIACIONES---//
detalleFactura_1.default.hasMany(detallesImpuesto, { foreignKey: "detalleFacturaId" });
detallesImpuesto.belongsTo(detalleFactura_1.default);
impuestos_model_1.default.hasMany(detallesImpuesto, { foreignKey: "impuestoId" });
detallesImpuesto.belongsTo(impuestos_model_1.default);
exports.default = detallesImpuesto;
//# sourceMappingURL=detalleImpuestos.js.map