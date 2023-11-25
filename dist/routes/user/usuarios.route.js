"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../../controllers/user.controller");
const router = (0, express_1.Router)();
router.post(`/api/usuarios/signup`, user_controller_1.RegisterUser);
router.post(`/api/usuarios/login`, user_controller_1.login);
router.put(`/api/usuarios/usuario/:id/:empresaId`, user_controller_1.updateUsuario);
router.delete(`/api/usuarios/usuario/:id/:empresaId`, user_controller_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.route.js.map