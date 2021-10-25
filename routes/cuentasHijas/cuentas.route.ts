import {Router} from "express"
import { postCuentaContable } from "../../Controllers/cuentaContable.controller";


const router = Router();
const endPointCuentas = '/api/cuentasContables';
router.post(`${endPointCuentas}/addCuenta`,postCuentaContable)

export default router;