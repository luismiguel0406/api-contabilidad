import { Router } from "express";
import {
  deleteTipoVenta,
  getTipoVentas,
  postTipoVenta,
  updateTipoVenta,
} from "../../Controllers/tipoVentas.controller";

const router = Router();
const endPointFacturacion = "/api/facturacion";
const tipoVenta = "tipoVenta";

router.get(`${endPointFacturacion}/${tipoVenta}/:id?`, getTipoVentas);
router.post(`${endPointFacturacion}/${tipoVenta}`, postTipoVenta);
router.put(`${endPointFacturacion}/${tipoVenta}/:id`, updateTipoVenta);
router.delete(`${endPointFacturacion}/${tipoVenta}/:id`, deleteTipoVenta);

export default router;
