"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moneda_controller_1 = require("../../Controllers/moneda.controller");
const router = (0, express_1.Router)();
router.get('/', moneda_controller_1.getMoneda);
exports.default = router;
//# sourceMappingURL=moneda.route.js.map