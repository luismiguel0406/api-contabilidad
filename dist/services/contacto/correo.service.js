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
const Correos_model_1 = __importDefault(require("../../models/Contacto/Correos.model"));
class CorreoService {
    getCorreos(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const correo = id === null
                ? yield Correos_model_1.default.findAll({ where: { estado: "1" } })
                : yield Correos_model_1.default.findOne({ where: { id, estado: "1" } });
            return correo;
        });
    }
    AddCorreo(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Correos_model_1.default.create(body);
        });
    }
    deleteCorreo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Correos_model_1.default.update({ estado: "0" }, {
                where: {
                    id,
                },
            });
        });
    }
    updateCorreo(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Correos_model_1.default.update(body, {
                where: {
                    id,
                    estado: "1",
                },
            });
        });
    }
}
exports.default = CorreoService;
//# sourceMappingURL=correo.service.js.map