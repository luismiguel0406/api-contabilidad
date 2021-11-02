"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentas_controller_1 = require("../../../Controllers/cuentas.controller");
const router = (0, express_1.Router)();
const endPointCuentas = '/api/cuentaspadres';
router.get(`${endPointCuentas}/:noCuenta`, cuentas_controller_1.getCuentasContablesPadre);
exports.default = router;
//# sourceMappingURL=cuentas.route.js.map