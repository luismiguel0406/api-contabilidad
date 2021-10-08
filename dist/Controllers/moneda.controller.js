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
exports.getMoneda = void 0;
const monedas_service_1 = __importDefault(require("../services/facturacion/monedas.service"));
const getMoneda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const moneda_Service = new monedas_service_1.default();
        const monedaResult = yield moneda_Service.getMoneda(id);
        if (monedaResult === null) {
            return res.status(204).json({ Message: "No content" });
        }
        res.status(200).json({ Monedas: monedaResult });
    }
    catch (error) {
        res.status(404).json({ Message: "Ha ocurrido un error ", error });
    }
});
exports.getMoneda = getMoneda;
//# sourceMappingURL=moneda.controller.js.map