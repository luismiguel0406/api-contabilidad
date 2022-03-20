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
//import detalleFacturasPorPagar from "../../../models//Facturacion/Facturas por pagar/detalleFacturasPorPagar.model";
const facturasPorPagar_model_1 = __importDefault(require("../../../models/Facturacion/Facturas por pagar/facturasPorPagar.model"));
const tiposFacturasPorPagar_model_1 = __importDefault(require("../../../models/Facturacion/Facturas por pagar/tiposFacturasPorPagar/tiposFacturasPorPagar.model"));
class FacturasPorPagarService {
    //---------- FACTURAS POR PAGAR -------------//
    getFacturasPorPagar(id = null, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const FacturasPorPagar = id === null
                ? yield facturasPorPagar_model_1.default.findAll({
                    /* include: [
                       {
                         model: detalleFacturasPorPagar,
                         required: true,
                       },
                     ],
                     */
                    where: { empresaId, estado: "1" },
                })
                : yield facturasPorPagar_model_1.default.findOne({
                    /* include: [
                       {
                         model: detalleFacturasPorPagar,
                         required: true,
                       },
                     ],*/
                    where: { id, empresaId, estado: "1" },
                });
            return FacturasPorPagar;
        });
    }
    addFacturasPorPagar(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const facturaPorPagarResult = yield facturasPorPagar_model_1.default.create(body);
                /*
                 const { id } = facturaPorPagarResult.dataValues;
           
                 for await (let detalle of body.detalleFacturaPorPagar) {
                   detalle.facturaPorPagarId = id;
                 }
                 const detalleFacturaResult = await detalleFacturasPorPagar.bulkCreate(
                   body.detalleFacturaPorPagar
                 );
                 */
                return facturaPorPagarResult;
                // detalleFacturaResult,
            }
            catch (error) {
                return error;
            }
        });
    }
    deleteFacturasPorPagar(id, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield facturasPorPagar_model_1.default.update({ estado: "0" }, { where: { id, empresaId } });
        });
    }
    updateFacturasPorPagar() {
        return __awaiter(this, void 0, void 0, function* () {
            return "Las Facturas no se actualizan";
        });
    }
    //------------TIPO FACTURAS POR PAGAR ----------//
    getTiposFactura(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const Tipofactura = id === null
                ? yield tiposFacturasPorPagar_model_1.default.findAll({ where: { estado: "1" } })
                : yield tiposFacturasPorPagar_model_1.default.findOne({ where: { id, estado: "1" } });
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
                    estado: "1",
                },
            });
        });
    }
    deleteTipoFacturas(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tiposFacturasPorPagar_model_1.default.update({ estado: "0" }, { where: { id } });
        });
    }
}
exports.default = FacturasPorPagarService;
//# sourceMappingURL=facturasPorPagar.service.js.map