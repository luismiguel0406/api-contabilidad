import { Router } from "express";
import { addUsuario, getUsuario, updateUsuario, deleteUsuario } from "../../Controllers/usuarios.controller";


const router = Router();

const endPointUsuarios = "/api/usuarios"
const usuario =  "usuario";

router.get(`${endPointUsuarios}/${usuario}/:id?`,getUsuario);
router.post(`${endPointUsuarios}/${usuario}`,addUsuario);
router.put(`${endPointUsuarios}/${usuario}/:id`,updateUsuario);
router.delete(`${endPointUsuarios}/${usuario}/:id`,deleteUsuario);

export default router;