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
exports.getTipoDocumento = exports.getTipoServicio = exports.getTipoProveedor = exports.deleteProveedor = exports.updateProveedores = exports.postProveedor = exports.getProveedores = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/mensajesCliente/MensajesRespuestaCliente");
const proveedor_service_1 = __importDefault(require("../services/proveedor/proveedor.service"));
//----------- PROVEEDORES--------------//
const proveedorers_service = new proveedor_service_1.default();
const getProveedores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const ProveedoresResult = yield proveedorers_service.getProveedores(id);
        if (!ProveedoresResult) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ message: msg });
        }
        return res.json({ Proveedores: ProveedoresResult });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.getProveedores = getProveedores;
const postProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield proveedorers_service.addProveedor(body);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.postProveedor = postProveedor;
const updateProveedores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        yield proveedorers_service.updateProveedor(body, id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.updateProveedores = updateProveedores;
const deleteProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield proveedorers_service.deleteProveedor(Number(id));
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.deleteProveedor = deleteProveedor;
//---------TIPO PROVEEDORES --------//
const getTipoProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const TipoProveedorResult = yield proveedorers_service.getTipoProveedor();
        if (TipoProveedorResult === null) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ message: msg });
        }
        res.json(TipoProveedorResult);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.getTipoProveedor = getTipoProveedor;
//------------ TIPO SERVICIO PROVEEDOR----------------//
const getTipoServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield proveedorers_service.getTipoServicio();
        if (result.length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ message: msg });
        }
        res.json(result);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.getTipoServicio = getTipoServicio;
const getTipoDocumento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield proveedorers_service.getTipoDocumento();
        if (result.length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ message: msg });
        }
        res.json(result);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ message: msg, error });
    }
});
exports.getTipoDocumento = getTipoDocumento;
//# sourceMappingURL=proveedores.controller.js.map