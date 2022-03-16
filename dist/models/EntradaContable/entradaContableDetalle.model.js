"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const entradaContableHeader_model_1 = __importDefault(require("./entradaContableHeader.model"));
const entradaContablesDetalle = connectionDB_1.default.define("entradaContableDetalle", {
    cuenta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcionCuenta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
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
    entradaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, { schema: "DIARIO" });
entradaContableHeader_model_1.default.hasMany(entradaContablesDetalle, { foreignKey: "entradaId" });
entradaContablesDetalle.belongsTo(entradaContableHeader_model_1.default);
exports.default = entradaContablesDetalle;
//# sourceMappingURL=entradaContableDetalle.model.js.map