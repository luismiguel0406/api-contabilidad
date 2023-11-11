"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_controller_1 = require("../../controllers/clientes.controller");
const router = (0, express_1.Router)();
const endPointClientes = "/api/Clientes";
const Cliente = "Cliente";
const tipoCliente = "tipoCliente";
router.get(`${endPointClientes}/${Cliente}/:id?`, clientes_controller_1.getClientes);
router.post(`${endPointClientes}/${Cliente}`, clientes_controller_1.postCliente);
router.put(`${endPointClientes}/${Cliente}/:id`, clientes_controller_1.updateCliente);
router.delete(`${endPointClientes}/${Cliente}/:id`, clientes_controller_1.deleteCliente);
router.get(`${endPointClientes}/${tipoCliente}/:id?`, clientes_controller_1.getTiposClientes);
router.post(`${endPointClientes}/${tipoCliente}`, clientes_controller_1.postTipoCliente);
router.put(`${endPointClientes}/${tipoCliente}/:id`, clientes_controller_1.updateTipoCliente);
router.delete(`${endPointClientes}/${tipoCliente}/:id`, clientes_controller_1.deleteTipoCliente);
exports.default = router;
//# sourceMappingURL=clientes.route.js.map