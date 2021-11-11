"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactos_controller_1 = require("../../Controllers/contactos.controller");
const router = (0, express_1.Router)();
const endPointContactos = "/api/Contactos/";
const Correos = "Correos";
const Direcciones = "Direcciones";
const Telefonos = "Telefonos";
//CORREOS
router.get(`${endPointContactos}${Correos}/:id?`, contactos_controller_1.getCorreos);
router.post(`${endPointContactos}${Correos}`, contactos_controller_1.postCorreos);
router.put(`${endPointContactos}${Correos}/:id`, contactos_controller_1.updateCorreos);
router.delete(`${endPointContactos}${Correos}/:id`, contactos_controller_1.deleteCorreos);
//DIRECCIONES
router.get(`${endPointContactos}${Direcciones}/:id?`, contactos_controller_1.getDirecciones);
router.post(`${endPointContactos}${Direcciones}`, contactos_controller_1.postDirecciones);
router.put(`${endPointContactos}${Direcciones}/:id`, contactos_controller_1.updateDirecciones);
router.delete(`${endPointContactos}${Direcciones}/:id`, contactos_controller_1.deleteDirecciones);
//TELEFONOS
router.get(`${endPointContactos}${Telefonos}/:id?`, contactos_controller_1.getTelefonos);
router.post(`${endPointContactos}${Telefonos}`, contactos_controller_1.postTelefonos);
router.put(`${endPointContactos}${Telefonos}/:id`, contactos_controller_1.updateTelefonos);
router.delete(`${endPointContactos}${Telefonos}/:id`, contactos_controller_1.deleteTelefonos);
exports.default = router;
//# sourceMappingURL=contactos.route.js.map