"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const empresa_model_1 = __importDefault(require("../Empresa/empresa.model"));
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const Transaccion_model_1 = __importDefault(require("../Transaccion/Transaccion.model"));
const entradasContables = connectionDB_1.default.define("entradaContable", {
    numero: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    debito: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    credito: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    comentario: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "ASIENTO CONTABLE",
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
    transaccionId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    documentoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    empresaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    detalle: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
}, { schema: "DIARIO" });
entradasContables.sync();
empresa_model_1.default.hasMany(entradasContables, { foreignKey: "empresaId" });
entradasContables.belongsTo(empresa_model_1.default);
Transaccion_model_1.default.hasMany(entradasContables, {
    foreignKey: "transaccionId",
});
entradasContables.belongsTo(Transaccion_model_1.default);
exports.default = entradasContables;
//# sourceMappingURL=entradaContable.model.js.map