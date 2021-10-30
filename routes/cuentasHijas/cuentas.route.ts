import {Router} from "express"
import { deleteCuentasContables, getCuentasContables, postCuentaContable, updateCuentasContables } from "../../Controllers/cuentaContable.controller";


const router = Router();
const endPointCuentas = '/api/cuentasContables';
router.post(`${endPointCuentas}/addCuenta`,postCuentaContable);
router.get(`${endPointCuentas}/:id?`,getCuentasContables);
router.put(`${endPointCuentas}/updateCuenta/:id?`,updateCuentasContables);
router.put(`${endPointCuentas}/deleteCuenta/:id?`,deleteCuentasContables);

export default router;