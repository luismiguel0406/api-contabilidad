import { Router } from "express";
import {
  deleteImpuesto,
  getImpuestos,
  postImpuesto,
  updateImpuesto,
} from "../../Controllers/impuestos.controller";

const router = Router();

const endPointFacturacion = "/api/facturacion";
const impuestos = "impuestos";

router.get(`${endPointFacturacion}/${impuestos}/:id?`, getImpuestos);
router.post(`${endPointFacturacion}/${impuestos}`, postImpuesto);
router.put(`${endPointFacturacion}/${impuestos}/:id`, updateImpuesto);
router.delete(`${endPointFacturacion}/${impuestos}/:id`, deleteImpuesto);

export default router;
