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
const tipoCuentaContable_model_1 = __importDefault(require("../../models/Cuentas Contables/tipoCuentaContable.model"));
const grupoCuentasContables_model_1 = __importDefault(require("../../models/Cuentas Contables/grupoCuentasContables.model"));
const cuentasContables_model_1 = __importDefault(require("../../models/Cuentas Contables/cuentasContables.model"));
const grupoCuentasContables_model_2 = __importDefault(require("../../models/Cuentas Contables/grupoCuentasContables.model"));
class CuentasContablesService {
    getCuentasContables(id = null, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cuentaResult = id === null
                ? yield cuentasContables_model_1.default.findAll({
                    include: [
                        {
                            model: grupoCuentasContables_model_2.default,
                            attributes: ["descripcion"],
                            required: true,
                        },
                        {
                            model: tipoCuentaContable_model_1.default,
                            attributes: ["descripcion"],
                            required: true,
                        },
                    ],
                    where: { empresaId, estado: "1" },
                })
                : yield cuentasContables_model_1.default.findOne({
                    include: [
                        {
                            model: grupoCuentasContables_model_2.default,
                            attributes: ["descripcion"],
                            required: true,
                        },
                        {
                            model: tipoCuentaContable_model_1.default,
                            attributes: ["descripcion"],
                            required: true,
                        },
                    ],
                    where: { id, empresaId, estado: "1" },
                });
            return cuentaResult;
        });
    }
    addCuentasContables(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cuentasContables_model_1.default.create(body);
        });
    }
    updateCuentaContable(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cuentasContables_model_1.default.update(body, { where: { id, estado: "1" } });
        });
    }
    deleteCuentaContable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cuentasContables_model_1.default.update({ estado: "0" }, { where: { id } });
        });
    }
    //-------------GRUPO CUENTAS ---------------//
    getGrupoCuentasContables(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const cuentaResult = id === null
                ? yield grupoCuentasContables_model_1.default.findAll({
                    where: { estado: "1" },
                    order: ["cuenta"],
                })
                : yield grupoCuentasContables_model_1.default.findOne({
                    where: { id, estado: "1" },
                });
            return cuentaResult;
        });
    }
    addGrupoCuentaContable(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield grupoCuentasContables_model_1.default.create(body);
        });
    }
    deleteGrupoCuentaContable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield grupoCuentasContables_model_1.default.update({ estado: "0" }, { where: { id } });
        });
    }
    updateGrupoCuentaContable(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield grupoCuentasContables_model_1.default.update(body, { where: { id, estado: "1" } });
        });
    }
    //-------------TIPO CUENTAS ---------------//
    getTiposCuentaContable(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoCuentaResult = id === null
                ? yield tipoCuentaContable_model_1.default.findAll({
                    where: { estado: "1" },
                })
                : yield grupoCuentasContables_model_1.default.findOne({
                    where: { id, estado: "1" },
                });
            return tipoCuentaResult;
        });
    }
    addTipoCuentaContable(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoCuentaContable_model_1.default.create(body);
        });
    }
    updateTipoCuentaContable(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoCuentaContable_model_1.default.update(body, { where: { id, estado: "1" } });
        });
    }
    deleteTipoCuentaContable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoCuentaContable_model_1.default.update({ estado: "0" }, { where: { id } });
        });
    }
}
exports.default = CuentasContablesService;
//# sourceMappingURL=cuentasContables.service.js.map