import { Router } from "express";
import {
  deleteGrupoCuentasContables,
  getGrupoCuentasContables,
  getTiposCuentasContables,
  postGrupoCuentaContable,
  updateGrupoCuentasContables,
} from "../../Controllers/cuentaContable.controller";

const router = Router();
const endPointCuentas = "/api/cuentas";
const tipoCuentas = "tipoCuentas";

// TIPOS //
router.get(`${endPointCuentas}/${tipoCuentas}/:id?`, getTiposCuentasContables);

//SUBTIPOS//

router.get(`${endPointCuentas}/:id?`, getGrupoCuentasContables);
router.post(`${endPointCuentas}`, postGrupoCuentaContable);
router.put(`${endPointCuentas}/:id`, updateGrupoCuentasContables);
router.delete(`${endPointCuentas}/:id`, deleteGrupoCuentasContables);

export default router;
