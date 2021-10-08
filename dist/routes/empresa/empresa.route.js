"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresas_controller_1 = require("../../Controllers/empresas.controller");
const router = (0, express_1.Router)();
const endPointEmpresas = '/api/empresa';
router.get(`${endPointEmpresas}`, empresas_controller_1.getEmpresa); //filtrar por id
exports.default = router;
//# sourceMappingURL=empresa.route.js.map