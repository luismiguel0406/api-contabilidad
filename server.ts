import express, { Application } from "express";
import {
  CuentasContablesPadres,
  Moneda,
  TiposClientes,
  TiposContactos,
  TiposProveedores,
} from "./helpers/Querys Iniciales/Querys";
import CuentasRoutes from "./routes/Cuentas Contables/cuentasPadre/cuentas.route";
import CuentasHijasRoutes from "./routes/Cuentas Contables/cuentasHijas/cuentas.route";
import MondedasRoutes from "./routes/facturacion/moneda.route";

import clientesRoutes from "./routes/Clientes/clientes.route";
import contactosRoutes from "./routes/Contactos/contactos.route";
import proveedoresRoutes from "./routes/Proveedores/proveedores.route";
import cors from "cors";
import variablesEnv from "./config/index";
import db from "./Database/connectionDB";
import helmet from "helmet";

/*INICIALIZO EL SERVIDOR*/
class Server {
  private app: Application;
  private port: String;

  constructor() {
    this.app = express();
    this.port = variablesEnv.PORT || "";

    this.dbConnection();
    this.InicioAplicacion();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  async dbConnection() {
    try {
      await db.authenticate();
      //await db.sync()
      console.log("Database CACTUS Online");
    } catch (error) {
      console.log(`Error ${error}`);
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server escuchando en el puerto ${this.port}`);
    });
  }
  /* RUTAS PARA CONSULTA */
  routes() {
    this.app.use(CuentasRoutes);
    this.app.use(CuentasHijasRoutes);
    this.app.use(MondedasRoutes);
    //this.app.use(empresaRoutes);
    this.app.use(clientesRoutes);
    this.app.use(contactosRoutes);
    this.app.use(proveedoresRoutes);
  }

  InicioAplicacion() {
    try {
      const tipoClientes = new TiposClientes();
      const tipoContacto = new TiposContactos();
      const tipoProveedor = new TiposProveedores();
      const moneda = new Moneda();

      tipoClientes.InsertarTipoClientes();
      tipoContacto.InsertarTipoContactos();
      tipoProveedor.InsertarTiposProveedores();
      moneda.InsertarMonedas();
    } catch (error) {
      console.error(`Error Metodo InicioAplicacion ${error}`);
    }
  };

  InicioNuevaEmpresa(){

    try {
      const empresaId = 1;//VER AQUI
      const cuentasContablesPadres = new CuentasContablesPadres(empresaId);
      cuentasContablesPadres.InsertarCuentasContablesPadre();
    } catch (error) {
      console.error(`Error Metodo InicioNuevaEmpresa ${error}`);
    }
  }
}
export default Server;
