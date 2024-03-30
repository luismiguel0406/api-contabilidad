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
const Transaction_model_1 = __importDefault(require("../../models/Transaction/Transaction.model"));
class TransactionService {
    getTransaction(payload = "") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Transaction_model_1.default.findOne({
                    attributes: ["id", "nombre"],
                    where: { payload, state: true },
                });
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = TransactionService;
//# sourceMappingURL=transaction.service.js.map