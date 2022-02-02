"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const tiposCuentaContable = connectionDB_1.default.define("tipoCuentaContable", {
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    credito: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    debito: {
        type: sequelize_1.DataTypes.STRING(25),
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
}, { schema: "CUENTAS" });
exports.default = tiposCuentaContable;
//# sourceMappingURL=tipoCuentaContable.model.js.map