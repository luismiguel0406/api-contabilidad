"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadToken = exports.registrarToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = __importDefault(require("../../config/index"));
const MensajesRespuestaCliente_1 = require("../../helpers/MensajesError/MensajesRespuestaCliente");
const registrarToken = (usuarioId) => {
    const token = jsonwebtoken_1.default.sign({ _id: usuarioId }, index_1.default.SECRET_KEY || "", {
        expiresIn: "12h",
    });
    return token;
};
exports.registrarToken = registrarToken;
const ValidadToken = (req, res, next) => {
    const Token = req.header("auth-token");
    const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.unauthorized;
    if (!Token)
        return res.status(statusCode).json({ Message: msg });
    const Payload = jsonwebtoken_1.default.verify(Token, index_1.default.SECRET_KEY || "");
    //req.userId = Payload._id;
    let vriableGlobalUsuarioId = Payload._id;
    next();
};
exports.ValidadToken = ValidadToken;
//# sourceMappingURL=jsonWebToken.js.map