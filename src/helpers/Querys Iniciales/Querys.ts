import { ITipoCliente } from "../../interfaces/cliente.interface";
import { ITipoComprobante } from "../../interfaces/comprobante.interface";
import { ItipoContacto } from "../../interfaces/contactos.interface";
import {
  ICuentaContable,
  IGrupoCuentaContable,
  ITipoCuentaContable,
} from "../../interfaces/cuentaContable.interface";
import { IMoneda } from "../../interfaces/moneda.interface";
import { ITipoPoveedor } from "../../interfaces/proveedor.interface";
import { ITipoItem } from "../../interfaces/Item.interface";
import { ITipoVentas } from "../../interfaces/tipoVentas.interface";
import tipoCliente from "../../models/Clientes/tipoCliente.model";
import tiposContactos from "../../models/Contacto/tipoContactos.model";
import grupoCuentasContables from "../../models/Cuentas Contables/grupoCuentasContables.model";
import tipoComprobantes from "../../models/Facturacion/comprobantes/tipoComprobante.model";
import moneda from "../../models/Facturacion/moneda/moneda.model";
import tiposItem from "../../models/Inventario/tipoItem.model";
import tipoProveedor from "../../models/Proveedores/tipoProveedores.model";
import tiposVenta from "../../models/Facturacion/ventas/tipoVentas.model";
import { IImpuestos } from "../../interfaces/impuestos.interface";
import impuestos from "../../models/Facturacion/impuestos/impuestos.model";
import { IMedioDePago } from "../../interfaces/medioDePago.interface";
import mediosDePago from "../../models/Facturacion/medioDePago/medioDePago.model";
import { IPerfil } from "../../interfaces/perfil.interface";
import perfil from "../../models/Perfiles/perfil.model";
import { ITipoGasto } from "../../interfaces/gasto.interface";
import tipoGasto from "../../models/Facturacion/Facturas por pagar/Gastos/gastos.model";
import { ITipoFacturasPorPagar } from "../../interfaces/facturasPorPagar.interface";
import tipoFacturasPorPagar from "../../models/Facturacion/Facturas por pagar/tiposFacturasPorPagar/tiposFacturasPorPagar.model";
import tiposCuentaContable from "../../models/Cuentas Contables/tipoCuentaContable.model";
import { ITransaccionComercial } from "interfaces/TransaccionesComerciales.interface";
import transaccionesComerciales from "../../models/TransaccionesComerciales/TransaccionesComerciales.model";
import { IEmpresa } from "interfaces/empresa.interface";
import empresas from "../../models/Empresa/empresa.model";
import cuentasContables from "../../models/Cuentas Contables/cuentasContables.model";
import tipoMovimiento from "../../models/Cuentas Contables/tipoMovimiento.model";

export class Empresa {
  private _empresa: IEmpresa;
  constructor() {
    this._empresa = {
      nombre: "FRUTAS y POSTRES S.A.",
      alias: "FSA",
      rnc: "1-547896-89",
      sucursalId: 1,
      estado: true,
      planId: 1,
      createdAt: new Date(),
      updatedAt: null,
      direccion: "CALLE LAS HOJAS EDIFICIO ALMENDRA #4/ SANTO DOMINGO ESTE",
      telefono: "809-123-4567",
      correo: "HOJAS@GMAIL.COM",
      usuario: "SA",
      terminal: "SA",
    };
  }
  CrearEmpresa() {
    try {
      empresas.afterSync("createEmpresa", async () => {
        await empresas.create(this._empresa);
      });
    } catch (error) {
      console.error(`Error al crear empresa, ${error}`);
    }
  }
}
export class TiposProveedores {
  private tipoProveedoresArray: Array<ITipoPoveedor>;

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
    tipoProveedor.afterSync("CreaTiposProveedores", async () => {
      try {
        await tipoProveedor.bulkCreate(this.tipoProveedoresArray);
      } catch (error) {
        console.error(`Error insertando tipos proveedores, ${error}`);
      }
    });
  }
}

export class TiposContactos {
  private tipoContactosArray: Array<ItipoContacto>;

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
    tiposContactos.afterSync("createTipoContactos", async () => {
      try {
        await tiposContactos.bulkCreate(this.tipoContactosArray);
      } catch (error) {
        console.error(`Error insertando tipos contactos, ${error}`);
      }
    });
  }
}

export class TiposClientes {
  private tipoClientesArray: Array<ITipoCliente>;

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
      tipoCliente.afterSync("createTipoClientes", async () => {
        await tipoCliente.bulkCreate(this.tipoClientesArray);
      });
    } catch (error) {
      console.error(`Error insertando tipo Clientes, ${error}`);
    }
  }
}

export class Moneda {
  private monedaArray: Array<IMoneda>;

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
      moneda.afterSync("createMonedas", async () => {
        await moneda.bulkCreate(this.monedaArray);
      });
    } catch (error) {
      console.error(`Error insertando Monedas, ${error}`);
    }
  }
}

export class GrupoCuentasContables {
  private grupoCuentaContableArray: Array<IGrupoCuentaContable>;

