import {Router} from "express";
import { addFactura, getFacturas } from "../../Controllers/facturas.controller";

const router = Router();

const endPointFacturacion = '/api/facturacion';
const facturas = "facturas";

router.get(`${endPointFacturacion}/${facturas}/:id?`,getFacturas);
router.post(`${endPointFacturacion}/${facturas}`,addFactura);

export default router;