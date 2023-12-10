import {
  getProvinces,
  postProvinces,
} from "../../controllers/territories.controller";
import { Router } from "express";

const router = Router();

router.get("/api/territories/provinces", getProvinces);
router.post("/api/territories/provinces", postProvinces);

export default router;
