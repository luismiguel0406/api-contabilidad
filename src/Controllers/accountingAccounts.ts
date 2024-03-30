import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";
import AccountingAccountService from "../services/accounts/accountingAccount.service";

const accountingAccount_service = new AccountingAccountService();

//--------- CUENTAS CONTABLES ----------//

export const getAccountingAccounts = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    //const { companyId } = req;
    const accounts: any = await accountingAccount_service.getAccountingAccounts(
      id
    );

    if (Object.entries(accounts).length === 0) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.json({ accounts });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const addAccountingAccount = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await accountingAccount_service.addAccountingAccount(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

//CODES HERE

//---------GRUPOS CUENTAS CONTABLES ----------//
export const postAccountingGroups = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await accountingAccount_service.addAccountingGroups(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const getAccountingGroups = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result: any = await accountingAccount_service.getAccountingGroups(id);

    if (Object.entries(result).length === 0) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }

    res.json(result);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateAccountingGroups = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await accountingAccount_service.updateAccountingGroups(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteAccountingGroups = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await accountingAccount_service.deleteAccountingGroups(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

//---------TIPOS CUENTAS CONTABLES ----------//

export const getAccountTypes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result: any = await accountingAccount_service.getAccountType(id);

    if (Object.entries(result).length === 0) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.json({ accountTypes: result });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

//------------MOVIMIENTO DE CUENTAS CONTABLES---------------//

export const postMovementAccount = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await accountingAccount_service.addMovementAccounts(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const getMovementAccount = async (req: Request, res: Response) => {
  try {
    const { id, startDate, endDate } = req.params;
    let accountingAccountId = Number(id);
    const result = await accountingAccount_service.getMovementAccounts(
      accountingAccountId,
      startDate,
      endDate
    );

    if (!result) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.json({ movementAccount: result });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};
