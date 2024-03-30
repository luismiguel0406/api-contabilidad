"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const currency_controller_1 = require("../../controllers/currency.controller");
const router = (0, express_1.Router)();
router.get(`/api/invoice/currency/:id?`, currency_controller_1.getCurrency);
exports.default = router;
//# sourceMappingURL=currency.route.js.map