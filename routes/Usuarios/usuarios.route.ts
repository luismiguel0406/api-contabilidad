import { Router } from "express";
import { addUsuario, getUsuario, updateUsuario, deleteUsuario } from "../../Controllers/usuarios.controller";


const router = Router();

const endPointUsuarios = "/api/usuarios"
const usuario =  "usuario";

router.get(`${endPointUsuarios}/${usuario}/:id/:empresaId`,getUsuario);
router.post(`${endPointUsuarios}/${usuario}`,addUsuario);
router.put(`${endPointUsuarios}/${usuario}/:id/:empresaId`,updateUsuario);
router.delete(`${endPointUsuarios}/${usuario}/:id/:empresaId`,deleteUsuario);

export default router;