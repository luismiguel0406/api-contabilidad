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
exports.postCuentaContable = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/MensajesError/MensajesRespuestaCliente");
const cuentasContables_service_1 = __importDefault(require("../services/cuentas/cuentasContables.service"));
const cuentaContable_service = new cuentasContables_service_1.default();
const postCuentaContable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
    try {
        const { body } = req;
        yield cuentaContable_service.addCuentaContable(body);
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postCuentaContable = postCuentaContable;
//# sourceMappingURL=cuentaContable.controller.js.map