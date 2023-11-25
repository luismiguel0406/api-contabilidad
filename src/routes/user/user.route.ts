import { Router } from "express";
import {
  RegisterUser,
  login,
  updateUsuario,
  deleteUsuario,
} from "../../controllers/user.controller";
import { validToken } from "../../lib/Token/jsonWebToken";

const router = Router();

router.post(`/api/usuarios/signup`, RegisterUser);
router.post(`/api/usuarios/login`, login);
router.put(`/api/usuarios/usuario/:id/:empresaId`, updateUsuario);
router.delete(`/api/usuarios/usuario/:id/:empresaId`, deleteUsuario);

export default router;
