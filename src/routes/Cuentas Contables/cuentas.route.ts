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
  getMovimientoCuenta
} from "../../Controllers/cuentaContable.controller";

const router = Router();
const endPointCuentas = "/api/cuentas";
const cuentaContable = "cuentaContable";
const tipoCuentas = "tipoCuentas";
const grupoCuenta = "grupoCuentas";
const movimiento ='movimiento'

// TIPOS //
router.get(`${endPointCuentas}/${tipoCuentas}/:id?`, getTiposCuentasContables);

//GRUPOS//

router.get(`${endPointCuentas}/${grupoCuenta}/:id?`, getGrupoCuentasContables);
router.post(`${endPointCuentas}/${grupoCuenta}`, postGrupoCuentaContable);
router.put(`${endPointCuentas}/${grupoCuenta}/:id`, updateGrupoCuentasContables);
router.delete(`${endPointCuentas}/${grupoCuenta}/:id`, deleteGrupoCuentasContables);

// CUENTAS //

router.get(`${endPointCuentas}/${cuentaContable}/:id?`,ValidarToken,getCuentasContables );
router.post(`${endPointCuentas}/${grupoCuenta}`, postGrupoCuentaContable);
router.put(`${endPointCuentas}/${grupoCuenta}/:id`, updateGrupoCuentasContables);
router.delete(`${endPointCuentas}/${grupoCuenta}/:id`, deleteGrupoCuentasContables);

// MOVIMIENTO //

router.post(`${endPointCuentas}/${movimiento}`,postMovimientoCuenta);
router.get(`${endPointCuentas}/${movimiento}/:id?/:fechaInicio?/:fechaFin?`,getMovimientoCuenta);
export default router;
  