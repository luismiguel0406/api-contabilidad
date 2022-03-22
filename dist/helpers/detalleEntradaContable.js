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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarDetalleEntradaContable = void 0;
const generarDetalleEntradaContable = (detalle) => { var detalle_1, detalle_1_1; return __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    try {
        for (detalle_1 = __asyncValues(detalle); detalle_1_1 = yield detalle_1.next(), !detalle_1_1.done;) {
            let item = detalle_1_1.value;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (detalle_1_1 && !detalle_1_1.done && (_a = detalle_1.return)) yield _a.call(detalle_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}); };
exports.generarDetalleEntradaContable = generarDetalleEntradaContable;
//# sourceMappingURL=detalleEntradaContable.js.map