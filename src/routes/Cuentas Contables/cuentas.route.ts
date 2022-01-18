import {Router} from "express"
import { deleteCuentasContables, getCuentasContables, postCuentaContable, updateCuentasContables } from "../../Controllers/cuentaContable.controller";


const router = Router();
const endPointCuentas = '/api/cuentas';


router.get(`${endPointCuentas}/:id?`,postCuentaContable);
router.post(`${endPointCuentas}`,getCuentasContables);
router.put(`${endPointCuentas}/:id`,updateCuentasContables);
router.delete(`${endPointCuentas}/:id`,deleteCuentasContables);

export default router;