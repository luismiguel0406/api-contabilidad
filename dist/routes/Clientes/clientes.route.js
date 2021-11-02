"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_controller_1 = require("../../Controllers/clientes.controller");
const router = (0, express_1.Router)();
const endPointClientes = "/api/clientes";
const tiposClientes = "/tipoClientes";
router.get(`${endPointClientes}/${tiposClientes}/:id?`, clientes_controller_1.getTiposClientes);
exports.default = router;
//# sourceMappingURL=clientes.route.js.map