"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validToken = exports.registerToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = __importDefault(require("../../config/index"));
const MensajesRespuestaCliente_1 = require("../../helpers/mensajesCliente/MensajesRespuestaCliente");
const registerToken = (userId, roleId, companyId) => {
    const token = jsonwebtoken_1.default.sign({ userId, roleId, companyId }, String(index_1.default.SECRET_KEY), {
        expiresIn: "12h",
    });
    return token;
};
exports.registerToken = registerToken;
const validToken = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.unAuthorized;
            return res.status(statusCode).json({ Message: msg });
        }
        const Payload = jsonwebtoken_1.default.verify(token, String(index_1.default.SECRET_KEY));
        req.userId = Payload.userId;
        req.companyId = Payload.companyId;
        req.username = Payload.username;
        req.roleId = Payload.roleId;
        next();
    }
    catch (error) {
        return next(error);
    }
};
exports.validToken = validToken;
//# sourceMappingURL=jsonWebToken.js.map