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
const sequelize_1 = require("sequelize");
const accountType_model_1 = __importDefault(require("../../models/AccountingAccount/accountType.model"));
const accountingAccount_model_1 = __importDefault(require("../../models/AccountingAccount/accountingAccount.model"));
const accountingGroup_model_1 = __importDefault(require("../../models/AccountingAccount/accountingGroup.model"));
const movementAccount_model_1 = __importDefault(require("../../models/AccountingAccount/movementAccount.model"));
const effectType_model_1 = __importDefault(require("../../models/AccountingAccount/effectType.model"));
const currency_model_1 = __importDefault(require("../../models/Facturacion/currency/currency.model"));
class AccountingAccountService {
    getAccountingAccounts(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = id === null
                ? yield accountingAccount_model_1.default.findAll({
                    include: [
                        {
                            model: accountingGroup_model_1.default,
                            attributes: ["description", "accountNumber", "accountTypeId"],
                            required: true,
                            include: [
                                {
                                    model: accountType_model_1.default,
                                    attributes: ["description"],
                                    required: true,
                                },
                            ],
                        },
                        {
                            model: currency_model_1.default,
                            attributes: ["description"],
                            required: true,
                        },
                    ],
                    where: { state: true },
                })
                : yield accountingAccount_model_1.default.findOne({
                    include: [
                        {
                            model: accountingGroup_model_1.default,
                            attributes: ["description", "accountTypeId"],
                            required: true,
                            include: [
                                {
                                    model: accountType_model_1.default,
                                    attributes: ["id", "description"],
                                    required: true,
                                },
                            ],
                        },
                    ],
                    where: { id, state: true },
                });
            return result;
        });
    }
    addAccountingAccount(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield accountingAccount_model_1.default.create(body);
        });
    }
    updateAccountingAccount(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield accountingAccount_model_1.default.update(body, { where: { id, state: true } });
        });
    }
    deleteAcountingAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield accountingAccount_model_1.default.update({ state: false }, { where: { id } });
        });
    }
    //-------------GRUPO CUENTAS ---------------//
    getAccountingGroups(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = id === null
                ? yield accountingGroup_model_1.default.findAll({
                    where: { state: true },
                    order: ["accountNumber"],
                })
                : yield accountingGroup_model_1.default.findOne({
                    where: { id, state: true },
                });
            return result;
        });
    }
    addAccountingGroups(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield accountingGroup_model_1.default.create(body);
        });
    }
    deleteAccountingGroups(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield accountingGroup_model_1.default.update({ state: false }, { where: { id } });
        });
    }
    updateAccountingGroups(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield accountingGroup_model_1.default.update(body, { where: { id, state: true } });
        });
    }
    //-------------TIPO CUENTAS ---------------//
    getAccountType(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = id === null
                ? yield accountType_model_1.default.findAll({
                    attributes: ["id", "description", "state"],
                    where: { state: true },
                })
                : yield accountingGroup_model_1.default.findOne({
                    attributes: ["id", "description", "state"],
                    where: { id, state: true },
                });
            return result;
        });
    }
    addAccountType(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield accountType_model_1.default.create(body);
        });
    }
    updateAccountType(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield accountType_model_1.default.update(body, { where: { id, state: true } });
        });
    }
    deleteAccountType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield accountType_model_1.default.update({ state: false }, { where: { id } });
        });
    }
    //--------------MOVIMIENTO CUENTAS CONTABLES-------------//
    addMovementAccounts(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield movementAccount_model_1.default.create(body);
        });
    }
    getMovementAccounts(accountingAccountId = 0, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield movementAccount_model_1.default.findAll({
                include: [
                    {
                        model: accountingAccount_model_1.default,
                        required: true,
                        attributes: ["description", ["accountNumber", "account"]],
                        where: { state: true },
                    },
                    {
                        model: effectType_model_1.default,
                        required: true,
                        attributes: ["description"],
                        where: { state: true },
                    },
                ],
                where: accountingAccountId === 0
                    ? {
                        state: true,
                        createdAt: { [sequelize_1.Op.between]: [startDate, endDate] },
                    }
                    : {
                        accountingAccountId,
                        state: true,
                        createdAt: { [sequelize_1.Op.between]: [startDate, endDate] },
                    },
            });
            return result;
        });
    }
}
exports.default = AccountingAccountService;
//# sourceMappingURL=accountingAccount.service.js.map