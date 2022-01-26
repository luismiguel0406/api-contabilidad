import { getTipoFactura } from "Controllers/FacturasPorPagar.controller";
import {Router} from "express";

const router = Router();

const endPointFacturacion = '/api/facturacion';
const tipoFacturasPorPagar = "tipoFacturas";

router.get(`${endPointFacturacion}/${tipoFacturasPorPagar}/:id?`,getTipoFactura);



export default  router;