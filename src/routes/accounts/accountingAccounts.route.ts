import { Router } from "express";
import { validToken } from "../../lib/Token/jsonWebToken";
import {
  deleteAccountingGroups,
  getAccountingAccounts,
  getAccountingGroups,
  getAccountTypes,
  postAccountingGroups,
  updateAccountingGroups,
  postMovementAccount,
  getMovementAccount,
  addAccountingAccount,
} from "../../controllers/accountingAccounts";

const router = Router();

// TIPOS //
router.get(`/api/accounts/accountTypes/:id?`, getAccountTypes);

//GRUPOS//

router.get(`/api/accounts/accountingGroups/:id?`, getAccountingGroups);
router.post(`/api/accounts/accountingGroups`, postAccountingGroups);
router.put(`/api/accounts/accountingGroups/:id`, updateAccountingGroups);
router.delete(`/api/accounts/accountingGroups/:id`, deleteAccountingGroups);

// CUENTAS //

router.get(
  `/api/accounts/accountingAccount/:id?`,
  // validToken,
  getAccountingAccounts
);
router.post(`/api/accounts/accountingAccount`, addAccountingAccount);

// MOVIMIENTO //

router.post(`/api/accounts/movementAccount`, postMovementAccount);
router.get(
  `/api/accounts/movementAccount/:id?/:startDate?/:endDate?`,
  getMovementAccount
);
export default router;
