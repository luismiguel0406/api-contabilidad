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
exports.getBank = exports.getTypeDocument = exports.getTypeService = exports.getTypeSupplier = exports.deleteSupplier = exports.updateSupplier = exports.postSupplier = exports.getSuppliers = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/mensajesCliente/MensajesRespuestaCliente");
const supplier_service_1 = __importDefault(require("../services/supplier/supplier.service"));
//----------- PROVEEDORES--------------//
const suppliers_service = new supplier_service_1.default();
const getSuppliers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield suppliers_service.getSuppliers(id);
        if (Object.keys(result).length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
            return res.status(statusCode).json({ message: msg });
        }
        res.json(result);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.getSuppliers = getSuppliers;
const postSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield suppliers_service.addSupplier(body);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.postSupplier = postSupplier;
const updateSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        yield suppliers_service.updateSupplier(body, id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.updateSupplier = updateSupplier;
const deleteSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield suppliers_service.deleteSupplier(Number(id));
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.deleteSupplier = deleteSupplier;
//---------TIPO PROVEEDORES --------//
const getTypeSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield suppliers_service.getTypeSupplier();
        if (result.length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
            return res.status(statusCode).json({ message: msg });
        }
        res.json(result);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.getTypeSupplier = getTypeSupplier;
//------------ TIPO SERVICIO PROVEEDOR----------------//
const getTypeService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield suppliers_service.getTypeService();
        if (result.length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
            return res.status(statusCode).json({ message: msg });
        }
        res.json(result);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.getTypeService = getTypeService;
//---------------- TIPO DOCUMENTO----------------//
const getTypeDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield suppliers_service.getTypeDocument();
        if (result.length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
            return res.status(statusCode).json({ message: msg });
        }
        res.json(result);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.getTypeDocument = getTypeDocument;
//------------  ENTIDAD BANCARIA  ----------------//
const getBank = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield suppliers_service.getBanks();
        if (result.length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
            return res.status(statusCode).json({ message: msg });
        }
        res.json(result);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.getBank = getBank;
//# sourceMappingURL=supplier.controller.js.map