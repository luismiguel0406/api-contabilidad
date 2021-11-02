import { Router } from "express";
import { getCuentasContablesPadre } from "../../../Controllers/cuentas.controller";

const router = Router();
const endPointCuentas = '/api/cuentaspadres'

router.get(`${endPointCuentas}/:noCuenta`,getCuentasContablesPadre);

export default router;