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
const detalleFactura_1 = __importDefault(require("../../../models/Facturacion/facturas/detalleFactura"));
class DetalleFacturaService {
    addDetalleFactura(body, facturaId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detalleFactura = yield detalleFactura_1.default.create(Object.assign(Object.assign({}, body), { facturaId }));
                return detalleFactura;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = DetalleFacturaService;
//# sourceMappingURL=detalleFactura.service.js.map