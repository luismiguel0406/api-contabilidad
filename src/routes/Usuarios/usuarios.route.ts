import { Router } from "express";
import { RegistrarUsuario, InicioSesionUsuario, updateUsuario, deleteUsuario } from "../../Controllers/usuarios.controller";
import { ValidarToken } from "../../lib/Token/jsonWebToken";


const router = Router();

const endPointUsuarios = "/api/usuarios";
const registrarse =  "Registrarse";
const InicioSesion = "InicioSesion"
const usuario = "usuario";

router.post(`${endPointUsuarios}/${registrarse}`,RegistrarUsuario);
router.post(`${endPointUsuarios}/${InicioSesion}`, InicioSesionUsuario);//OJO EMPRESA
router.put(`${endPointUsuarios}/${usuario}/:id/:empresaId`,updateUsuario);
router.delete(`${endPointUsuarios}/${usuario}/:id/:empresaId`,deleteUsuario);

export default router;