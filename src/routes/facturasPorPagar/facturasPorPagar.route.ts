import {
  getFacturasPorPagar,
  getTipoFactura,
  postFacturaPorPagar,
} from "../../controllers/FacturasPorPagar.controller";
import { Router } from "express";
import { validToken } from "../../lib/Token/jsonWebToken";

const router = Router();

const endPointFacturacion = "/api/facturacion";
const tipoFacturasPorPagar = "tipoFacturasPorPagar";
const facturaPorPagar = "FacturaPorPagar";

//-----------TIPO FACTURA------------//
router.get(
  `${endPointFacturacion}/${tipoFacturasPorPagar}/:id?`,
  getTipoFactura
);

//----------- FACTURA POR PAGAR ------------//
router.use(`${endPointFacturacion}/${facturaPorPagar}`, validToken);
router.post(`${endPointFacturacion}/${facturaPorPagar}`, postFacturaPorPagar);
router.get(
  `${endPointFacturacion}/${facturaPorPagar}/:id?`,
  getFacturasPorPagar
);

export default router;
