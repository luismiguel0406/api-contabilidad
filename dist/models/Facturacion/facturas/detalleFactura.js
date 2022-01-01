"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../../Database/connectionDB"));
const Item_model_1 = __importDefault(require("../../Inventario/Item.model"));
const factura_model_1 = __importDefault(require("./factura.model"));
const detallesFactura = connectionDB_1.default.define("detalleFactura", {
    facturaId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    itemId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    cantidad: {
        type: sequelize_1.DataTypes.NUMBER,
        defaultValue: 1,
    },
    precioVenta: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    descuento: {
        type: sequelize_1.DataTypes.NUMBER,
        defaultValue: 0,
    },
    total: {
        type: sequelize_1.DataTypes.NUMBER,
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
}, { schema: "FACTURACION" });
//--- ASOCIACIONES---//
Item_model_1.default.hasMany(detallesFactura, { foreignKey: "itemId" });
detallesFactura.belongsTo(Item_model_1.default);
factura_model_1.default.hasMany(detallesFactura, { foreignKey: "facturaId" });
detallesFactura.belongsTo(factura_model_1.default);
exports.default = detallesFactura;
//# sourceMappingURL=detalleFactura.js.map