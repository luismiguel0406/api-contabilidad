import { Router } from "express";
import {
  addFactura,
  deleteFactura,
  getFacturas,
} from "../../controllers/facturas.controller";

const router = Router();

const endPointFacturacion = "/api/facturacion";
const facturas = "facturas";

router.get(`${endPointFacturacion}/${facturas}/:id?`, getFacturas);
router.post(`${endPointFacturacion}/${facturas}`, addFactura);
router.delete(`${endPointFacturacion}/${facturas}`, deleteFactura);

export default router;
