import { Router } from "express";
import {
  registerUser,
  login,
  updateUsuario,
  deleteUsuario,
} from "../../controllers/user.controller";
import { validToken } from "../../lib/Token/jsonWebToken";

const router = Router();

router.post(`/api/usuarios/signup`, registerUser);
router.post(`/api/usuarios/login`, login);
router.put(`/api/usuarios/usuario/:id/:empresaId`, updateUsuario);
router.delete(`/api/usuarios/usuario/:id/:empresaId`, deleteUsuario);

export default router;
