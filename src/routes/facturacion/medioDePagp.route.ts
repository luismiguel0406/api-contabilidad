import { Router } from "express";
import {
  deleteMedioDePago,
  getMedioDePago,
  postMedioDePago,
  updateMedioDePago,
} from "../../controllers/medioDePago.controller";

const router = Router();

const endPointFacturacion = "/api/facturacion";
const medioDePago = "medioDePago";

router.get(`${endPointFacturacion}/${medioDePago}/:id?`, getMedioDePago);
router.post(`${endPointFacturacion}/${medioDePago}`, postMedioDePago);
router.put(`${endPointFacturacion}/${medioDePago}/:id`, updateMedioDePago);
router.delete(`${endPointFacturacion}/${medioDePago}/:id`, deleteMedioDePago);

export default router;
