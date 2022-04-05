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
exports.generarDetalleEntradaContable = void 0;
const transaccionesComerciales_service_1 = __importDefault(require("../services/transaccionesComerciales/transaccionesComerciales.service"));
const transaccionComercial_service = new transaccionesComerciales_service_1.default();
const generarDetalleEntradaContable = (detalle, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const movimientosEntradaContable = yield transaccionComercial_service.getTransaccionesComerciales(payload);
    return movimientosEntradaContable;
    /* for await (let item of detalle){
     // Detalle cuenta
     // Linea de detalle factura
     // Se deberia Tomar la cuenta contable, su tipo y de acuerdo a este , indicar si va en debito o credito
     // EN BASE DE DATOS select * from transacciones comerciales  where transaccion comercial igual a la operacion
     // Entonces  hago un SWITCH CASE ETC ETC
  
   
  
     }*/
});
exports.generarDetalleEntradaContable = generarDetalleEntradaContable;
//# sourceMappingURL=detalleEntradaContable.js.map