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
const Proveedores_model_1 = __importDefault(require("../../models/Proveedores/Proveedores.model"));
const tipoProveedores_model_1 = __importDefault(require("../../models/Proveedores/tipoProveedores.model"));
const tipoServicio_model_1 = __importDefault(require("../../models/Proveedores/tipoServicio.model"));
const tipoDocumento_model_1 = __importDefault(require("../../models/Proveedores/tipoDocumento.model"));
const entidadBancaria_model_1 = __importDefault(require("../../models/Proveedores/entidadBancaria.model"));
class ProveedorService {
    //-------- TIPO PROVEEDOR --------//
    getTipoProveedor() {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoProveedorResult = yield tipoProveedores_model_1.default.findAll({
                where: { estado: true },
            });
            return tipoProveedorResult;
        });
    }
    //--------- PROVEEDOR -----------//
    getProveedores(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const proveedorResult = id === null
                ? yield Proveedores_model_1.default.findAll({ where: { estado: true } })
                : yield Proveedores_model_1.default.findOne({ where: { id, estado: true } });
            return proveedorResult;
        });
    }
    addProveedor(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Proveedores_model_1.default.create(body);
        });
    }
    updateProveedor(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Proveedores_model_1.default.update(body, { where: { id, estado: false } });
        });
    }
    deleteProveedor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Proveedores_model_1.default.update({ estado: false }, { where: { id } });
        });
    }
    //------------ TIPO SERVICIO PROVEEDOR----------------//
    getTipoServicio() {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoServicio = yield tipoServicio_model_1.default.findAll({
                where: { estado: true },
            });
            return tipoServicio;
        });
    }
    //---------------- TIPO DOCUMENTO ---------------//
    getTipoDocumento() {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoDocumento = yield tipoDocumento_model_1.default.findAll({
                where: { estado: true },
            });
            return tipoDocumento;
        });
    }
    getEntidadBancaria() {
        return __awaiter(this, void 0, void 0, function* () {
            const entidadBancaria = yield entidadBancaria_model_1.default.findAll({
                where: { estado: true },
            });
            return entidadBancaria;
        });
    }
}
exports.default = ProveedorService;
//# sourceMappingURL=proveedor.service.js.map