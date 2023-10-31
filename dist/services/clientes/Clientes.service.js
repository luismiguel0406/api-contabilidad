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
const Cliente_model_1 = __importDefault(require("../../models/Clientes/Cliente.model"));
const tipoCliente_model_1 = __importDefault(require("../../models/Clientes/tipoCliente.model"));
class ClientesService {
    //----------------TIPO CLIENTE------------------//
    getTipoCliente(id = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoClienteResult = id === 0
                ? yield tipoCliente_model_1.default.findAll({ where: { estado: true } })
                : yield tipoCliente_model_1.default.findOne({ where: { id, estado: true } });
            return tipoClienteResult;
        });
    }
    ;
    addTipoCliente(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoCliente_model_1.default.create(body);
        });
    }
    ;
    updateTipoCliente(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoCliente_model_1.default.update(body, { where: { id }
            });
        });
    }
    ;
    deleteTipoCliente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield tipoCliente_model_1.default.update({ estado: false }, { where: { id }
            });
        });
    }
    ;
    //--------------------CLIENTES--------------------------//
    getClientes(id = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientesResult = id === 0
                ? yield Cliente_model_1.default.findAll({ where: { estado: true } })
                : yield Cliente_model_1.default.findOne({ where: { id, estado: true } });
            return clientesResult;
        });
    }
    ;
    addCliente(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Cliente_model_1.default.create(body);
        });
    }
    ;
    updateCliente(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Cliente_model_1.default.update(body, { where: { id, estado: true } });
        });
    }
    ;
    deleteCliente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Cliente_model_1.default.update({ estado: false }, { where: { id } });
        });
    }
    ;
}
exports.default = ClientesService;
//# sourceMappingURL=Clientes.service.js.map