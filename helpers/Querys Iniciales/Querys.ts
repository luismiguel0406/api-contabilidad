import { ITipoCliente } from "../../interfaces/cliente.interface";
import { ITipoComprobante } from "../../interfaces/comprobante.interface";
import { ItipoContacto } from "../../interfaces/contactos.interface";
import { ICuentaContable } from "../../interfaces/cuentaContable.interface";
import { IMoneda } from "../../interfaces/moneda.interface";
import { ITipoPoveedor } from "../../interfaces/proveedor.interface";
import { ITipoItem } from "../../interfaces/Item.interface";
import { ITipoVentas } from "../../interfaces/tipoVentas.interface";
import tipoCliente from "../../models/Clientes/tipoCliente.model";
import tiposContactos from "../../models/Contacto/tipoContactos.model";
import cuentaContable from "../../models/Cuentas Contables/CuentasContables.model";
import comprobantes from "../../models/Facturacion/comprobantes/tipoComprobante.model";
import moneda from "../../models/Facturacion/moneda/moneda.model";
import tiposItem from "../../models/Inventario/tipoItem.model";
import tipoProveedor from "../../models/Proveedores/tipoProveedores.model";
import tipoVentas from "../../models/Facturacion/ventas/tipoVentas.model";

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
        console.error(error, "Error insertando tipos proveedores");
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
        console.error(error, "Error insertando tipos contactos");
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
      console.error(error, "Error insertando tipo Clientes");
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
      console.error(error, "Error insertando Monedas");
    }
  }
}

// VER ID EMPRESA
export class CuentasContablesPadres {
  private CuentaContableArray: Array<ICuentaContable>;

  constructor(empresaId: number) {
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
      cuentaContable.afterSync("createCuentasContablesPadre", async () => {
        await cuentaContable.bulkCreate(this.CuentaContableArray);
      });
    } catch (error) {
      console.error(error, "Error insertando Cuentas Contables");
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
      comprobantes.afterSync("createComprobantes", async () => {
        await comprobantes.bulkCreate(this.tipoComprobantesArray);
      });
    } catch (error) {
      console.error(error, "Error insertando comprobantes");
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
      console.error("Error insertando Tipos item");
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
      tipoVentas.afterSync("createTipoVenta", async () => {
        await tiposItem.bulkCreate(this.tipoVentaArray);
      });
    } catch (error) {
      console.error("Error insertando Tipos venta");
    }
  }
}
