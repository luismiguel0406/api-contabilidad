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
exports.getMovementAccount = exports.postMovementAccount = exports.getAccountTypes = exports.deleteAccountingGroups = exports.updateAccountingGroups = exports.getAccountingGroups = exports.postAccountingGroups = exports.addAccountingAccount = exports.getAccountingAccounts = void 0;
const MensajesRespuestaCliente_1 = require("../helpers/mensajesCliente/MensajesRespuestaCliente");
const accountingAccount_service_1 = __importDefault(require("../services/accounts/accountingAccount.service"));
const accountingAccount_service = new accountingAccount_service_1.default();
//--------- CUENTAS CONTABLES ----------//
const getAccountingAccounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { companyId } = req;
        const accounts = yield accountingAccount_service.getAccountingAccounts(id, companyId);
        if (Object.entries(accounts).length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        res.json({ accounts });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        return res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getAccountingAccounts = getAccountingAccounts;
const addAccountingAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield accountingAccount_service.addAccountingAccount(body);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.addAccountingAccount = addAccountingAccount;
//CODES HERE
//---------GRUPOS CUENTAS CONTABLES ----------//
const postAccountingGroups = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield accountingAccount_service.addAccountingGroups(body);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postAccountingGroups = postAccountingGroups;
const getAccountingGroups = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield accountingAccount_service.getAccountingGroups(id);
        if (Object.entries(result).length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        res.json({ accountingGroups: result });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getAccountingGroups = getAccountingGroups;
const updateAccountingGroups = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        yield accountingAccount_service.updateAccountingGroups(body, id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.Success;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.updateAccountingGroups = updateAccountingGroups;
const deleteAccountingGroups = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield accountingAccount_service.deleteAccountingGroups(id);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.noContent;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.deleteAccountingGroups = deleteAccountingGroups;
//---------TIPOS CUENTAS CONTABLES ----------//
const getAccountTypes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield accountingAccount_service.getAccountType(id);
        if (Object.entries(result).length === 0) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        res.json({ accountTypes: result });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getAccountTypes = getAccountTypes;
//------------MOVIMIENTO DE CUENTAS CONTABLES---------------//
const postMovementAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield accountingAccount_service.addMovementAccounts(body);
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.created;
        res.status(statusCode).json({ Message: msg });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.postMovementAccount = postMovementAccount;
const getMovementAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, startDate, endDate } = req.params;
        let accountingAccountId = Number(id);
        const result = yield accountingAccount_service.getMovementAccounts(accountingAccountId, startDate, endDate);
        if (!result) {
            const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.notFound;
            return res.status(statusCode).json({ Message: msg });
        }
        res.json({ movementAccount: result });
    }
    catch (error) {
        const { statusCode, msg } = MensajesRespuestaCliente_1.MsgRespuesta.badRequest;
        res.status(statusCode).json({ Message: msg, error });
    }
});
exports.getMovementAccount = getMovementAccount;
//# sourceMappingURL=accountingAccounts.js.map