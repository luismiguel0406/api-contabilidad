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
const entradaContableHeader_model_1 = __importDefault(require("models/EntradaContable/entradaContableHeader.model"));
class EntradaContableService {
    addEntradaContable(payload, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const entradaContableSaved = yield entradaContableHeader_model_1.default.create(data);
            let objetoEntrada;
            data.forEach((element) => {
                objetoEntrada.cuenta = element.cuentaContable;
                ;
                objetoEntrada.debito = element.valor;
                objetoEntrada.credito = 0;
                objetoEntrada.comentario = 'NO COMENTARIO';
                objetoEntrada.estado = true;
                objetoEntrada.entradaId =
                ;
            });
            //codes here
        });
    }
}
exports.default = EntradaContableService;
//# sourceMappingURL=entradaContable.service.js.map