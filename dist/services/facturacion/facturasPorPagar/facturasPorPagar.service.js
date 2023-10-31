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
const facturasPorPagar_model_1 = __importDefault(require("../../../models/Facturacion/Facturas por pagar/facturasPorPagar.model"));
const tiposFacturasPorPagar_model_1 = __importDefault(require("../../../models/Facturacion/Facturas por pagar/tiposFacturasPorPagar/tiposFacturasPorPagar.model"));
class FacturasPorPagarService {
    //---------- FACTURAS POR PAGAR -------------//
    getFacturasPorPagar(id = null, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const FacturasPorPagar = id === null
                ? yield facturasPorPagar_model_1.default.findAll({
                    where: { empresaId, estado: true },
                })
                : yield facturasPorPagar_model_1.default.findOne({
                    where: { id, empresaId, estado: true },
                });
            return FacturasPorPagar;
        });
    }
    addFacturasPorPagar(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield facturasPorPagar_model_1.default.create(body);
            }
            catch (error) {
                return error;
            }
        });
    }
    deleteFacturasPorPagar(id, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield facturasPorPagar_model_1.default.update({ estado: false }, { where: { id, empresaId } });
        });
    }
    //------------TIPO FACTURAS POR PAGAR ----------//
    getTiposFactura(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const Tipofactura = id === null
                ? yield tiposFacturasPorPagar_model_1.default.findAll({ where: { estado: true } })
                : yield tiposFacturasPorPagar_model_1.default.findOne({ where: { id, estado: true } });
            return Tipofactura;
        });
    }
    addTipoFactura(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tiposFacturasPorPagar_model_1.default.create(body);
        });
    }
    updateTipoFacturas(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tiposFacturasPorPagar_model_1.default.update(body, {
                where: {
                    id,
                    estado: true,
                },
            });
        });
    }
    deleteTipoFacturas(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tiposFacturasPorPagar_model_1.default.update({ estado: false }, { where: { id } });
        });
    }
}
exports.default = FacturasPorPagarService;
//# sourceMappingURL=facturasPorPagar.service.js.map