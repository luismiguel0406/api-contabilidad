import { Op } from "sequelize";
import {
  TAccountingAccount,
  TAccountingGroup,
  TTypeGeneric,
  TMovementAccounts,
} from "types";

import accountTypeModel from "../../models/AccountingAccount/accountType.model";
import accountingAccountModel from "../../models/AccountingAccount/accountingAccount.model";
import accountingGroupModel from "../../models/AccountingAccount/accountingGroup.model";
import movementAccountModel from "../../models/AccountingAccount/movementAccount.model";
import effectTypeModel from "../../models/AccountingAccount/effectType.model";

export default class AccountingAccountService {
  async getAccountingAccounts(id: any = null) {
    const result =
      id === null
        ? await accountingAccountModel.findAll({
            include: [
              {
                model: accountingGroupModel,
                attributes: ["description"],
                required: true,
              },
              {
                model: accountTypeModel,
                attributes: ["description"],
                required: true,
              },
            ],
            where: { state: true },
          })
        : await accountingAccountModel.findOne({
            include: [
              {
                model: accountingGroupModel,
                attributes: ["description"],
                required: true,
              },
              {
                model: accountTypeModel,
                attributes: ["description"],
                required: true,
              },
            ],
            where: { id, state: true },
          });
    return result;
  }

  async addAccountingAccount(body: TAccountingAccount) {
    await accountingAccountModel.create(body);
  }

  async updateAccountingAccount(id: string, body: TAccountingAccount) {
    await accountingAccountModel.update(body, { where: { id, state: true } });
  }

  async deleteAcountingAccount(id: string) {
    await accountingAccountModel.update({ state: false }, { where: { id } });
  }

  //-------------GRUPO CUENTAS ---------------//

  async getAccountingGroups(id: any = null) {
    const result =
      id === null
        ? await accountingGroupModel.findAll({
            where: { state: true },
            order: ["accountNumber"],
          })
        : await accountingGroupModel.findOne({
            where: { id, state: true },
          });
    return result;
  }

  async addAccountingGroups(body: TAccountingGroup) {
    await accountingGroupModel.create(body);
  }

  async deleteAccountingGroups(id: string) {
    await accountingGroupModel.update({ state: false }, { where: { id } });
  }

  async updateAccountingGroups(body: TAccountingGroup, id: string) {
    await accountingGroupModel.update(body, { where: { id, state: true } });
  }

  //-------------TIPO CUENTAS ---------------//

  async getAccountType(id: any = null) {
    const result =
      id === null
        ? await accountTypeModel.findAll({
            attributes: ["id", "description", "state"],
            where: { state: true },
          })
        : await accountingGroupModel.findOne({
            attributes: ["id", "description", "state"],
            where: { id, state: true },
          });
    return result;
  }

  async addAccountType(body: TTypeGeneric) {
    await accountTypeModel.create(body);
  }

  async updateAccountType(body: TTypeGeneric, id: string) {
    await accountTypeModel.update(body, { where: { id, state: true } });
  }

  async deleteAccountType(id: string) {
    await accountTypeModel.update({ state: false }, { where: { id } });
  }

  //--------------MOVIMIENTO CUENTAS CONTABLES-------------//

  async addMovementAccounts(body: TMovementAccounts) {
    await movementAccountModel.create(body);
  }

  async getMovementAccounts(
    accountingAccountId: number[] | number = 0,
    startDate: string,
    endDate: string
  ) {
    const result = await movementAccountModel.findAll({
      include: [
        {
          model: accountingAccountModel,
          required: true,
          attributes: ["description", ["accountNumber", "account"]],
          where: { state: true },
        },
        {
          model: effectTypeModel,
          required: true,
          attributes: ["description"],
          where: { state: true },
        },
      ],
      where:
        accountingAccountId === 0
          ? {
              state: true,
              createdAt: { [Op.between]: [startDate, endDate] },
            }
          : {
              accountingAccountId,
              state: true,
              createdAt: { [Op.between]: [startDate, endDate] },
            },
    });

    return result;
  }
}
