"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../../Database/connectionDB"));
const tipoItem_model_1 = __importDefault(require("../../Inventario/tipoItem.model"));
const tipoVenta = connectionDB_1.default.define("tipoVenta", {
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
        allowNull: false,
    },
    tipoItemId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, { schema: "FACTURACION" });
//--- ASOCIACIONES---// 
//tipoVentas.sync({force:true})
tipoItem_model_1.default.hasMany(tipoVenta, { foreignKey: "tipoItemId" });
tipoVenta.belongsTo(tipoItem_model_1.default);
exports.default = tipoVenta;
//# sourceMappingURL=tipoVentas.model.js.map