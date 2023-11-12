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
exports.deleteFactura = exports.addFactura = exports.getFacturas = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/mensajesCliente/MensajesRespuestaCliente");
const facturas_service_1 = __importDefault(require("../services/facturacion/facturas/facturas.service"));
const facturas_service = new facturas_service_1.default();
const getFacturas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const facturaResult = yield facturas_service.getFacturas(id, req.empresaId);
        if (Object.entries(facturaResult).length == 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        res.json({ Facturas: facturaResult });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ message: msg, error });
    }
});
exports.getFacturas = getFacturas;
const addFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const factura = yield facturas_service.addFactura(req.body);
        res.json(factura);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ message: msg, error });
    }
});
exports.addFactura = addFactura;
const deleteFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield facturas_service.deleteFactura(id, req.empresaId);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ message: msg, error });
    }
});
exports.deleteFactura = deleteFactura;
//NO EXISTE METODO UPDATE PARA FACTURAS//
//# sourceMappingURL=facturas.controller.js.map