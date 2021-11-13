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
const tiposClientes_model_1 = __importDefault(require("../../models/Clientes/tiposClientes.model"));
class ClientesService {
    //----------------TIPO CLIENTE------------------//
    getTipoCliente(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoClienteResult = id === null
                ? yield tiposClientes_model_1.default.findAll({ where: { estado: "1" } })
                : yield tiposClientes_model_1.default.findOne({ where: { id, estado: "1" } });
            return tipoClienteResult;
        });
    }
    ;
    addTipoCliente(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Cliente_model_1.default.create(body);
        });
    }
    ;
    updateTipoCliente(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Cliente_model_1.default.update(body, { where: { id }
            });
        });
    }
    ;
    deleteTipoCliente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Cliente_model_1.default.update({ estadao: "0" }, { where: { id }
            });
        });
    }
    ;
    //--------------------CLIENTES--------------------------//
    getClientes(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientesResult = id === null
                ? yield Cliente_model_1.default.findAll({ where: { estado: "1" } })
                : yield Cliente_model_1.default.findOne({ where: { id, estado: "1" } });
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
            yield Cliente_model_1.default.update(body, { where: { id, estado: "1" } });
        });
    }
    ;
    deleteCliente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Cliente_model_1.default.update({ estado: "0" }, { where: { id } });
        });
    }
    ;
}
exports.default = ClientesService;
//# sourceMappingURL=Clientes.service.js.map