  constructor() {
    this.grupoCuentaContableArray = [
      {
        cuenta: "10",
        descripcion: "ACTIVOS CORRIENTES",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 1,
        monedaId: 1,
      },
      {
        cuenta: "11",
        descripcion: "CUENTAS POR COBRAR",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 1,
        monedaId: 1,
      },
      {
        cuenta: "12",
        descripcion: "INVERSIONES",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 1,
        monedaId: 1,
      },
      {
        cuenta: "13",
        descripcion: "ACTIVOS FIJOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 1,
        monedaId: 1,
      },
      {
        cuenta: "14",
        descripcion: "ACTIVOS DIFERIDOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 1,
        monedaId: 1,
      },
      {
        cuenta: "15",
        descripcion: "OTROS ACTIVOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 1,
        monedaId: 1,
      },
      {
        cuenta: "20",
        descripcion: "PASIVOS CORRIENTES",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 2,
        monedaId: 1,
      },
      {
        cuenta: "200",
        descripcion: "SOBREGIRO BANCARIO",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 2,
        monedaId: 1,
      },
      {
        cuenta: "201",
        descripcion: "CUENTAS POR PAGAR",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 2,
        monedaId: 1,
      },
      {
        cuenta: "202",
        descripcion: "PRESTAMOS POR PAGAR",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 2,
        monedaId: 1,
      },
      {
        cuenta: "203",
        descripcion: "IMPUESTOS SOBRE LA RENTA POR PAGAR",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 2,
        monedaId: 1,
      },
      {
        cuenta: "204",
        descripcion: "DIVIDENDOS DECLARADOS POR PAGAR",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 2,
        monedaId: 1,
      },
      {
        cuenta: "205",
        descripcion: "RETENCIONES Y ACUMULACIONES POR PAGAR",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 2,
        monedaId: 1,
      },
      {
        cuenta: "60",
        descripcion: "GASTOS GENERALES Y ADMINISTRATIVOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 6,
        monedaId: 1,
      },
      {
        cuenta: "61",
        descripcion: "MANTENIMIENTOS MOBILIARIOS Y EQUIPO DE OFICINA",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 6,
        monedaId: 1,
      },
      {
        cuenta: "62",
        descripcion: "GASTOS FINANCIAMIENTOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 6,
        monedaId: 1,
      },
    ];
  }
  InsertarGruposCuentasContable() {
    try {
      grupoCuentasContables.afterSync(
        "createGrupoCuentasContables",
        async () => {
          await grupoCuentasContables.bulkCreate(this.grupoCuentaContableArray);
        }
      );
    } catch (error) {
      console.error(`Error insertando grupos Cuentas Contables, ${error}`);
    }
  }
}

export class TiposComprobantes {
  private tipoComprobantesArray: Array<ITipoComprobante>;

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
      tipoComprobantes.afterSync("createComprobantes", async () => {
        await tipoComprobantes.bulkCreate(this.tipoComprobantesArray);
      });
    } catch (error) {
      console.error(error, `Error insertando comprobantes, ${error}`);
    }
  }
}

export class TiposItem {
  private tipoItemArray: Array<ITipoItem>;

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
      tiposItem.afterSync("createTipoItem", async () => {
        await tiposItem.bulkCreate(this.tipoItemArray);
      });
    } catch (error) {
      console.error(`Error insertando Tipos item, ${error}`);
    }
  }
}

export class TipoVenta {
  private tipoVentaArray: Array<ITipoVentas>;

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
      tiposVenta.afterSync("createTipoVenta", async () => {
        await tiposVenta.bulkCreate(this.tipoVentaArray);
      });
    } catch (error) {
      console.error(`Error insertando Tipos venta, ${error}`);
    }
  }
}

export class Impuestos {
  private impuestoArray: Array<IImpuestos>;

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
      impuestos.afterSync("createImpuestos", async () => {
        await impuestos.bulkCreate(this.impuestoArray);
      });
    } catch (error) {
      console.error(`Error insertando impuestos, ${error}`);
    }
  }
}

export class MediosDePago {
  private medioDePagoArray: Array<IMedioDePago>;

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
      mediosDePago.afterSync("createMediosDePago", async () => {
        await mediosDePago.bulkCreate(this.medioDePagoArray);
      });
    } catch (error) {
      console.error(`Error insertando medios de pago, ${error}`);
    }
  }
}

export class Perfiles {
  private PerfilesArray: Array<IPerfil>;
  constructor() {
    this.PerfilesArray = [
      {
        descripcion: "ADMINISTRADOR",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        descripcion: "AUXILIAR",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
      },
    ];
  }

  InsertarPerfiles() {
    try {
      perfil.afterSync("createPerfil", async () => {
        perfil.bulkCreate(this.PerfilesArray);
      });
    } catch (error) {
      console.error(`Error al insertar los perfiles, ${error}`);
    }
  }
}

