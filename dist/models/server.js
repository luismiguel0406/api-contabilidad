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
const cuentas_routes_1 = __importDefault(require("../routes/cuentas.routes"));
const cors_1 = __importDefault(require("cors"));
const connectionDB_1 = __importDefault(require("../Database/connectionDB"));
require('dotenv').config();
/*INICIALIZO EL SERVIDOR*/
class Server {
    constructor() {
        this.apiPath = {
            CuentasPadre: "Api/CuentasPadre",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connectionDB_1.default.authenticate();
                console.log('Database CACTUS Online');
            }
            catch (error) {
                console.log(`Error${error}`);
            }
        });
    }
    listen() {
        /*https.createServer({}, this.app).listen(this.port, () => {
          console.log(`Server con Https escuchando en el puerto ${this.port}`);
        });*/
        this.app.listen(this.port, () => {
            console.log(`Server escuchando en el puerto ${this.port}`);
        });
    }
    /* RUTAS PARA CONSULTA */
    routes() {
        this.app.use(this.apiPath.CuentasPadre, cuentas_routes_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map