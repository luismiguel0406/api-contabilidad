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
const usuario_model_1 = __importDefault(require("../../models/usuarios/usuario.model"));
class UsuariosService {
    addUsuario(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usuario_model_1.default.create(body);
        });
    }
    getUsuario(email, contrasena = null, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioResult = yield usuario_model_1.default.findAll({
                attributes: { exclude: ["contrasena"] },
                where: { email, contrasena, empresaId, estado: "1" },
            });
            return usuarioResult;
        });
    }
    updateUsuario(body, id, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield usuario_model_1.default.update(body, {
                where: { id, empresaId, estado: "1" },
            });
        });
    }
    deleteUsuario(id, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield usuario_model_1.default.update({ estado: "0" }, { where: { id, empresaId } });
        });
    }
}
exports.default = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map