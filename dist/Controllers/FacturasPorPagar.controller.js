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
exports.getFacturasPorPagar = exports.postFacturaPorPagar = exports.getTipoFactura = void 0;
const entradaContable_service_1 = __importDefault(require("../services/entradaContable/entradaContable.service"));
const MensajesRespuestaCliente_1 = require("../helpers/MensajesError/MensajesRespuestaCliente");
const facturasPorPagar_service_1 = __importDefault(require("../services/facturacion/facturasPorPagar/facturasPorPagar.service"));
//-------TIPO FACTURAS POR PAGAR -----//
const facturaPorPagar_service = new facturasPorPagar_service_1.default();
const entradaContable_service = new entradaContable_service_1.default();
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
        //ENTRADA CONTABLE
        const entradaContable = yield entradaContable_service.facturaPorPagar(factura);
        const entradaContableaResult = yield entradaContable_service.addEntradaContable(entradaContable);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res
            .status(statusCode)
            .json({ factura, entradaContable: 'entradaContableaResult', Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postFacturaPorPagar = postFacturaPorPagar;
const getFacturasPorPagar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { empresaId } = req;
        const facturasPorPagar = yield facturaPorPagar_service.getFacturasPorPagar(id, empresaId);
        if (!facturasPorPagar) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        res.json({ FacturasPorPagar: facturasPorPagar });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getFacturasPorPagar = getFacturasPorPagar;
//# sourceMappingURL=FacturasPorPagar.controller.js.map