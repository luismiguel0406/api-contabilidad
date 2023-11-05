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
const tipoCuenta_model_1 = __importDefault(require("../../models/Cuentas Contables/tipoCuenta.model"));
const grupoCuenta_model_1 = __importDefault(require("../../models/Cuentas Contables/grupoCuenta.model"));
const cuentasContables_model_1 = __importDefault(require("../../models/Cuentas Contables/cuentasContables.model"));
const grupoCuenta_model_2 = __importDefault(require("../../models/Cuentas Contables/grupoCuenta.model"));
const movimientoCuenta_model_1 = __importDefault(require("../../models/Cuentas Contables/movimientoCuenta.model"));
const tipoEfecto_model_1 = __importDefault(require("../../models/Cuentas Contables/tipoEfecto.model"));
class CuentasContablesService {
    getCuentasContables(id = null, empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cuentaResult = id === null
                ? yield cuentasContables_model_1.default.findAll({
                    include: [
                        {
                            model: grupoCuenta_model_2.default,
                            attributes: ["descripcion"],
                            required: true,
                        },
                        {
                            model: tipoCuenta_model_1.default,
                            attributes: ["descripcion"],
                            required: true,
                        },
                    ],
                    where: { empresaId, estado: true },
                })
                : yield cuentasContables_model_1.default.findOne({
                    include: [
                        {
                            model: grupoCuenta_model_2.default,
                            attributes: ["descripcion"],
                            required: true,
                        },
                        {
                            model: tipoCuenta_model_1.default,
                            attributes: ["descripcion"],
                            required: true,
                        },
                    ],
                    where: { id, empresaId, estado: true },
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
            yield cuentasContables_model_1.default.update(body, { where: { id, estado: true } });
        });
    }
    deleteCuentaContable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cuentasContables_model_1.default.update({ estado: false }, { where: { id } });
        });
    }
    //-------------GRUPO CUENTAS ---------------//
    getGrupoCuentasContables(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const cuentaResult = id === null
                ? yield grupoCuenta_model_1.default.findAll({
                    where: { estado: "1" },
                    order: ["cuenta"],
                })
                : yield grupoCuenta_model_1.default.findOne({
                    where: { id, estado: "1" },
                });
            return cuentaResult;
        });
    }
    addGrupoCuentaContable(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield grupoCuenta_model_1.default.create(body);
        });
    }
    deleteGrupoCuentaContable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield grupoCuenta_model_1.default.update({ estado: false }, { where: { id } });
        });
    }
    updateGrupoCuentaContable(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield grupoCuenta_model_1.default.update(body, { where: { id, estado: "1" } });
        });
    }
    //-------------TIPO CUENTAS ---------------//
    getTiposCuentaContable(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoCuentaResult = id === null
                ? yield tipoCuenta_model_1.default.findAll({
                    where: { estado: true },
                })
                : yield grupoCuenta_model_1.default.findOne({
                    where: { id, estado: true },
                });
            return tipoCuentaResult;
        });
    }
    addTipoCuentaContable(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoCuenta_model_1.default.create(body);
        });
    }
    updateTipoCuentaContable(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoCuenta_model_1.default.update(body, { where: { id, estado: true } });
        });
    }
    deleteTipoCuentaContable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoCuenta_model_1.default.update({ estado: false }, { where: { id } });
        });
    }
    //--------------MOVIMIENTO CUENTAS CONTABLES-------------//
    addMovimientoCuenta(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield movimientoCuenta_model_1.default.create(body);
        });
    }
    getMovimientoCuenta(cuentaContableId = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimientoResult = yield movimientoCuenta_model_1.default.findAll({
                include: [
                    {
                        model: cuentasContables_model_1.default,
                        required: true,
                        attributes: ["descripcion", ["noCuenta", "cuenta"]],
                        where: { estado: true },
                    },
                    {
                        model: tipoEfecto_model_1.default,
                        required: true,
                        attributes: ["descripcion"],
                        where: { estado: true },
                    },
                ],
                where: cuentaContableId === 0
                    ? { estado: true }
                    : { cuentaContableId, estado: true },
            });
            return movimientoResult;
        });
    }
}
exports.default = CuentasContablesService;
//# sourceMappingURL=cuentasContables.service.js.map