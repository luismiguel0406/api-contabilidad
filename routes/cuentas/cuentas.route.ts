import { Router } from "express";
import { getCuentasPadre } from "../../Controllers/cuentas.controller";

const router = Router();

router.get('/',getCuentasPadre)

export default router;