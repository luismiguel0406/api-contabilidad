import { Router } from "express";
import { addUsuario, getUsuario, updateUsuario, deleteUsuario } from "../../Controllers/usuarios.controller";
import { ValidarToken } from "../../lib/Token/jsonWebToken";


const router = Router();

const endPointUsuarios = "/api/usuarios"
const usuario =  "usuario";

router.post(`${endPointUsuarios}/${usuario}`,addUsuario);
router.use(ValidarToken)
router.get(`${endPointUsuarios}/${usuario}/:email/:contrasena/:empresaId`,getUsuario);
router.put(`${endPointUsuarios}/${usuario}/:id/:empresaId`,updateUsuario);
router.delete(`${endPointUsuarios}/${usuario}/:id/:empresaId`,deleteUsuario);

export default router;