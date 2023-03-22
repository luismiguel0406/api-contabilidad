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
exports.generarDetalleEntradaContable = void 0;
const AccionesEntradaContable_service_1 = __importDefault(require("../services/AccioneseEntradaContable/AccionesEntradaContable.service"));
const transaccionesComerciales_service_1 = __importDefault(require("../services/transaccionesComerciales/transaccionesComerciales.service"));
const transaccionComercial_service = new transaccionesComerciales_service_1.default();
const accionEntrada_service = new AccionesEntradaContable_service_1.default();
//este metodo se refactorizo 
const generarDetalleEntradaContable = (detalle, payload) => { var _a, detalle_1, detalle_1_1; return __awaiter(void 0, void 0, void 0, function* () {
    var _b, e_1, _c, _d;
    var _e;
    const transaccion = (yield transaccionComercial_service.getTransaccionComercial(payload));
    const accionesContables = (yield accionEntrada_service.getAccionEntrada(transaccion.id));
    let entradaContable = [];
    try {
        for (_a = true, detalle_1 = __asyncValues(detalle); detalle_1_1 = yield detalle_1.next(), _b = detalle_1_1.done, !_b;) {
            _d = detalle_1_1.value;
            _a = false;
            try {
                let d = _d;
                let accionContableFiltered = accionesContables.filter((a) => a.tipoCuentaId == d.tipoCuentaId);
                switch ((_e = accionContableFiltered[0]) === null || _e === void 0 ? void 0 : _e.accion) {
                    case "CREDITO":
                        entradaContable.push({
                            credito: d.valor,
                            debito: 0,
                            descripcionCuenta: d.descripcionCuenta,
                            cuenta: d.cuenta,
                        });
                        break;
                    case "DEBITO":
                        entradaContable.push({
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
            finally {
                _a = true;
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
}); };
exports.generarDetalleEntradaContable = generarDetalleEntradaContable;
//# sourceMappingURL=detalleEntradaContable.js.map