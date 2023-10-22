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
const transaccion_service_1 = __importDefault(require("services/transaccion/transaccion.service"));
class EntradaContableService {
    constructor() {
        this._transaccionId = 0;
    }
    //1- Otengo id de la transaccion en curso
    getTransaccionInit(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaccion_service = new transaccion_service_1.default();
            const transaccion = yield transaccion_service.getTransaccion(payload);
            const { id } = transaccion;
            //2- Busco las acciones que se haran relativa a esta transaccion
            const accionContable = yield transaccion.findAll({
                where: { id, estado: "1" }
            });
            return accionContable;
        });
    }
}
exports.default = EntradaContableService;
//# sourceMappingURL=entradaContable.js.map