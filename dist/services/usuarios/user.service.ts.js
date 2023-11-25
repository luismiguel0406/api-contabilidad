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
const user_model_1 = __importDefault(require("../../models/user/user.model"));
class UserService {
    addUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.create(body);
        });
    }
    getUser(email, companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.default.findOne({
                where: { email, companyId, state: true },
            });
            return result;
        });
    }
    updateUser(body, id, companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.default.update(body, {
                where: { id, companyId, state: true },
            });
        });
    }
    deleteUser(id, companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.default.update({ state: false }, { where: { id, companyId } });
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.ts.js.map