"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../../Controllers/usuarios.controller");
const router = (0, express_1.Router)();
const endPointUsuarios = "/api/usuarios";
const registrarse = "Registrarse";
const InicioSesion = "InicioSesion";
const usuario = "usuario";
router.post(`${endPointUsuarios}/${registrarse}`, usuarios_controller_1.RegistrarUsuario);
router.post(`${endPointUsuarios}/${InicioSesion}`, usuarios_controller_1.InicioSesionUsuario); //OJO EMPRESA
router.put(`${endPointUsuarios}/${usuario}/:id/:empresaId`, usuarios_controller_1.updateUsuario);
router.delete(`${endPointUsuarios}/${usuario}/:id/:empresaId`, usuarios_controller_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.route.js.map