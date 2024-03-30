"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountingAccounts_1 = require("../../controllers/accountingAccounts");
const router = (0, express_1.Router)();
// TIPOS //
router.get(`/api/accounts/accountTypes/:id?`, accountingAccounts_1.getAccountTypes);
//GRUPOS//
router.get(`/api/accounts/accountingGroups/:id?`, accountingAccounts_1.getAccountingGroups);
router.post(`/api/accounts/accountingGroups`, accountingAccounts_1.postAccountingGroups);
router.put(`/api/accounts/accountingGroups/:id`, accountingAccounts_1.updateAccountingGroups);
router.delete(`/api/accounts/accountingGroups/:id`, accountingAccounts_1.deleteAccountingGroups);
// CUENTAS //
router.get(`/api/accounts/accountingAccount/:id?`, 
// validToken,
accountingAccounts_1.getAccountingAccounts);
router.post(`/api/accounts/accountingAccount`, accountingAccounts_1.addAccountingAccount);
// MOVIMIENTO //
router.post(`/api/accounts/movementAccount`, accountingAccounts_1.postMovementAccount);
router.get(`/api/accounts/movementAccount/:id?/:startDate?/:endDate?`, accountingAccounts_1.getMovementAccount);
exports.default = router;
//# sourceMappingURL=accountingAccounts.route.js.map