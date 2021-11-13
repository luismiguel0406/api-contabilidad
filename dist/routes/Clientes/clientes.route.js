"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_controller_1 = require("../../Controllers/clientes.controller");
const router = (0, express_1.Router)();
const endPointClientes = "/api/clientes";
const tiposClientes = "/tipoCliente";
router.get(`${endPointClientes}/:id?`, clientes_controller_1.getClientes);
router.post(`${endPointClientes}`, clientes_controller_1.postCliente);
router.put(`${endPointClientes}/:id`, clientes_controller_1.updateCliente);
router.delete(`${endPointClientes}/:id`, clientes_controller_1.deleteCliente);
router.get(`${endPointClientes}/${tiposClientes}/:id?`, clientes_controller_1.getTiposClientes);
router.post(`${endPointClientes}/${tiposClientes}`, clientes_controller_1.postTipoCliente);
router.put(`${endPointClientes}/${tiposClientes}/:id`, clientes_controller_1.updateTipoCliente);
router.delete(`${endPointClientes}/${tiposClientes}/:id`, clientes_controller_1.deleteTipoCliente);
exports.default = router;
//# sourceMappingURL=clientes.route.js.map