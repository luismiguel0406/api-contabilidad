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
exports.deleteMedioDePago = exports.updateMedioDePago = exports.postMedioDePago = exports.getMedioDePago = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/mensajesCliente/MensajesRespuestaCliente");
const medioDePago_service_1 = __importDefault(require("../services/facturacion/medioDePago/medioDePago.service"));
const medioDePago_service = new medioDePago_service_1.default();
const getMedioDePago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const MedioDePagoResult = yield medioDePago_service.getMedioDePago(id);
        if (MedioDePagoResult === null) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res
            .status(statusCode)
            .json({ MedioDePago: MedioDePagoResult, Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getMedioDePago = getMedioDePago;
const postMedioDePago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield medioDePago_service.addMedioDePago(body);
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postMedioDePago = postMedioDePago;
const updateMedioDePago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        yield medioDePago_service.updateMedioDePago(id, body);
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.updateMedioDePago = updateMedioDePago;
const deleteMedioDePago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield medioDePago_service.deleteMedioDePago(id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.deleteMedioDePago = deleteMedioDePago;
//# sourceMappingURL=medioDePago.controller.js.map