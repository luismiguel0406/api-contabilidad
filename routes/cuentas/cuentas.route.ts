import { Router } from "express";
import { getCuentaContablePadre, getCuentasContablesPadre } from "../../Controllers/cuentas.controller";

const router = Router();
const endPointCuentas = '/api/cuentaspadres'

router.get(`${endPointCuentas}`,getCuentasContablesPadre);
router.get(`${endPointCuentas}/:noCuenta`,getCuentaContablePadre);

export default router;