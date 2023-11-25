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
const direcciones_model_1 = __importDefault(require("../../models/Contacto/direcciones.model"));
class DireccionService {
    getDireccion(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const direccionResult = yield direcciones_model_1.default.findByPk(id);
            return direccionResult;
        });
    }
    addDireccion(body, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            yield direcciones_model_1.default.create(body, { transaction });
        });
    }
    updateDireccion(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield direcciones_model_1.default.update(body, {
                where: { id, estado: true },
            });
        });
    }
    deleteDireccion(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield direcciones_model_1.default.update({ estado: false }, { where: { id } });
        });
    }
}
exports.default = DireccionService;
//# sourceMappingURL=address.service.js.map