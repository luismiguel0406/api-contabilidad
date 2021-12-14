"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const tipoVentas_model_1 = __importDefault(require("../Facturacion/ventas/tipoVentas.model"));
const Item_model_1 = __importDefault(require("./Item.model"));
const tiposItem = connectionDB_1.default.define("tipoItem", {
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
}, { schema: "INVENTARIO" });
tiposItem.hasMany(Item_model_1.default, { foreignKey: "tipoItemId" });
Item_model_1.default.belongsTo(tiposItem);
tiposItem.hasMany(tipoVentas_model_1.default, { foreignKey: "tipoItemId" });
tipoVentas_model_1.default.belongsTo(tiposItem);
exports.default = tiposItem;
//# sourceMappingURL=tipoItem.model.js.map