"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tipoCuentaContable_model_1 = __importDefault(require("models/Cuentas Contables/tipoCuentaContable.model"));
const TransaccionesComerciales_model_1 = __importDefault(require("models/TransaccionesComerciales/TransaccionesComerciales.model"));
const types_1 = require("sequelize/types");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const accionesEntradasContables = connectionDB_1.default.define("accionEntradaContable", {
    transaccionId: {
        type: types_1.DataTypes.INTEGER,
        allowNull: false
    },
    tipoCuentaId: {
        type: types_1.DataTypes.INTEGER,
        allowNull: false,
    },
    accion: {
        type: types_1.DataTypes.INTEGER,
    },
    estado: {
        type: types_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        type: types_1.DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: types_1.DataTypes.DATE,
    },
    usuario: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: types_1.DataTypes.STRING,
    }
}, { schema: "DIARIO" });
//ASOCIACIONES//
TransaccionesComerciales_model_1.default.belongsToMany(tipoCuentaContable_model_1.default, { through: "accionEntradaContable", foreignKey: "transaccionId" });
tipoCuentaContable_model_1.default.belongsToMany(TransaccionesComerciales_model_1.default, { through: "accionEntradaContable", foreignKey: "tipoCuentaId" });
exports.default = accionesEntradasContables;
//# sourceMappingURL=accionEntradaContable.model.js.map