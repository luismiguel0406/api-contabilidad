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
const TransaccionesComerciales_model_1 = __importDefault(require("../../models/TransaccionesComerciales/TransaccionesComerciales.model"));
class TransaccionesComercialesService {
    getTransaccionesComerciales(payload = "") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaccion = yield TransaccionesComerciales_model_1.default.findAll({
                    attributes: ["id", "descripcion"],
                    where: { payload, estado: "1" },
                });
                return transaccion;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = TransaccionesComercialesService;
//# sourceMappingURL=transaccionesComerciales.service.js.map