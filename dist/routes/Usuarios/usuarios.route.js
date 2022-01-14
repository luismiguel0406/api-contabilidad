"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../../Controllers/usuarios.controller");
const router = (0, express_1.Router)();
const endPointUsuarios = "/api/usuarios";
const usuario = "usuario";
router.get(`${endPointUsuarios}/${usuario}/:id/:empresaId`, usuarios_controller_1.getUsuario);
router.post(`${endPointUsuarios}/${usuario}`, usuarios_controller_1.addUsuario);
router.put(`${endPointUsuarios}/${usuario}/:id/:empresaId`, usuarios_controller_1.updateUsuario);
router.delete(`${endPointUsuarios}/${usuario}/:id/:empresaId`, usuarios_controller_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.route.js.map