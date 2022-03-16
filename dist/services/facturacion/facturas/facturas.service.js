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
const detalleFactura_1 = __importDefault(require("../../../models/Facturacion/facturas/detalleFactura"));
const factura_model_1 = __importDefault(require("../../../models/Facturacion/facturas/factura.model"));
class FacturasService {
    addFactura(body) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const factura = yield factura_model_1.default.create(body);
                const { id } = factura.dataValues;
                try {
                    for (var _b = __asyncValues(body.detalleFactura), _c; _c = yield _b.next(), !_c.done;) {
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
                const detalleFactura = yield detalleFactura_1.default.bulkCreate(body.detalleFactura);
                return { factura, detalleFactura };
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
                        },
                    ],
                    where: { empresaId, estado: "1" }
                })
                : yield factura_model_1.default.findOne({
                    include: [
                        {
                            model: detalleFactura_1.default,
                            required: true,
                        },
                    ],
                    where: { id, empresaId, estado: "1" }
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