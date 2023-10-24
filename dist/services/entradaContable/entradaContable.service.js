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
const transaccion_service_1 = __importDefault(require("../transaccion/transaccion.service"));
const accionEntradaContable_model_1 = __importDefault(require("../../models/AccionEntradaContable/accionEntradaContable.model"));
const os_1 = __importDefault(require("os"));
const helpers_1 = __importDefault(require("../../helpers"));
class EntradaContableService {
    constructor() {
        this._transaccionId = 0;
    }
    // 1- Otengo id de la transaccion en curso
    createEntradaContable(data) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const { payload, id, total, comentario, detalle } = data;
            const transaccion_service = new transaccion_service_1.default();
            const transaccion = yield transaccion_service.getTransaccion(payload);
            this._transaccionId = transaccion.id;
            // 2- Busco las acciones que se haran relativa a esta transaccion
            const accionContable = yield accionEntradaContable_model_1.default.findAll({
                attributes: ["transaccionId", "tipoCuentaId", "tipoEfectoId", "tipoRegistroId"],
                where: { transaccionId: this._transaccionId, estado: "1" }
            });
            // 3- Identificar los tipos de registro segun accion contable
            let nuevoDetalle = [];
            try {
                for (var _d = true, detalle_1 = __asyncValues(detalle), detalle_1_1; detalle_1_1 = yield detalle_1.next(), _a = detalle_1_1.done, !_a; _d = true) {
                    _c = detalle_1_1.value;
                    _d = false;
                    let details = _c;
                    let detalleSalida = accionContable.filter(item => (item.tipoCuentaId === details.tipoCuentaId));
                    const { tipoCuentaId, tipoEfectoId, tipoRegistroId, transaccionId } = detalleSalida[0];
                    let { valor } = details;
                    const determinacion = (0, helpers_1.default)(tipoCuentaId, tipoEfectoId, valor);
                    nuevoDetalle.push(Object.assign({ cuenta: details.cuenta, descripcion: details.descripcion }, determinacion));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = detalle_1.return)) yield _b.call(detalle_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // 4- Llenar la cabecera de la entrada contable, segun los datos que ingresan
            const dataEntrada = {
                numero: 200,
                debito: total,
                credito: total,
                comentario,
                estado: true,
                referenciaId: id,
                transaccionId: this._transaccionId,
                empresaId: 1,
                usuario: os_1.default.userInfo().username,
                terminal: os_1.default.hostname(),
                detalle: nuevoDetalle
            };
            // 5 - C
            const entradaContable = yield entradaContable_model_1.default.create(dataEntrada);
            return entradaContable;
        });
    }
}
exports.default = EntradaContableService;
//# sourceMappingURL=entradaContable.service.js.map