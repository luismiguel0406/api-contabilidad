"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tipoCuentaContable_model_1 = __importDefault(require("models/Cuentas Contables/tipoCuentaContable.model"));
const TransaccionesComerciales_model_1 = __importDefault(require("models/TransaccionesComerciales/TransaccionesComerciales.model"));
const types_1 = require("sequelize/types");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const accionesAsientoContables = connectionDB_1.default.define("accionAsientoCntable", {
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
}, { schema: "ASIENTOS" });
//ASOCIACIONES//
TransaccionesComerciales_model_1.default.belongsToMany(tipoCuentaContable_model_1.default, { through: "accionAsientoCntable", foreignKey: "transaccionId" });
tipoCuentaContable_model_1.default.belongsToMany(TransaccionesComerciales_model_1.default, { through: "accionAsientoCntable", foreignKey: "tipoCuentaId" });
exports.default = accionesAsientoContables;
//# sourceMappingURL=accionAsientoContable.model.js.map