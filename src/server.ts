import express, { Application } from "express";
import {
  TiposComprobantes,
  CuentasContablesPadres,
  Moneda,
  TiposClientes,
  TiposContactos,
  TiposItem,
  TiposProveedores,
  TipoVenta,
  Impuestos,
  MediosDePago,
} from "./helpers/Querys Iniciales/Querys";
import CuentasRoutes from "./routes/Cuentas Contables/cuentas.route";
import MonedasRoutes from "./routes/facturacion/moneda.route";
import ComprobantesRoutes from "./routes/facturacion/comprobante.route";
import empresaRoutes from "./routes/empresa/empresa.route";
import clientesRoutes from "./routes/Clientes/clientes.route";
import contactosRoutes from "./routes/Contactos/contactos.route";
import proveedoresRoutes from "./routes/Proveedores/proveedores.route";
import itemRoutes from "./routes/Inventario/Item.route";
import tipoVentaRoutes from "./routes/facturacion/tipoVenta.route";
import impuestosRoutes from "./routes/facturacion/impuestos.route";
import medioDePagoRoutes from "./routes/facturacion/medioDePagp.route";
import facturasRoutes from "./routes/facturacion/factura.route";
import usuariosRoutes from "./routes/Usuarios/usuarios.route";
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
    this.InicioNuevaEmpresa();
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
    this.app.use(MonedasRoutes);
    this.app.use(ComprobantesRoutes);
    this.app.use(empresaRoutes);
    this.app.use(clientesRoutes);
    this.app.use(contactosRoutes);
    this.app.use(proveedoresRoutes);
    this.app.use(itemRoutes);
    this.app.use(tipoVentaRoutes);
    this.app.use(impuestosRoutes);
    this.app.use(medioDePagoRoutes);
    this.app.use(facturasRoutes);
    this.app.use(usuariosRoutes);
  }

  InicioAplicacion() {
    try {
      const tipoClientes = new TiposClientes();
      const tipoContacto = new TiposContactos();
      const tipoProveedor = new TiposProveedores();
      const moneda = new Moneda();
      const comprobantes = new TiposComprobantes();
      const tipoItem = new TiposItem();
      const tipoVenta = new TipoVenta();
      const impuestos = new Impuestos();
      const mediosDePago = new MediosDePago();

      tipoClientes.InsertarTipoClientes();
      tipoContacto.InsertarTipoContactos();
      tipoProveedor.InsertarTiposProveedores();
      moneda.InsertarMonedas();
      tipoItem.InsertarTipoItem();
      comprobantes.InsertarComprobantes();
      tipoVenta.InsertarTipoVentas();
      impuestos.InsertarImpuestos();
      mediosDePago.InsertarMediosDePago();
    } catch (error) {
      console.error(`Error Metodo InicioAplicacion, ${error}`);
    }
  }

  InicioNuevaEmpresa() {
    try {
      const empresaId = 1; //VER AQUI
      const cuentasContablesPadres = new CuentasContablesPadres(empresaId);
      cuentasContablesPadres.InsertarCuentasContablesPadre();
    } catch (error) {
      console.error(`Error Metodo InicioNuevaEmpresa, ${error}`);
    }
  }
}
export default Server;