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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const detalleFacturasPorPagar_model_1 = __importDefault(require("models/Facturacion/Facturas por pagar/detalleFacturasPorPagar.model"));
const facturasPorPagar_model_1 = __importDefault(require("models/Facturacion/Facturas por pagar/facturasPorPagar.model"));
const sequelize_1 = require("sequelize");
class FacturasPorPagarService {
    getFacturasPorPagar(id = null, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const FacturasPorPagar = id === null
                ? yield facturasPorPagar_model_1.default.findAll({ where: { empresaId, estado: "1" } })
                : yield facturasPorPagar_model_1.default.findOne({
                    where: { id, empresaId, estado: "1" },
                });
            return FacturasPorPagar;
        });
    }
    addfacturasPorPagar(body) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const t = yield sequelize_1.Sequelize.transaction();
                const facturaPorPagarResult = yield facturasPorPagar_model_1.default.create(body, { transaction: t });
                const { id } = facturaPorPagarResult.dataValues;
                try {
                    for (var _b = __asyncValues(body.detalleFacturaPorPagar), _c; _c = yield _b.next(), !_c.done;) {
                        let detalle = _c.value;
                        detalle.facturaId = id;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                const detalleFacturaResult = detalleFacturasPorPagar_model_1.default.bulkCreate(body.detalleFacturaPorPagar, { transaction: t });
                return {
                    facturaPorPagar: facturaPorPagarResult,
                    detalleFacturaPorPagar: detalleFacturaResult,
                };
            }
            finally {
            }
        });
    }
    catch(error) {
        return error;
    }
}
exports.default = FacturasPorPagarService;
async;
deleteFacturasPorPagar(id, string, empresaId, string);
{
    await facturasPorPagar_model_1.default.update({ estado: "0" }, { where: { id, empresaId } });
}
async;
updateFacturasPorPagar();
{
    return "Las Facturas no se actualizan";
}
//# sourceMappingURL=facturasPorPagar.service.js.map