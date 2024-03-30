import { Router } from "express";
import { getCurrency } from "../../controllers/currency.controller";

const router = Router();

router.get(`/api/invoice/currency/:id?`, getCurrency);

export default router;
