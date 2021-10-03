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
exports.getCuentasPadre = void 0;
const CuentasContablesPadres_model_1 = __importDefault(require("../models/CuentasContablesPadres.model"));
const getCuentasPadre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //await cuentas.sync({ alter: true })
        const CuentasResultado = yield CuentasContablesPadres_model_1.default.findAll();
        res.status(200).json(CuentasResultado);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getCuentasPadre = getCuentasPadre;
//# sourceMappingURL=cuentas.controller.js.map