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
exports.getItemType = exports.deleteItem = exports.updateItem = exports.postItem = exports.getItem = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/mensajesCliente/MensajesRespuestaCliente");
const item_service_1 = __importDefault(require("../services/inventario/item.service"));
const item_service = new item_service_1.default();
//------------------ ITEM ----------------------//
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield item_service.getItem(id);
        if (result === null) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
            return res.status(statusCode).json({ Message: msg });
        }
        const { statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json(result);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getItem = getItem;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield item_service.addItem(body);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postItem = postItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        yield item_service.updateItem(body, id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.updateItem = updateItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield item_service.deleteItem(id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.deleteItem = deleteItem;
//----------------- TIPO ITEM --------------------//
const getItemType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield item_service.getItemType(id);
        if (result === null) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
            return res.status(statusCode).json({ Message: msg });
        }
        const { statusCode } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json(result);
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getItemType = getItemType;
//# sourceMappingURL=item.controller.js.map