"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const territories_controller_1 = require("../../controllers/territories.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/api/territories/provinces", territories_controller_1.getProvinces);
router.post("/api/territories/provinces", territories_controller_1.postProvinces);
exports.default = router;
//# sourceMappingURL=territories.route.js.map