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
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const encryptaPw_1 = require("../../lib/validaciones/encryptaPw");
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
}, {
    schema: "USUARIOS",
    /*hooks: {
      beforeCreate: async (data: any, options) => {
        data.dataValues.contrasena = await encryptar(data.dataValues.contrasena);
      },
    },*/
});
usuarios.beforeCreate((data, options) => __awaiter(void 0, void 0, void 0, function* () {
    const encryptada = yield (0, encryptaPw_1.Encryptar)(data.contrasena);
    data.contrasena = encryptada;
}));
empresa_model_1.default.hasMany(usuarios, { foreignKey: "empresaId" });
usuarios.belongsTo(empresa_model_1.default);
exports.default = usuarios;
//# sourceMappingURL=usuario.model.js.map