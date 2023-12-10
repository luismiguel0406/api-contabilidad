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
const suppliers_model_1 = __importDefault(require("../../models/suppliers/suppliers.model"));
const typeSupplier_model_1 = __importDefault(require("../../models/suppliers/typeSupplier.model"));
const typeService_model_1 = __importDefault(require("../../models/suppliers/typeService.model"));
const typeDocument_model_1 = __importDefault(require("../../models/suppliers/typeDocument.model"));
const banks_model_1 = __importDefault(require("../../models/suppliers/banks.model"));
class SupplierService {
    //-------- TIPO PROVEEDOR --------//
    getTypeSupplier() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield typeSupplier_model_1.default.findAll({
                where: { state: true },
            });
            return result;
        });
    }
    //--------- PROVEEDOR -----------//
    getSuppliers(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield suppliers_model_1.default.findAll({
                include: [
                    {
                        model: typeSupplier_model_1.default,
                        attributes: ["description"],
                        required: true,
                        where: { state: true },
                    },
                    {
                        model: typeDocument_model_1.default,
                        attributes: ["description"],
                        required: true,
                        where: { state: true },
                    },
                    {
                        model: typeService_model_1.default,
                        attributes: ["description"],
                        required: true,
                        where: { state: true },
                    },
                    {
                        model: banks_model_1.default,
                        attributes: ["description"],
                        required: true,
                        where: { state: true },
                    },
                    // {
                    //   model: addressModel,
                    //   attributes: ["districtId", "street", "sector", "buildingNumber"],
                    //   where: { typeContactId: TYPE_CONTACT_SUPPLIER, referenceId: id },
                    // },
                ],
                where: id === null ? { state: true } : { id, state: true },
            });
            return result;
        });
    }
    addSupplier(body, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield suppliers_model_1.default.create(body, { transaction });
            return result;
        });
    }
    updateSupplier(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield suppliers_model_1.default.update(body, { where: { id, state: false } });
        });
    }
    deleteSupplier(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield suppliers_model_1.default.update({ state: false }, { where: { id } });
        });
    }
    //------------ TIPO SERVICIO PROVEEDOR----------------//
    getTypeService() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield typeService_model_1.default.findAll({
                where: { state: true },
            });
            return result;
        });
    }
    //---------------- TIPO DOCUMENTO ---------------//
    getTypeDocument() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield typeDocument_model_1.default.findAll({
                where: { state: true },
            });
            return result;
        });
    }
    getBanks() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield banks_model_1.default.findAll({
                where: { state: true },
            });
            return result;
        });
    }
}
exports.default = SupplierService;
//# sourceMappingURL=supplier.service.js.map