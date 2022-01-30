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
const gastos_model_1 = __importDefault(require("../../../../models/Facturacion/Facturas por pagar/Gastos/gastos.model"));
class TipoGastosService {
    getTipoGastos(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoGastosResult = id === null
                ? yield gastos_model_1.default.findAll({ where: { estado: "1" } })
                : yield gastos_model_1.default.findOne({ where: { id, estado: "1" } });
            return tipoGastosResult;
        });
    }
    ;
    //DEMAS PARA PANEL DE ADMINSTRACION
    addTipoGasto(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevoTipoGasto = yield gastos_model_1.default.create(body);
            return nuevoTipoGasto;
        });
    }
    updateTipoGasto(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield gastos_model_1.default.update(body, { where: { id } });
        });
    }
    detleteTipoGasto(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield gastos_model_1.default.update({ estado: "0" }, { where: { id } });
        });
    }
}
exports.default = TipoGastosService;
//# sourceMappingURL=tipoGastos.service.js.map