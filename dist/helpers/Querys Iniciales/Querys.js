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
exports.MediosDePago = exports.Impuestos = exports.TipoVenta = exports.TiposItem = exports.TiposComprobantes = exports.CuentasContablesPadres = exports.Moneda = exports.TiposClientes = exports.TiposContactos = exports.TiposProveedores = void 0;
const tipoCliente_model_1 = __importDefault(require("../../models/Clientes/tipoCliente.model"));
const tipoContactos_model_1 = __importDefault(require("../../models/Contacto/tipoContactos.model"));
const CuentasContables_model_1 = __importDefault(require("../../models/Cuentas Contables/CuentasContables.model"));
const tipoComprobante_model_1 = __importDefault(require("../../models/Facturacion/comprobantes/tipoComprobante.model"));
const moneda_model_1 = __importDefault(require("../../models/Facturacion/moneda/moneda.model"));
const tipoItem_model_1 = __importDefault(require("../../models/Inventario/tipoItem.model"));
const tipoProveedores_model_1 = __importDefault(require("../../models/Proveedores/tipoProveedores.model"));
const tipoVentas_model_1 = __importDefault(require("../../models/Facturacion/ventas/tipoVentas.model"));
const impuestos_model_1 = __importDefault(require("../../models/Facturacion/impuestos/impuestos.model"));
const medioDePago_model_1 = __importDefault(require("../../models/Facturacion/medioDePago/medioDePago.model"));
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
                descripcion: "CLIENTE",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "PROVEEDOR",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "PERSONAL",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "OTROS",
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
                cuenta: "0",
                cuentaPadreId: 1,
                descripcion: "RAIZ",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                empresaId,
                monedaId: 1,
            },
            {
                cuenta: "1",
                cuentaPadreId: 1,
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
                cuentaPadreId: 1,
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
                cuentaPadreId: 1,
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
                cuentaPadreId: 1,
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
                cuentaPadreId: 1,
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
                cuentaPadreId: 1,
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
                cuentaPadreId: 1,
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
                cuentaPadreId: 2,
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
                cuentaPadreId: 2,
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
                cuentaPadreId: 2,
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
                cuentaPadreId: 2,
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
                cuentaPadreId: 2,
                descripcion: "ACTIVOS DIFERIDOS",
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
                cuentaPadreId: 2,
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
                cuentaPadreId: 3,
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
                cuentaPadreId: 3,
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
                cuentaPadreId: 3,
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
                cuentaPadreId: 3,
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
                cuentaPadreId: 3,
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
                cuentaPadreId: 3,
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
                cuentaPadreId: 3,
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
                cuentaPadreId: 7,
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
                cuentaPadreId: 7,
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
                cuentaPadreId: 7,
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
class TiposComprobantes {
    constructor() {
        this.tipoComprobantesArray = [
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
            tipoComprobante_model_1.default.afterSync("createComprobantes", () => __awaiter(this, void 0, void 0, function* () {
                yield tipoComprobante_model_1.default.bulkCreate(this.tipoComprobantesArray);
            }));
        }
        catch (error) {
            console.error(error, "Error insertando comprobantes");
        }
    }
}
exports.TiposComprobantes = TiposComprobantes;
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
class TipoVenta {
    constructor() {
        this.tipoVentaArray = [
            {
                descripcion: "VENTAS DE BIENES CON VALOR FISCAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 1,
            },
            {
                descripcion: "VENTAS DE BIENES DE CONSUMO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 1,
            },
            {
                descripcion: "VENTAS SERVICIOS COMPROBANTE",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 2,
            },
            {
                descripcion: "VENTAS SERVICIO CONSUMO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 2,
            },
            {
                descripcion: "VENTAS AL ESTADO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 2,
            },
            {
                descripcion: "VENTAS DE REGIMENES ESPECIALES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 2,
            },
            {
                descripcion: "VENTAS AL EXTERIOR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 2,
            },
        ];
    }
    InsertarTipoVentas() {
        try {
            tipoVentas_model_1.default.afterSync("createTipoVenta", () => __awaiter(this, void 0, void 0, function* () {
                yield tipoItem_model_1.default.bulkCreate(this.tipoVentaArray);
            }));
        }
        catch (error) {
            console.error("Error insertando Tipos venta");
        }
    }
}
exports.TipoVenta = TipoVenta;
class Impuestos {
    constructor() {
        this.impuestoArray = [
            {
                nombre: "ITBIS FACTURADO",
                alias: "ITBIS",
                porcentaje: 0.18,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "IMPUESTO SELECTIVO AL CONSUMO",
                alias: "ISC",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "ITBIS RETENIDO",
                alias: "ITB RET",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "ITBIS SUJETO A PROPORCIONALIDAD",
                alias: "ISP",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "ITBIS LLEVADO AL COSTO",
                alias: "ILC",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "ITBIS POR ADELANTAR",
                alias: "ITBPA",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "ITBIS COMPRAS",
                alias: "ITBC",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "IMPUESTOS SOBRE LA RENTA",
                alias: "ISR",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "PROPINA LEGAL",
                alias: "PL",
                porcentaje: 0.1,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "OTROS/TASA",
                alias: "OT",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "CDT",
                alias: "CDT",
                porcentaje: 0.02,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarImpuestos() {
        try {
            impuestos_model_1.default.afterSync("createImpuestos", () => __awaiter(this, void 0, void 0, function* () {
                yield impuestos_model_1.default.bulkCreate(this.impuestoArray);
            }));
        }
        catch (error) {
            console.error("Error insertando impuestos");
        }
    }
}
exports.Impuestos = Impuestos;
class MediosDePago {
    constructor() {
        this.medioDePagoArray = [
            {
                descripcion: "EFECTIVO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "TARJETA",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarMediosDePago() {
        try {
            medioDePago_model_1.default.afterSync("createMediosDePago", () => __awaiter(this, void 0, void 0, function* () {
                medioDePago_model_1.default.bulkCreate(this.medioDePagoArray);
            }));
        }
        catch (error) {
            console.error("Error insertando medios de pago");
        }
    }
}
exports.MediosDePago = MediosDePago;
//# sourceMappingURL=Querys.js.map