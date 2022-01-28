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
exports.getTiposCuentasContables = exports.deleteCuentasContables = exports.updateCuentasContables = exports.getCuentasContables = exports.postCuentaContable = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/MensajesError/MensajesRespuestaCliente");
const cuentasContables_service_1 = __importDefault(require("../services/cuentas/cuentasContables.service"));
const cuentaContable_service = new cuentasContables_service_1.default();
const postCuentaContable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield cuentaContable_service.addCuentaContable(body);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postCuentaContable = postCuentaContable;
const getCuentasContables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cuentaResult = yield cuentaContable_service.getCuentasContables(id);
        if (cuentaResult === null) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        res.json({ Cuentas: cuentaResult });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getCuentasContables = getCuentasContables;
const updateCuentasContables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        yield cuentaContable_service.updateCuentaContable(body, id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.updateCuentasContables = updateCuentasContables;
const deleteCuentasContables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield cuentaContable_service.deleteCuentaContable(id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.deleteCuentasContables = deleteCuentasContables;
//---------TIPOS CUENTAS CONTABLES ----------//
const getTiposCuentasContables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tipoCuentaResult = yield cuentaContable_service.getTiposCuentaContable(id);
        if (Object.entries(tipoCuentaResult).length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        res.json({ TiposCuentas: tipoCuentaResult });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getTiposCuentasContables = getTiposCuentasContables;
//# sourceMappingURL=cuentaContable.controller.js.map