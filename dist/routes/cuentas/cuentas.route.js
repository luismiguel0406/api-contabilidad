"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentas_controller_1 = require("../../Controllers/cuentas.controller");
const router = (0, express_1.Router)();
router.get('/', cuentas_controller_1.getCuentasPadre);
exports.default = router;
//# sourceMappingURL=cuentas.route.js.map