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
exports.deleteUsuario = exports.updateUsuario = exports.login = exports.registerUser = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/mensajesCliente/MensajesRespuestaCliente");
const jsonWebToken_1 = require("../lib/Token/jsonWebToken");
const encryptaPw_1 = require("../lib/validaciones/encryptaPw");
const user_service_1 = __importDefault(require("../services/users/user.service"));
const user_service = new user_service_1.default();
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, companyId } = req.body;
        const isExists = yield user_service.getUser(email, companyId);
        if (isExists) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
            return res
                .status(statusCode)
                .json({ Message: `Usuario o contraseña invalida, ${msg}` });
        }
        const { id: userId, roleId } = yield user_service.addUser(req.body);
        const token = (0, jsonWebToken_1.registerToken)(userId, roleId, companyId);
        res.cookie("token", token, {
            sameSite: "none",
            secure: true,
            httpOnly: false,
        });
        next();
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.registerUser = registerUser;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, companyId } = req.body;
        const user = yield user_service.getUser(email, companyId);
        if (!user) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
            return res
                .status(statusCode)
                .json({ Message: `Usuario o contraseña invalida, ${msg}` });
        }
        const isValidPassword = yield (0, encryptaPw_1.validPassword)(password, user.password);
        if (!isValidPassword) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
            return res
                .status(statusCode)
                .json({ Message: `Usuario o contraseña invalida, ${msg}` });
        }
        const token = (0, jsonWebToken_1.registerToken)(user.id, user.roleId, user.compayId);
        res.cookie("token", token, {
            sameSite: "none",
            secure: false,
            httpOnly: true,
        });
        next();
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.login = login;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id, empresaId } = req.params;
        yield user_service.updateUser(body, id, empresaId);
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
        yield user_service.deleteUser(id, empresaId);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=user.controller.js.map