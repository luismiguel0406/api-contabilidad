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
router.get(`api/accounts/accountTypes/:id?`, getAccountTypes);

//GRUPOS//

router.get(`api/accounts/accountGroups/:id?`, getAccountingGroups);
router.post(`api/accounts/accountGroups`, postAccountingGroups);
router.put(`api/accounts/accountGroups/:id`, updateAccountingGroups);
router.delete(`api/accounts/accountGroups/:id`, deleteAccountingGroups);

// CUENTAS //

router.get(
  `api/accounts/accountingAccount/:id?`,
  validToken,
  getAccountingAccounts
);
router.post(`api/accounts/accountingAccount`, addAccountingAccount);

// MOVIMIENTO //

router.post(`api/accounts/movementAccount`, postMovementAccount);
router.get(
  `api/accounts/movementAccount/:id?/:fechaInicio?/:fechaFin?`,
  getMovementAccount
);
export default router;
