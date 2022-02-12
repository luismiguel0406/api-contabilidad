import express, { Application } from "express";
import {
  TiposComprobantes,
  GrupoCuentasContables,
  Moneda,
  TiposClientes,
  TiposContactos,
  TiposItem,
  TiposProveedores,
  TipoVenta,
  Impuestos,
  MediosDePago,
  Perfiles,
  Tipogasto,
  TipoFacturasPorPagar,
  TipoCuentasContables,
  TransaccionesComerciales,
  Empresa,
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
import tipoGastosRoutes from  "./routes/facturacion/tipoGastos.route";
import tipoFacturasPorpPagarRoutes from "./routes/facturasPorPagar/facturasPorPagar.route"
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
    this.InicioNuevaEmpresa();
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
      //await  db.sync({force:true})
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
    this.app.use(tipoGastosRoutes);
    this.app.use(tipoFacturasPorpPagarRoutes);
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
      const Perfil = new Perfiles();
      const tipoGasto = new Tipogasto();
      const tipoFacturasPorPagar = new TipoFacturasPorPagar();
      const tipoCuentasContables = new TipoCuentasContables();
      const grupoCuentasContables =  new GrupoCuentasContables();
      const transaccionesComerciales = new TransaccionesComerciales();
      const empresa = new Empresa();

      tipoClientes.InsertarTipoClientes();
      tipoContacto.InsertarTipoContactos();
      tipoProveedor.InsertarTiposProveedores();
      moneda.InsertarMonedas();
      comprobantes.InsertarComprobantes();
      tipoItem.InsertarTipoItem();
      tipoVenta.InsertarTipoVentas();
      impuestos.InsertarImpuestos();
      mediosDePago.InsertarMediosDePago();
      Perfil.InsertarPerfiles();
      tipoGasto.InsertarTipoGasto();
      tipoFacturasPorPagar.InsertarTipoFactura();
      tipoCuentasContables.InsertarTipoCuentasContables();
      grupoCuentasContables.InsertarGruposCuentasContable();
      transaccionesComerciales.InsertarTransaccionesComerciales();
      empresa.CrearEmpresa();
    } catch (error) {
      console.error(`Error Metodo Inicio Aplicacion, ${error}`);
    }
  }

  InicioNuevaEmpresa() {
    try {     
    console.info("COLOCAR HOOK DE LA EMPRESA AQUI!")
    } catch (error) {
      console.error(`Error Metodo InicioNuevaEmpresa, ${error}`);
    }
  }
}
export default Server;
