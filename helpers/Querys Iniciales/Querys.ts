import { ITipoCliente } from "../../interfaces/cliente.interface";
import { ItipoContacto } from "../../interfaces/contactos.interface";
import { ICuentaContable } from "../../interfaces/cuentaContable.interface";
import { IMoneda } from "../../interfaces/moneda.interface";
import { ITipoPoveedor } from "../../interfaces/proveedor.interface";
import tipoCliente from "../../models/Clientes/tipoCliente.model";
import tiposContactos from "../../models/Contacto/tipoContactos.model";
import cuentaContable from "../../models/Cuentas Contables/CuentasContables.model";
import moneda from "../../models/Facturacion/moneda.model";
import tipoProveedor from "../../models/Proveedores/tipoProveedores.model";

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

  constructor(empresaId:number) {
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
      cuentaContable.afterSync("createCuentasContablesPadre", async () => {
       await cuentaContable.bulkCreate(this.CuentaContableArray);
      });
    } catch (error) {
      console.error(error, "Error insertando Cuentas Contables");
    }
  }
}
