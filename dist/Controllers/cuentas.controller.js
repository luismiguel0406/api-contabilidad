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
exports.getCuentaContablePadre = exports.getCuentasContablesPadre = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/MensajesError/MensajesRespuestaCliente");
const cuentasContablesPadre_service_1 = __importDefault(require("../services/cuentas/cuentasContablesPadre.service"));
const getCuentasContablesPadre = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
    try {
        const cuentas_service = new cuentasContablesPadre_service_1.default();
        const cuentas = yield cuentas_service.getCuentas();
        if (cuentas === null) {
            return res.status(statusCode).json({ Message: msg });
        }
        res.status(200).json(cuentas);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getCuentasContablesPadre = getCuentasContablesPadre;
const getCuentaContablePadre = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { noCuenta } = req.params;
        const cuentas_service = new cuentasContablesPadre_service_1.default();
        const cuenta = yield cuentas_service.getCuenta(noCuenta);
        if (cuenta === null) {
            return res.status(204).json({ Message: "No content" });
        }
        res.status(200).json(cuenta);
    }
    catch (error) {
        res
            .status(500)
            .json({ Message: "El recurso que esta buscando no existe", error });
    }
});
exports.getCuentaContablePadre = getCuentaContablePadre;
//# sourceMappingURL=cuentas.controller.js.map