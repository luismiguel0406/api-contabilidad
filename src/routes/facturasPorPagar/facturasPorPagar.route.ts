import { getTipoFactura, postFacturaPorPagar } from "../../Controllers/FacturasPorPagar.controller";
import {Router} from "express";

const router = Router();

const endPointFacturacion = '/api/facturacion';
const tipoFacturasPorPagar = "tipoFacturasPorPagar";
const facturaPorPagar = "FacturaPorPagar";

//-----------TIPO FACTURA------------//
router.get(`${endPointFacturacion}/${tipoFacturasPorPagar}/:id?`,getTipoFactura);

//----------- FACTURA POR PAGAR ------------//
router.post(`${endPointFacturacion}/${facturaPorPagar}`,postFacturaPorPagar);



export default  router;