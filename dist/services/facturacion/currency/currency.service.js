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
const currency_model_1 = __importDefault(require("../../../models/Facturacion/currency/currency.model"));
class CurrencyService {
    getCurrency(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = id === null
                ? yield currency_model_1.default.findAll({
                    attributes: ["id", "description", "symbol", "state"],
                    where: { state: true },
                })
                : yield currency_model_1.default.findOne({
                    attributes: ["id", "description", "symbol", "state"],
                    where: { id, state: true },
                });
            return result;
        });
    }
}
exports.default = CurrencyService;
//# sourceMappingURL=currency.service.js.map