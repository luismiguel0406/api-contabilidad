import { Router } from "express";
import {
  deleteCorreos,
  deleteTelefonos,
  getCorreos,
  getTelefonos,
  postCorreos,
  postTelefonos,
  updateCorreos,
  updateTelefonos,
} from "../../controllers/contactos.controller";

const router = Router();
const endPointContactos = "/api/Contactos";
const Correos = "Correos";
const Telefonos = "Telefonos";

//CORREOS
router.get(`${endPointContactos}/${Correos}/:id?`, getCorreos);
router.post(`${endPointContactos}/${Correos}`, postCorreos);
router.put(`${endPointContactos}/${Correos}/:id`, updateCorreos);
router.delete(`${endPointContactos}/${Correos}/:id`, deleteCorreos);

//TELEFONOS
router.get(`${endPointContactos}/${Telefonos}/:id?`, getTelefonos);
router.post(`${endPointContactos}/${Telefonos}`, postTelefonos);
router.put(`${endPointContactos}/${Telefonos}/:id`, updateTelefonos);
router.delete(`${endPointContactos}/${Telefonos}/:id`, deleteTelefonos);

export default router;
