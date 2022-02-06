"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const asientoContableHeader_model_1 = __importDefault(require("./asientoContableHeader.model"));
const asientosContablesDetalle = connectionDB_1.default.define("asientoContableDetalle", {
    cuenta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcionCuenta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    comentario: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "Asiento",
    },
    debito: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    credito: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    asientoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, { schema: "ASIENTOS" });
asientoContableHeader_model_1.default.hasMany(asientosContablesDetalle, { foreignKey: "asientoId" });
asientosContablesDetalle.belongsTo(asientoContableHeader_model_1.default);
exports.default = asientosContablesDetalle;
//# sourceMappingURL=asientoContableDetalle.model.js.map