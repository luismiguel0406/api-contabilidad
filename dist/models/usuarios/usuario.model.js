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
const database_1 = __importDefault(require("../../database"));
const sequelize_1 = require("sequelize");
const encryptaPw_1 = require("../../lib/validaciones/encryptaPw");
const empresa_model_1 = __importDefault(require("../Empresa/empresa.model"));
const perfil_model_1 = __importDefault(require("../../models/Perfiles/perfil.model"));
const users = database_1.default.define("user", {
    username: {
        type: sequelize_1.DataTypes.STRING(50),
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    state: {
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
    companyId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    roleId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    schema: "USUARIOS",
});
users.beforeCreate((data) => __awaiter(void 0, void 0, void 0, function* () {
    const encrypted = yield (0, encryptaPw_1.Encrypt)(data.password);
    data.password = encrypted;
}));
//------- ASOCIACIONES -------//
empresa_model_1.default.hasMany(users, { foreignKey: "companyId" });
users.belongsTo(empresa_model_1.default);
perfil_model_1.default.hasMany(users, { foreignKey: "roleId" });
users.belongsTo(perfil_model_1.default);
exports.default = users;
//# sourceMappingURL=usuario.model.js.map