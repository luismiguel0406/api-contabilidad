"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const perfil_model_1 = __importDefault(require("../../models/Perfiles/perfil.model"));
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const encryptaPw_1 = require("../../lib/validaciones/encryptaPw");
const empresa_model_1 = __importDefault(require("../Empresa/empresa.model"));
const usuarios = database_1.default.define("usuario", {
    nombreUsuario: {
        type: sequelize_1.DataTypes.STRING(50),
        unique: true,
    },
    contrasena: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        unique: true,
        validate: {
            isEmail: true,
        },
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
    empresaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    perfilId: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull:false
    },
}, {
    schema: "USUARIOS",
});
usuarios.beforeCreate((data) => __awaiter(void 0, void 0, void 0, function* () {
    const encryptada = yield (0, encryptaPw_1.Encryptar)(data.contrasena);
    data.contrasena = encryptada;
}));
//------- ASOCIACIONES -------//
empresa_model_1.default.hasMany(usuarios, { foreignKey: "empresaId" });
usuarios.belongsTo(empresa_model_1.default);
perfil_model_1.default.hasMany(usuarios, { foreignKey: "perfilId" });
usuarios.belongsTo(perfil_model_1.default);
exports.default = usuarios;
//# sourceMappingURL=usuario.model.js.map