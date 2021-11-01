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
const CuentasContables_model_1 = __importDefault(require("../../models/CuentasContables.model"));
class CuentasContables {
    getCuentasContables(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const cuentaResult = id === null
                ? yield CuentasContables_model_1.default.findAll({
                    where: { estado: "1" },
                    order: ["cuenta"]
                })
                : yield CuentasContables_model_1.default.findOne({ where: { id, estado: "1" } });
            return cuentaResult;
        });
    }
    addCuentaContable(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield CuentasContables_model_1.default.create(body);
        });
    }
    deleteCuentaContable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield CuentasContables_model_1.default.update({ estado: "0" }, { where: { id } });
        });
    }
    updateCuentaContable(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield CuentasContables_model_1.default.update(body, { where: { id, estado: "1" } });
        });
    }
}
exports.default = CuentasContables;
;
//# sourceMappingURL=cuentasContables.service.js.map