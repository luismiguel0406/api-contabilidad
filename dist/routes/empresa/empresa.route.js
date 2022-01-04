"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresas_controller_1 = require("../../Controllers/empresas.controller");
const router = (0, express_1.Router)();
const endPointEmpresas = '/api/empresas';
const empresa = 'empresa';
router.get(`${endPointEmpresas}/${empresa}/:id?`, empresas_controller_1.getEmpresa);
router.post(`${endPointEmpresas}/${empresa}`, empresas_controller_1.postEmpresa);
router.put(`${endPointEmpresas}/${empresa}/:id`, empresas_controller_1.updateEmpresa);
router.delete(`${endPointEmpresas}/${empresa}/:id`, empresas_controller_1.deleteEmpresa);
exports.default = router;
//# sourceMappingURL=empresa.route.js.map