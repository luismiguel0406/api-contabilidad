import { Router } from "express";
import {
  deleteCorreos,
  deleteDirecciones,
  deleteTelefonos,
  getCorreos,
  getDirecciones,
  getTelefonos,
  postCorreos,
  postDirecciones,
  postTelefonos,
  updateCorreos,
  updateDirecciones,
  updateTelefonos,
} from "../../Controllers/contactos.controller";

const router = Router();
const endPointContactos = "/api/Contactos/";
const Correos = "Correos";
const Direcciones = "Direcciones";
const Telefonos = "Telefonos";

//CORREOS
router.get(`${endPointContactos}${Correos}/:id?`, getCorreos);
router.post(`${endPointContactos}${Correos}`, postCorreos);
router.put(`${endPointContactos}${Correos}/:id`, updateCorreos);
router.delete(`${endPointContactos}${Correos}/:id`, deleteCorreos);

//DIRECCIONES
router.get(`${endPointContactos}${Direcciones}/:id?`, getDirecciones);
router.post(`${endPointContactos}${Direcciones}`, postDirecciones);
router.put(`${endPointContactos}${Direcciones}/:id`, updateDirecciones);
router.delete(`${endPointContactos}${Direcciones}/:id`, deleteDirecciones);

//TELEFONOS
router.get(`${endPointContactos}${Telefonos}/:id?`, getTelefonos);
router.post(`${endPointContactos}${Telefonos}`, postTelefonos);
router.put(`${endPointContactos}${Telefonos}/:id`, updateTelefonos);
router.delete(`${endPointContactos}${Telefonos}/:id`, deleteTelefonos);


export default router;