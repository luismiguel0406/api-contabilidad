"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const empresa_model_1 = __importDefault(require("../Empresa/empresa.model"));
const usuarios = connectionDB_1.default.define("usuario", {
    nombreUsuario: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    contrasena: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        validate: {
            isEmail: true,
        },
    },
    empresaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { schema: "USUARIOS" });
empresa_model_1.default.hasMany(usuarios, { foreignKey: "empresaId" });
usuarios.belongsTo(empresa_model_1.default);
exports.default = usuarios;
//# sourceMappingURL=usuario.model.js.map