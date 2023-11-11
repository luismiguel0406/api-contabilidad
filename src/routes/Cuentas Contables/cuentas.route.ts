import { Router } from "express";
import { ValidarToken } from "../../lib/Token/jsonWebToken";
import {
  deleteGrupoCuentasContables,
  getCuentasContables,
  getGrupoCuentasContables,
  getTiposCuentasContables,
  postGrupoCuentaContable,
  updateGrupoCuentasContables,
  postMovimientoCuenta,
  getMovimientoCuenta,
} from "../../controllers/cuentaContable.controller";

const router = Router();
const cuentaContable = "cuentaContable";
const tipoCuentas = "tipoCuentas";
const grupoCuenta = "grupoCuentas";
const movimiento = "movimiento";

// TIPOS //
router.get(`api/cuentas/${tipoCuentas}/:id?`, getTiposCuentasContables);

//GRUPOS//

router.get(`api/cuentas/${grupoCuenta}/:id?`, getGrupoCuentasContables);
router.post(`api/cuentas/${grupoCuenta}`, postGrupoCuentaContable);
router.put(`api/cuentas/${grupoCuenta}/:id`, updateGrupoCuentasContables);
router.delete(`api/cuentas/${grupoCuenta}/:id`, deleteGrupoCuentasContables);

// CUENTAS //

router.get(
  `api/cuentas/${cuentaContable}/:id?`,
  ValidarToken,
  getCuentasContables
);
router.post(`api/cuentas/${grupoCuenta}`, postGrupoCuentaContable);
router.put(`api/cuentas/${grupoCuenta}/:id`, updateGrupoCuentasContables);
router.delete(`api/cuentas/${grupoCuenta}/:id`, deleteGrupoCuentasContables);

// MOVIMIENTO //

router.post(`api/cuentas/${movimiento}`, postMovimientoCuenta);
router.get(
  `api/cuentas/${movimiento}/:id?/:fechaInicio?/:fechaFin?`,
  getMovimientoCuenta
);
export default router;
