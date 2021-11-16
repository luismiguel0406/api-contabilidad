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
const express_1 = __importDefault(require("express"));
const cuentas_route_1 = __importDefault(require("./routes/Cuentas Contables/cuentasPadre/cuentas.route"));
const cuentas_route_2 = __importDefault(require("./routes/Cuentas Contables/cuentasHijas/cuentas.route"));
const moneda_route_1 = __importDefault(require("./routes/Facturacion/moneda.route"));
const empresa_route_1 = __importDefault(require("./routes/Empresa/empresa.route"));
const clientes_route_1 = __importDefault(require("./routes/Clientes/clientes.route"));
const contactos_route_1 = __importDefault(require("./routes/Contactos/contactos.route"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./config/index"));
const connectionDB_1 = __importDefault(require("./Database/connectionDB"));
const helmet_1 = __importDefault(require("helmet"));
/*INICIALIZO EL SERVIDOR*/
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = index_1.default.PORT || '';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connectionDB_1.default.authenticate();
                //await db.sync({force:true});
                console.log("Database CACTUS Online");
            }
            catch (error) {
                console.log(`Error${error}`);
            }
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server escuchando en el puerto ${this.port}`);
        });
    }
    /* RUTAS PARA CONSULTA */
    routes() {
        this.app.use(cuentas_route_1.default);
        this.app.use(cuentas_route_2.default);
        this.app.use(moneda_route_1.default);
        this.app.use(empresa_route_1.default);
        this.app.use(clientes_route_1.default);
        this.app.use(contactos_route_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map