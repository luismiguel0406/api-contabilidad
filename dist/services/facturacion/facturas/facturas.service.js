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
const factura_model_1 = __importDefault(require("../../../models/Facturacion/facturas/factura.model"));
const detalleImpuestos_1 = __importDefault(require("../../../models/Facturacion/impuestos/detalleImpuestos"));
class FacturasService {
    addFactura(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(body);
                const factura = yield factura_model_1.default.create(body);
                return factura;
            }
            catch (error) {
                return error;
            }
        });
    }
    getFacturas(id = null, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const facturasResult = id === null
                ? yield factura_model_1.default.findAll({
                    include: [
                        {
                            model: detalleFactura_1.default,
                            required: true,
                            include: [{ model: detalleImpuestos_1.default }],
                        },
                    ],
                })
                : yield factura_model_1.default.findOne({
                    include: [
                        {
                            model: detalleFactura_1.default,
                            required: true,
                            include: [{ model: detalleImpuestos_1.default }],
                        },
                    ],
                    where: { id, empresaId, estado: "1" },
                });
            return facturasResult;
        });
    }
    deleteFactura(id, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield factura_model_1.default.update({ estado: "0" }, { where: { id, empresaId } });
        });
    }
    updateFactura() {
        return __awaiter(this, void 0, void 0, function* () {
            return "Las facturas no se actualizan";
        });
    }
}
exports.default = FacturasService;
//# sourceMappingURL=facturas.service.js.map