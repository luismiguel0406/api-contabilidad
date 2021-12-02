import { ITipoCliente } from "../../interfaces/cliente.interface";
import { ItipoContacto } from "../../interfaces/contactos.interface";
import { IMoneda } from "../../interfaces/moneda.interface";
import { ITipoPoveedor } from "../../interfaces/proveedor.interface";
import tipoCliente from "../../models/Clientes/tipoCliente.model";
import tiposContactos from "../../models/Contacto/tipoContactos.model";
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
    tipoProveedor.afterSync("CreaTiposProveedores", () => {
      try {
        tipoProveedor.bulkCreate(this.tipoProveedoresArray);
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
    tiposContactos.afterSync("createTipoContactos", () => {
      try {
        tiposContactos.bulkCreate(this.tipoContactosArray);
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
      tipoCliente.afterSync("createTipoClientes", () => {
        tipoCliente.bulkCreate(this.tipoClientesArray);
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
      moneda.afterSync("createMonedas", () => {
        moneda.bulkCreate(this.monedaArray);
      });
    } catch (error) {
      console.error(error, "Error insertando Monedas");
    }
  }
}
