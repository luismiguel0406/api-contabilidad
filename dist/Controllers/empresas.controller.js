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
exports.updateEmpresa = exports.deleteEmpresa = exports.postEmpresa = exports.getEmpresa = void 0;
const empresa_service_1 = __importDefault(require("../services/empresa/empresa.service"));
const MensajesRespuestaCliente_1 = require("../helpers/MensajesError/MensajesRespuestaCliente");
const empresa = new empresa_service_1.default();
const getEmpresa = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const empresaResultado = yield empresa.getEmpresa(id);
        if (empresaResultado === null) {
            const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
            return res.status(statusCode).json({ Message: msg });
        }
        res.status(200).json({ Empresas: empresaResultado });
    }
    catch (error) {
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getEmpresa = getEmpresa;
const postEmpresa = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield empresa.AddEmpresa(body);
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postEmpresa = postEmpresa;
const deleteEmpresa = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield empresa.deleteEmpresa(id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.deleteEmpresa = deleteEmpresa;
const updateEmpresa = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id } = req.params;
        yield empresa.updateEmpresa(body, id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { msg, statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.internalError;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.updateEmpresa = updateEmpresa;
//# sourceMappingURL=empresas.controller.js.map