export class Tipogasto {
  private tipoGastoArray: Array<ITipoGasto>;
  constructor() {
    this.tipoGastoArray = [
      {
        descripcion: "00-NO ESPECIFICADO",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "01-GASTOS DE PERSONAL",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "02-GASTOS POR TRABAJOS, SUMINISTROS Y SERVICIOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "03-ARRENDAMIENTOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "04-GASTOS DE ACTIVOS FIJOS'",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "05-GASTOS DE REPRESENTACIÓN",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "06-OTRAS DEDUCCIONES ADMITIDAS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "07-GASTOS FINANCIEROS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "08-GASTOS EXTRAORDINARIOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "09-COMPRAS Y GASTOS QUE FORMAN PARTE DEL COSTO DE VENTA",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "10-ADQUISICIONES DE ACTIVOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "11-GASTOS DE SEGUROS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
    ];
  }
  InsertarTipoGasto() {
    try {
      tipoGasto.afterSync("createTipoGastos", async () => {
        tipoGasto.bulkCreate(this.tipoGastoArray);
      });
    } catch (error) {
      console.error(`Error al insertar tipos de gastos, ${error}`);
    }
  }
}

export class TipoFacturasPorPagar {
  private tipoFacturasPorPagarArray: Array<ITipoFacturasPorPagar>;
  constructor() {
    this.tipoFacturasPorPagarArray = [
      {
        descripcion: "GASTO",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "NOTA DE CREDITO",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
    ];
  }

  InsertarTipoFactura() {
    try {
      tipoFacturasPorPagar.afterSync("createTipoFacturas", async () => {
        await tipoFacturasPorPagar.bulkCreate(this.tipoFacturasPorPagarArray);
      });
    } catch (error) {
      console.error(`Error al insertar tipo de facturas, ${error}`);
    }
  }
}

export class TipoCuentasContables {
  private tipoCuentaContableArray: Array<ITipoCuentaContable>;
  constructor() {
    this.tipoCuentaContableArray = [
      {
        descripcion: "ACTIVOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        descripcion: "PASIVOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        descripcion: "CAPITAL",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        descripcion: "INGRESOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        descripcion: "COSTOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        descripcion: "GASTOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        descripcion: "RESUMENES",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
      },
    ];
  }
  InsertarTipoCuentasContables() {
    try {
      tiposCuentaContable.afterSync("createTiposCuenta", async () => {
        await tiposCuentaContable.bulkCreate(this.tipoCuentaContableArray);
      });
    } catch (error) {
      console.error(`Error al insertar tipo cuenta contable, ${error}`);
    }
  }
}

export class TransaccionesComerciales {
  private _transaccionesArray: Array<ITransaccionComercial>;
  constructor() {
    this._transaccionesArray = [
      {
        descripcion: "Apertura de capital",
        payload: "APERTURA_CAPITAL",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "Registro de facturas por pagar tipo gasto",
        payload: "REGISTRO_FACTURAS_POR_PAGAR",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "Aplicacion de credito ",
        payload: "APLICACION_CREDITO",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "Aplicacion de pago a factura por pagar",
        payload: "PAGO_FACTURA_POR_PAGAR",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "Ventas al contado",
        payload: "VENTA_CONTADO",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "Ventas a credito",
        payload: "VENTA_CREDITO",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "Gastos varios",
        payload: "GASTOS_VARIOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
    ];
  }
  InsertarTransaccionesComerciales() {
    try {
      transaccionesComerciales.afterSync("createTransacciones", async () => {
        await transaccionesComerciales.bulkCreate(this._transaccionesArray);
      });
    } catch (error) {
      return console.error(`Error al insertar transacciones, ${error}`);
    }
  }
}
export class CuentasContables {
  private _cuenntaArray: Array<ICuentaContable>;
  constructor() {
    this._cuenntaArray = [
      {
        noCuenta: "1010001",
        descripcion: "BANCO POPULAR",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 1,
        grupoCuentasContableId: 1,
        monedaId: 1,
        empresaId: 1,
      },
      {
        noCuenta: "2010001",
        descripcion: "PROVEEDORES",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 2,
        grupoCuentasContableId: 9,
        monedaId: 1,
        empresaId: 1,
      },
      {
        noCuenta: "6010001",
        descripcion: "GASTOS VARIOS",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
        tipoCuentaContableId: 6,
        grupoCuentasContableId: 14,
        monedaId: 1,
        empresaId: 1,
      },
    ];
  }
  InsertarCuentas() {
    try {
      cuentasContables.afterSync("createCuentasContables", async () => {
        await cuentasContables.bulkCreate(this._cuenntaArray);
      });
    } catch (error) {
      return console.error(`Error al insertar cuentas contables, ${error}`);
    }
  }
}

export class TipoMovimiento {
  private _movimientos: Array<any>;
  constructor() {
    this._movimientos = [
      {
        descripcion: "CREDITO",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
      {
        descripcion: "DEBITO",
        estado: true,
        createdAt: new Date(),
        updatedAt: null,
        usuario: "SA",
        terminal: "SA",
      },
    ];
  }

   InsertarTipoMovimiento(){
    try {
      tipoMovimiento.afterSync('Insertar movimientos',async ()=>{
        await tipoMovimiento.bulkCreate(this._movimientos)
      })
    } catch (error) {
      return console.error(`Error al insertar tipo de movimientos ${error}`)
    }
   }
}
