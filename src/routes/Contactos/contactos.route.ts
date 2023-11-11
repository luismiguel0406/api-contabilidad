import { Router } from "express";
import {
  deleteCorreos,
  deleteDirecciones,
  deleteTelefonos,
  deleteTipoContactos,
  getCorreos,
  getDirecciones,
  getTelefonos,
  getTipoContactos,
  postCorreos,
  postDirecciones,
  postTelefonos,
  postTipoContactos,
  updateCorreos,
  updateDirecciones,
  updateTelefonos,
  updateTipoContactos,
} from "../../controllers/contactos.controller";

const router = Router();
const endPointContactos = "/api/Contactos";
const Correos = "Correos";
const Direcciones = "Direcciones";
const Telefonos = "Telefonos";
const Tipo = "tipoContactos";

//CORREOS
router.get(`${endPointContactos}/${Correos}/:id?`, getCorreos);
router.post(`${endPointContactos}/${Correos}`, postCorreos);
router.put(`${endPointContactos}/${Correos}/:id`, updateCorreos);
router.delete(`${endPointContactos}/${Correos}/:id`, deleteCorreos);

//DIRECCIONES
router.get(`${endPointContactos}/${Direcciones}/:id?`, getDirecciones);
router.post(`${endPointContactos}/${Direcciones}`, postDirecciones);
router.put(`${endPointContactos}/${Direcciones}/:id`, updateDirecciones);
router.delete(`${endPointContactos}/${Direcciones}/:id`, deleteDirecciones);

//TELEFONOS
router.get(`${endPointContactos}/${Telefonos}/:id?`, getTelefonos);
router.post(`${endPointContactos}/${Telefonos}`, postTelefonos);
router.put(`${endPointContactos}/${Telefonos}/:id`, updateTelefonos);
router.delete(`${endPointContactos}/${Telefonos}/:id`, deleteTelefonos);

//TIPOS CONTACTOS
router.get(`${endPointContactos}/${Tipo}/:id?`, getTipoContactos);
router.post(`${endPointContactos}/${Tipo}`, postTipoContactos);
router.put(`${endPointContactos}/${Tipo}/:id?`, updateTipoContactos);
router.delete(`${endPointContactos}/${Tipo}/:id?`, deleteTipoContactos);

export default router;
