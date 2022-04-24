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
const entradaContable_model_1 = __importDefault(require("../../models/EntradaContable/entradaContable.model"));
const AccionesEntradaContable_service_1 = __importDefault(require("../AccioneseEntradaContable/AccionesEntradaContable.service"));
const transaccionesComerciales_service_1 = __importDefault(require("../transaccionesComerciales/transaccionesComerciales.service"));
class EntradaContableService {
    constructor(payload) {
        this._payload = payload;
    }
    getTransacionInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const transaccionComercial_service = new transaccionesComerciales_service_1.default();
            const transaccionId = yield transaccionComercial_service.getTransaccionesComerciales(this._payload);
            this._transaccionId = transaccionId.id;
            return;
        });
    }
    facturaPorPagar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { total, comentario, empresaId, createdAt, usuario, terminal, id, detalleFacturaPorPagar, } = data;
            let entradaContableHeader = {
                noEntrada: 123456,
                totalDebito: total,
                totalCredito: total,
                comentario,
                estado: true,
                createdAt,
                updatedAt: null,
                usuario,
                terminal,
                empresaId,
                transaccionComercialId: this._transaccionId,
                transaccionId: id,
                detalle: detalleFacturaPorPagar,
            };
            return entradaContableHeader;
        });
    }
    generarDetalle(detalle) {
        var detalle_1, detalle_1_1;
        var e_1, _a;
        var _b;
        return __awaiter(this, void 0, void 0, function* () {
            const accionEntrada_service = new AccionesEntradaContable_service_1.default();
            yield this.getTransacionInit();
            const accionesContables = (yield accionEntrada_service.getAccionEntrada(this._transaccionId));
            let entradaContableDetalle = [];
            try {
                for (detalle_1 = __asyncValues(detalle); detalle_1_1 = yield detalle_1.next(), !detalle_1_1.done;) {
                    let d = detalle_1_1.value;
                    let accionContableFiltered = accionesContables.filter((a) => a.tipoCuentaId == d.tipoCuentaId);
                    switch ((_b = accionContableFiltered[0]) === null || _b === void 0 ? void 0 : _b.accion) {
                        case "CREDITO":
                            entradaContableDetalle.push({
                                credito: d.valor,
                                debito: 0,
                                descripcionCuenta: d.descripcionCuenta,
                                cuenta: d.cuenta,
                                detalleImpuesto: '' //pendiente
                            });
                            break;
                        case "DEBITO":
                            entradaContableDetalle.push({
                                credito: 0,
                                debito: d.valor,
                                descripcionCuenta: d.descripcionCuenta,
                                cuenta: d.cuenta,
                                detalleImpuesto: '' //pendiente
                            });
                            break;
                        default:
                            break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (detalle_1_1 && !detalle_1_1.done && (_a = detalle_1.return)) yield _a.call(detalle_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return entradaContableDetalle;
        });
    }
    addEntradaContable(entrada) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield entradaContable_model_1.default.create(entrada);
        });
    }
}
exports.default = EntradaContableService;
//# sourceMappingURL=entradaContable.service.js.map