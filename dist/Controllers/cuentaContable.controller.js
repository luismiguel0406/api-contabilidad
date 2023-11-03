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
exports.postMovimientoCuenta = exports.getTiposCuentasContables = exports.deleteGrupoCuentasContables = exports.updateGrupoCuentasContables = exports.getGrupoCuentasContables = exports.postGrupoCuentaContable = exports.getCuentasContables = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/MensajesError/MensajesRespuestaCliente");
const cuentasContables_service_1 = __importDefault(require("../services/cuentas/cuentasContables.service"));
const cuentaContable_service = new cuentasContables_service_1.default();
//--------- CUENTAS CONTABLES ----------//
const getCuentasContables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { empresaId } = req;
        const cuentasContables = yield cuentaContable_service.getCuentasContables(id, empresaId);
        if (Object.entries(cuentasContables).length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        res.json({ cuentasContables });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getCuentasContables = getCuentasContables;
//CODES HERE
//---------GRUPOS CUENTAS CONTABLES ----------//
const postGrupoCuentaContable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield cuentaContable_service.addGrupoCuentaContable(body);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postGrupoCuentaContable = postGrupoCuentaContable;
const getGrupoCuentasContables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const grupoCuentaResult = yield cuentaContable_service.getGrupoCuentasContables(id);
        if (Object.entries(grupoCuentaResult).length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        res.json({ GrupoCuentas: grupoCuentaResult });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getGrupoCuentasContables = getGrupoCuentasContables;
const updateGrupoCuentasContables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        yield cuentaContable_service.updateGrupoCuentaContable(body, id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.updateGrupoCuentasContables = updateGrupoCuentasContables;
const deleteGrupoCuentasContables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield cuentaContable_service.deleteGrupoCuentaContable(id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.deleteGrupoCuentasContables = deleteGrupoCuentasContables;
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
//------------MOVIMIENTO DE CUENTAS CONTABLES---------------//
const postMovimientoCuenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield cuentaContable_service.addMovimientoCuenta(body);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postMovimientoCuenta = postMovimientoCuenta;
//# sourceMappingURL=cuentaContable.controller.js.map