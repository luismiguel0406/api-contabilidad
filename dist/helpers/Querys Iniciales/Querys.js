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
exports.TiposItem = exports.Comprobantes = exports.CuentasContablesPadres = exports.Moneda = exports.TiposClientes = exports.TiposContactos = exports.TiposProveedores = void 0;
const tipoCliente_model_1 = __importDefault(require("../../models/Clientes/tipoCliente.model"));
const tipoContactos_model_1 = __importDefault(require("../../models/Contacto/tipoContactos.model"));
const CuentasContables_model_1 = __importDefault(require("../../models/Cuentas Contables/CuentasContables.model"));
const comprobante_model_1 = __importDefault(require("../../models/Facturacion/comprobante.model"));
const moneda_model_1 = __importDefault(require("../../models/Facturacion/moneda.model"));
const tipoItem_model_1 = __importDefault(require("../../models/Inventario/tipoItem.model"));
const tipoProveedores_model_1 = __importDefault(require("../../models/Proveedores/tipoProveedores.model"));
class TiposProveedores {
    // AGREGO TIPO AL INICIO DEL PROGRAMA //
    constructor() {
        this.tipoProveedoresArray = [
            {
                tipoProveedor: "LOCAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipoProveedor: "EXTRANJERO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipoProveedor: "INFORMAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTiposProveedores() {
        tipoProveedores_model_1.default.afterSync("CreaTiposProveedores", () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield tipoProveedores_model_1.default.bulkCreate(this.tipoProveedoresArray);
            }
            catch (error) {
                console.error(error, "Error insertando tipos proveedores");
            }
        }));
    }
}
exports.TiposProveedores = TiposProveedores;
class TiposContactos {
    constructor() {
        this.tipoContactosArray = [
            {
                tipoContacto: "CLIENTE",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipoContacto: "PROVEEDOR",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipoContacto: "PERSONAL",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTipoContactos() {
        tipoContactos_model_1.default.afterSync("createTipoContactos", () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield tipoContactos_model_1.default.bulkCreate(this.tipoContactosArray);
            }
            catch (error) {
                console.error(error, "Error insertando tipos contactos");
            }
        }));
    }
}
exports.TiposContactos = TiposContactos;
class TiposClientes {
    constructor() {
        this.tipoClientesArray = [
            {
                descripcion: "FORMAL",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "INFORMAL",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTipoClientes() {
        try {
            tipoCliente_model_1.default.afterSync("createTipoClientes", () => __awaiter(this, void 0, void 0, function* () {
                yield tipoCliente_model_1.default.bulkCreate(this.tipoClientesArray);
            }));
        }
        catch (error) {
            console.error(error, "Error insertando tipo Clientes");
        }
    }
}
exports.TiposClientes = TiposClientes;
class Moneda {
    constructor() {
        this.monedaArray = [
            {
                descripcion: "PESOS",
                simbolo: "RD$",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "DOLAR",
                simbolo: "US$",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarMonedas() {
        try {
            moneda_model_1.default.afterSync("createMonedas", () => __awaiter(this, void 0, void 0, function* () {
                yield moneda_model_1.default.bulkCreate(this.monedaArray);
            }));
        }
        catch (error) {
            console.error(error, "Error insertando Monedas");
        }
    }
}
exports.Moneda = Moneda;
// VER ID EMPRESA
class CuentasContablesPadres {
    constructor(empresaId) {
        this.CuentaContableArray = [
            {
                cuenta: "1",
                cuentaPadreId: null,
                descripcion: "ACTIVOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "2",
                cuentaPadreId: null,
                descripcion: "PASIVOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "3",
                cuentaPadreId: null,
                descripcion: "CAPITAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "4",
                cuentaPadreId: null,
                descripcion: "INGRESOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "5",
                cuentaPadreId: null,
                descripcion: "COSTOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "6",
                cuentaPadreId: null,
                descripcion: "GASTOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "7",
                cuentaPadreId: null,
                descripcion: "RESUMENES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "10",
                cuentaPadreId: 1,
                descripcion: "ACTIVOS CORRIENTES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "11",
                cuentaPadreId: 1,
                descripcion: "CUENTAS POR COBRAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "12",
                cuentaPadreId: 1,
                descripcion: "INVERSIONES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "13",
                cuentaPadreId: 1,
                descripcion: "ACTIVOS FIJOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "14",
                cuentaPadreId: 1,
                descripcion: "ACTIVOS DIRERIDOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "15",
                cuentaPadreId: 1,
                descripcion: "OTROS ACTIVOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "20",
                cuentaPadreId: 2,
                descripcion: "PASIVOS CORRIENTES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "200",
                cuentaPadreId: 2,
                descripcion: "SOBREGIRO BANCARIO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "201",
                cuentaPadreId: 2,
                descripcion: "CUENTAS POR PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "202",
                cuentaPadreId: 2,
                descripcion: "PRESTAMOS POR PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "203",
                cuentaPadreId: 2,
                descripcion: "IMPUESTOS SOBRE LA RENTA POR PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "204",
                cuentaPadreId: 2,
                descripcion: "DIVIDENDOS DECLARADOS POR PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "205",
                cuentaPadreId: 2,
                descripcion: "RETENCIONES Y ACUMULACIONES POR PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "60",
                cuentaPadreId: 6,
                descripcion: "GASTOS GENERALES Y ADMINISTRATIVOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "61",
                cuentaPadreId: 6,
                descripcion: "MANTENIMIENTOS MOBILIARIOS Y EQUIPO DE OFICINA",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "62",
                cuentaPadreId: 6,
                descripcion: "GASTOS FINANCIAMIENTOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
        ];
    }
    InsertarCuentasContablesPadre() {
        try {
            CuentasContables_model_1.default.afterSync("createCuentasContablesPadre", () => __awaiter(this, void 0, void 0, function* () {
                yield CuentasContables_model_1.default.bulkCreate(this.CuentaContableArray);
            }));
        }
        catch (error) {
            console.error(error, "Error insertando Cuentas Contables");
        }
    }
}
exports.CuentasContablesPadres = CuentasContablesPadres;
class Comprobantes {
    constructor() {
        this.comprobantesArray = [
            {
                tipo: "B01",
                descripcion: "FISCAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B02",
                descripcion: "CONSUMO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B04",
                descripcion: "NOTAS DE CREDITO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B11",
                descripcion: "COMPRAS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B12",
                descripcion: "REGISTRO UNICO DE INGRESOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B13",
                descripcion: "GASTOS MENORES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B14",
                descripcion: "REGIMEN ESPECIAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B15",
                descripcion: "GUBERNAMENTAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B16",
                descripcion: "EXPORTACIONES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B17",
                descripcion: "PAGOS AL EXTERIOR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "E-CF",
                descripcion: "ELECTRONICO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarComprobantes() {
        try {
            comprobante_model_1.default.afterSync("createComprobantes", () => __awaiter(this, void 0, void 0, function* () {
                yield comprobante_model_1.default.bulkCreate(this.comprobantesArray);
            }));
        }
        catch (error) {
            console.error(error, "Error insertando comprobantes");
        }
    }
}
exports.Comprobantes = Comprobantes;
class TiposItem {
    constructor() {
        this.tipoItemArray = [
            {
                descripcion: "BIENES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "SERVICIOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTipoItem() {
        try {
            tipoItem_model_1.default.afterSync("createTipoItem", () => __awaiter(this, void 0, void 0, function* () {
                yield tipoItem_model_1.default.bulkCreate(this.tipoItemArray);
            }));
        }
        catch (error) {
            console.error("Error insertando Tipos item");
        }
    }
}
exports.TiposItem = TiposItem;
//# sourceMappingURL=Querys.js.map