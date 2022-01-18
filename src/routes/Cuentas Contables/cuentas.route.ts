import {Router} from "express"
import { ValidarToken } from "../../lib/Token/jsonWebToken";
import { deleteCuentasContables, getCuentasContables, postCuentaContable, updateCuentasContables } from "../../Controllers/cuentaContable.controller";


const router = Router();
const endPointCuentas = '/api/cuentas';


router.get(`${endPointCuentas}/:id?`,ValidarToken,getCuentasContables);
router.post(`${endPointCuentas}`,postCuentaContable);
router.put(`${endPointCuentas}/:id`,updateCuentasContables);
router.delete(`${endPointCuentas}/:id`,deleteCuentasContables);

export default router;