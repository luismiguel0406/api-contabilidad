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
const Querys_1 = require("./helpers/Querys Iniciales/Querys");
const accountingAccounts_route_1 = __importDefault(require("./routes/accounts/accountingAccounts.route"));
const currency_route_1 = __importDefault(require("./routes/facturacion/currency.route"));
const comprobante_route_1 = __importDefault(require("./routes/facturacion/comprobante.route"));
const empresa_route_1 = __importDefault(require("./routes/empresa/empresa.route"));
const clientes_route_1 = __importDefault(require("./routes/Clientes/clientes.route"));
const territories_route_1 = __importDefault(require("./routes/Contactos/territories.route"));
const suppliers_route_1 = __importDefault(require("./routes/suppliers/suppliers.route"));
const Item_route_1 = __importDefault(require("./routes/Inventario/Item.route"));
const tipoVenta_route_1 = __importDefault(require("./routes/facturacion/tipoVenta.route"));
const impuestos_route_1 = __importDefault(require("./routes/facturacion/impuestos.route"));
const medioDePagp_route_1 = __importDefault(require("./routes/facturacion/medioDePagp.route"));
const factura_route_1 = __importDefault(require("./routes/facturacion/factura.route"));
const user_route_1 = __importDefault(require("./routes/user/user.route"));
const tipoGastos_route_1 = __importDefault(require("./routes/facturacion/tipoGastos.route"));
const facturasPorPagar_route_1 = __importDefault(require("./routes/facturasPorPagar/facturasPorPagar.route"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./config/index"));
const database_1 = __importDefault(require("./database"));
const helmet_1 = __importDefault(require("helmet"));
/*INICIALIZO EL SERVIDOR*/
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = index_1.default.PORT || "";
        this.dbConnection();
        // this.InicioNuevaEmpresa();
        // this.InicioAplicacion();
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
                yield database_1.default.authenticate();
                // await sequelizeConnection.sync();
                console.log("Database CACTUS online.");
            }
            catch (error) {
                console.log(`Error ${error}`);
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
        this.app.use(accountingAccounts_route_1.default);
        this.app.use(currency_route_1.default);
        this.app.use(comprobante_route_1.default);
        this.app.use(empresa_route_1.default);
        this.app.use(clientes_route_1.default);
        this.app.use(territories_route_1.default);
        this.app.use(suppliers_route_1.default);
        this.app.use(Item_route_1.default);
        this.app.use(tipoVenta_route_1.default);
        this.app.use(impuestos_route_1.default);
        this.app.use(medioDePagp_route_1.default);
        this.app.use(factura_route_1.default);
        this.app.use(user_route_1.default);
        this.app.use(tipoGastos_route_1.default);
        this.app.use(facturasPorPagar_route_1.default);
        this.app.use("*", (req, res) => {
            res.status(404).json({ Message: "No existe la ruta que colocaste" });
        });
    }
    InicioAplicacion() {
        try {
            const empresa = new Querys_1.Empresa();
            const tipoClientes = new Querys_1.TiposClientes();
            const tipoContacto = new Querys_1.TiposContactos();
            const tipoProveedor = new Querys_1.TiposProveedores();
            const moneda = new Querys_1.Moneda();
            const comprobantes = new Querys_1.TiposComprobantes();
            const tipoItem = new Querys_1.TiposItem();
            const tipoVenta = new Querys_1.TipoVenta();
            const impuestos = new Querys_1.Impuestos();
            const mediosDePago = new Querys_1.MediosDePago();
            const Perfil = new Querys_1.Perfiles();
            //const tipoGasto = new Tipogasto();
            //const tipoFacturasPorPagar = new TipoFacturasPorPagar();
            //const tipoCuentasContables = new TipoCuentasContables();
            //const grupoCuentasContables = new GrupoCuentasContables();
            //const tipoEfecto = new TipoEfecto();
            //const cuentasContables = new CuentasContables();
            //const tipoMovimiento = new TipoMovimiento();
            const transaccionesComerciales = new Querys_1.TransaccionesComerciales();
            empresa.CrearEmpresa();
            tipoProveedor.InsertarTiposProveedores();
            tipoClientes.InsertarTipoClientes();
            tipoContacto.InsertarTipoContactos();
            moneda.InsertarMonedas();
            comprobantes.InsertarComprobantes();
            tipoItem.InsertarTipoItem();
            tipoVenta.InsertarTipoVentas();
            impuestos.InsertarImpuestos();
            mediosDePago.InsertarMediosDePago();
            Perfil.InsertarPerfiles();
            //tipoGasto.InsertarTipoGasto();
            //tipoFacturasPorPagar.InsertarTipoFactura();
            //tipoCuentasContables.InsertarTipoCuentasContables();
            //grupoCuentasContables.InsertarGruposCuentasContable();
            //tipoEfecto.insertarTipoEfecto();
            //tipoMovimiento.InsertarTipoMovimiento();
            //cuentasContables.InsertarCuentas();
            transaccionesComerciales.InsertarTransaccionesComerciales();
        }
        catch (error) {
            console.error(`Error Metodo Inicio Aplicacion, ${error}`);
        }
    }
    InicioNuevaEmpresa() {
        try {
            console.info("COLOCAR HOOK DE LA EMPRESA AQUI!");
        }
        catch (error) {
            console.error(`Error Metodo InicioNuevaEmpresa, ${error}`);
        }
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map