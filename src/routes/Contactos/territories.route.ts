import {
  getProvinces,
  postProvinces,
} from "../../controllers/territories.controller";
import { Router } from "express";

const router = Router();

router.get("/api/territorios/provincias", getProvinces);
router.post("/api/territorios/provincias", postProvinces);

export default router;
