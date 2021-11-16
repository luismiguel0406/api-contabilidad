import express, { Application} from "express";
import CuentasRoutes from "./routes/Cuentas Contables/cuentasPadre/cuentas.route";
import CuentasHijasRoutes from "./routes/Cuentas Contables/cuentasHijas/cuentas.route";
import monedaRoutes from "./routes/Facturacion/moneda.route";
import empresaRoutes from "./routes/Empresa/empresa.route";
import clientesRoutes from "./routes/Clientes/clientes.route";
import contactosRoutes from "./routes/Contactos/contactos.route";
import cors from "cors";
import https from "https";
import variablesEnv from "./config/index";
import db from "./Database/connectionDB";
import helmet from "helmet";


/*INICIALIZO EL SERVIDOR*/
class Server {
  private app: Application;
  private port: String;

  constructor() {
    this.app = express();
    this.port = variablesEnv.PORT || '';

    this.dbConnection();
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
      //await db.sync({force:true});
      console.log("Database CACTUS Online");
    } catch (error) {
      console.log(`Error${error}`);
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
    this.app.use(monedaRoutes);
    this.app.use(empresaRoutes);
    this.app.use(clientesRoutes);
    this.app.use(contactosRoutes);
    
  }
}
export default Server;
