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
const tipoContactos_model_1 = __importDefault(require("../../models/Contacto/tipoContactos.model"));
class TipoContactosService {
    getTipoContactos(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoContacto = id === null
                ? yield tipoContactos_model_1.default.findAll({ where: { estado: "1" } })
                : yield tipoContactos_model_1.default.findOne({ where: { id, estado: "1" } });
            return tipoContacto;
        });
    }
    AddTipoContacto(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoContactos_model_1.default.create(body);
        });
    }
    deleteTipoContacto(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoContactos_model_1.default.update({ estado: "0" }, {
                where: {
                    id,
                },
            });
        });
    }
    updateTipoContacto(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoContactos_model_1.default.update(body, {
                where: {
                    id,
                    estado: "1",
                },
            });
        });
    }
}
exports.default = TipoContactosService;
//# sourceMappingURL=tipoContacto.service.js.map