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
exports.deleteUsuario = exports.updateUsuario = exports.InicioSesionUsuario = exports.RegistrarUsuario = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/mensajesCliente/MensajesRespuestaCliente");
const jsonWebToken_1 = require("../lib/Token/jsonWebToken");
const encryptaPw_1 = require("../lib/validaciones/encryptaPw");
const usuarios_service_1 = __importDefault(require("../services/usuarios/usuarios.service"));
const usuario_service = new usuarios_service_1.default();
const RegistrarUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, empresaId } = req.body;
        const ExisteUsuario = yield usuario_service.getUsuario(email, empresaId);
        if (ExisteUsuario) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
            return res
                .status(statusCode)
                .json({ Message: `Usuario o contraseña invalida, ${msg}` });
        }
        const usuarioCreado = yield usuario_service.addUsuario(req.body);
        const Token = (0, jsonWebToken_1.registrarToken)(usuarioCreado.id, empresaId);
        res.header("auth-token", Token).json({
            Id: usuarioCreado.id,
            Usuario: usuarioCreado.nombreUsuario,
            Empresa: usuarioCreado.empresaId,
            Email: usuarioCreado.email,
        });
        next();
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.RegistrarUsuario = RegistrarUsuario;
const InicioSesionUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, contrasena, empresaId } = req.body;
        const usuario = yield usuario_service.getUsuario(email, empresaId);
        if (!usuario) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
            return res
                .status(statusCode)
                .json({ Message: `Usuario o contraseña invalida, ${msg}` });
        }
        const ContrasenaCorrecta = yield (0, encryptaPw_1.validarContrasena)(contrasena, usuario.contrasena);
        if (!ContrasenaCorrecta) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
            return res
                .status(statusCode)
                .json({ Message: `Usuario o contraseña invalida, ${msg}` });
        }
        const Token = (0, jsonWebToken_1.registrarToken)(usuario.id, usuario.empresaId);
        res.header("auth-token", Token).json({
            Usuario: usuario.nombreUsuario,
            Empresa: usuario.empresaId,
            Email: usuario.email,
            Message: `Bienvenid@ ${usuario.nombreUsuario}`,
        });
        next();
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.InicioSesionUsuario = InicioSesionUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id, empresaId } = req.params;
        yield usuario_service.updateUsuario(body, id, empresaId);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.updateUsuario = updateUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, empresaId } = req.params;
        yield usuario_service.deleteUsuario(id, empresaId);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.controller.js.map