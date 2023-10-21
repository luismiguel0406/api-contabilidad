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
    constructor() {
        this._transComercialId = 0;
    }
    getTransaccionInit(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaccionComercial_service = new transaccionesComerciales_service_1.default();
            const transComercial = yield transaccionComercial_service.getTransaccionComercial(payload);
            return transComercial.id;
        });
    }
    //Generar detalle entrada contable //
    generarDetalle(detalle) {
        var _a, detalle_1, detalle_1_1;
        var _b, e_1, _c, _d;
        var _e;
        return __awaiter(this, void 0, void 0, function* () {
            const accionEntrada_service = new AccionesEntradaContable_service_1.default();
            const accionesContables = (yield accionEntrada_service.getAccionEntrada(this._transComercialId));
            let entradaContableDetalle = [];
            try {
                for (_a = true, detalle_1 = __asyncValues(detalle); detalle_1_1 = yield detalle_1.next(), _b = detalle_1_1.done, !_b; _a = true) {
                    _d = detalle_1_1.value;
                    _a = false;
                    let d = _d;
                    let accionContableFiltered = accionesContables.filter((a) => a.tipoCuentaId == d.tipoCuentaId);
                    switch ((_e = accionContableFiltered[0]) === null || _e === void 0 ? void 0 : _e.accion) {
                        case "CREDITO":
                            entradaContableDetalle.push({
                                credito: d.valor,
                                debito: 0,
                                descripcionCuenta: d.descripcionCuenta,
                                cuenta: d.cuenta,
                            });
                            break;
                        case "DEBITO":
                            entradaContableDetalle.push({
                                credito: 0,
                                debito: d.valor,
                                descripcionCuenta: d.descripcionCuenta,
                                cuenta: d.cuenta,
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
                    if (!_a && !_b && (_c = detalle_1.return)) yield _c.call(detalle_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return entradaContableDetalle;
        });
    }
    // Agregar Entrada Contrable
    addEntradaContable(entrada) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield entradaContable_model_1.default.create(entrada);
        });
    }
    // Entrada facturas por pagar
    facturaPorPagar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let payload = "REGISTRO_FACTURAS_POR_PAGAR";
            const { total, comentario, empresaId, createdAt, usuario, terminal, id, detalleFacturaPorPagar, } = data;
            //construyo detalle de la entrada
            const detalleEntradaContable = yield this.generarDetalle(detalleFacturaPorPagar);
            this._transComercialId = yield this.getTransaccionInit(payload);
            let entradaContable = {
                noEntrada: Math.random(),
                totalDebito: total,
                totalCredito: total,
                comentario,
                estado: true,
                createdAt,
                updatedAt: null,
                usuario,
                terminal,
                empresaId,
                transaccionComercialId: this._transComercialId,
                documentoId: id,
                detalle: detalleEntradaContable,
            };
            return entradaContable;
        });
    }
}
exports.default = EntradaContableService;
//# sourceMappingURL=entradaContable.service.js.map