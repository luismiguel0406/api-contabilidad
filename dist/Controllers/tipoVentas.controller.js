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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTipoVenta = exports.updateTipoVenta = exports.postTipoVenta = exports.getTipoVentas = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/mensajesCliente/MensajesRespuestaCliente");
const tipoVentas_service_1 = require("../services/facturacion/tipoVentas/tipoVentas.service");
const tipoVenta_service = new tipoVentas_service_1.TipoVentasService();
const getTipoVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tipoVentaResult = yield tipoVenta_service.getTipoventas(id);
        if (tipoVentaResult === null) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ TipoVenta: tipoVentaResult, Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ message: msg, error });
    }
});
exports.getTipoVentas = getTipoVentas;
const postTipoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield tipoVenta_service.addTipoVentas(body);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postTipoVenta = postTipoVenta;
const updateTipoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        yield tipoVenta_service.updateTipoVentas(body, id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.updateTipoVenta = updateTipoVenta;
const deleteTipoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield tipoVenta_service.deleteTipoVentas(id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.deleteTipoVenta = deleteTipoVenta;
//# sourceMappingURL=tipoVentas.controller.js.map