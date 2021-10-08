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
exports.getEmpresa = void 0;
const empresa_service_1 = __importDefault(require("../services/empresa/empresa.service"));
const getEmpresa = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const empresa = new empresa_service_1.default();
        const empresaResultado = yield empresa.getEmpresa(id);
        if (empresaResultado === null) {
            return res.status(204).json({ Message: "No Content" });
        }
        res.status(200).json({ Empresa: empresaResultado });
    }
    catch (error) {
        res.status(500).json({ Message: "Error al buscar la empresa", error });
    }
});
exports.getEmpresa = getEmpresa;
//# sourceMappingURL=empresas.controller.js.map