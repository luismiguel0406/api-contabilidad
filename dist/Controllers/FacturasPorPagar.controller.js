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
exports.postFacturaPorPagar = exports.getTipoFactura = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/MensajesError/MensajesRespuestaCliente");
const facturasPorPagar_service_1 = __importDefault(require("../services/facturacion/facturasPorPagar/facturasPorPagar.service"));
//-------TIPO FACTURAS POR PAGAR -----//
const facturaPorPagar_service = new facturasPorPagar_service_1.default();
const getTipoFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tipoFacturaResult = yield facturaPorPagar_service.getTiposFactura(id);
        if (!tipoFacturaResult) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        res.json({ tipoFacturasPorPagar: tipoFacturaResult });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getTipoFactura = getTipoFactura;
//------- FACTURAS POR PAGAR -------//
const postFacturaPorPagar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const factura = yield facturaPorPagar_service.addFacturasPorPagar(req.body);
        console.log(factura);
        res.json(factura);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postFacturaPorPagar = postFacturaPorPagar;
//# sourceMappingURL=FacturasPorPagar.controller.js.map