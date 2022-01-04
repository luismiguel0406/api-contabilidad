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
exports.addFactura = exports.getFacturas = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/MensajesError/MensajesRespuestaCliente");
const detalleFactura_service_1 = __importDefault(require("../services/facturacion/facturas/detalleFactura.service"));
const facturas_service_1 = __importDefault(require("../services/facturacion/facturas/facturas.service"));
const facturas_service = new facturas_service_1.default();
const detalleFactura_service = new detalleFactura_service_1.default();
const getFacturas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({ Message: " Invoice Works" });
});
exports.getFacturas = getFacturas;
const addFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const facturaResult = yield facturas_service.addFactura(body);
        /* const { detalleFactura } = body;
         const detalleFacturaResult = await detalleFactura_service.addDetalleFactura(
           detalleFactura,
           facturaResult);*/
        console.log(facturaResult);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ message: msg, error });
    }
});
exports.addFactura = addFactura;
//# sourceMappingURL=facturas.controller.js.map