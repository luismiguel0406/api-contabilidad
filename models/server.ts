import express, { Application, query } from "express";
import CuentasRoutes from "../routes/cuentas/cuentas.route";
import monedaRoutes from "../routes/facturacion/moneda.route";
import cors from "cors";
import https from "https";
import db from "../Database/connectionDB";
require("dotenv").config();

/*INICIALIZO EL SERVIDOR*/
class Server {
  private app: Application;
  private port: String;

  private apiPath = {
    CuentasPadre: '/api/CuentasPadre',
    Facturacion :'/api/moneda'
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  async dbConnection() {
    try {
      await db.authenticate();
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
    this.app.use(this.apiPath.CuentasPadre, CuentasRoutes);
    this.app.use(this.apiPath.Facturacion, monedaRoutes)
  }
}
export default Server;
