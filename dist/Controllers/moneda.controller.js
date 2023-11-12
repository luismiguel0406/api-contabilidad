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
exports.deleteMoneda = exports.updateMoneda = exports.postMoneda = exports.getMoneda = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/mensajesCliente/MensajesRespuestaCliente");
const monedas_service_1 = __importDefault(require("../services/facturacion/monedas/monedas.service"));
const moneda_Service = new monedas_service_1.default();
const getMoneda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const monedaResult = yield moneda_Service.getMoneda(id);
        if (monedaResult === null) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ Monedas: monedaResult, Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getMoneda = getMoneda;
const postMoneda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield moneda_Service.addMoneda(body);
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postMoneda = postMoneda;
const updateMoneda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        yield moneda_Service.updateMoneda(id, body);
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.updateMoneda = updateMoneda;
const deleteMoneda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield moneda_Service.deleteMoneda(id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.deleteMoneda = deleteMoneda;
//# sourceMappingURL=moneda.controller.js.map