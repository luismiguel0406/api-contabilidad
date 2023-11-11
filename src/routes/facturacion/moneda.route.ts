import { Router } from "express";
import {
  deleteMoneda,
  getMoneda,
  postMoneda,
  updateMoneda,
} from "../../controllers/moneda.controller";

const router = Router();
const endPointFacturacion = "/api/facturacion";
const Moneda = "moneda";

router.get(`${endPointFacturacion}/${Moneda}/:id?`, getMoneda);
router.post(`${endPointFacturacion}/${Moneda}`, postMoneda);
router.put(`${endPointFacturacion}/${Moneda}/:id`, updateMoneda);
router.delete(`${endPointFacturacion}/${Moneda}/:id`, deleteMoneda);

export default router; //ve a arreglar empresa
