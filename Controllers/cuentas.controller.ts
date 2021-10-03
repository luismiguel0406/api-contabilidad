import { Response, Request } from "express";
import cuentasContables from "../models/CuentasContablesPadres.model";

export const getCuentasPadre = async (req: Request, res: Response) => {
  try {

    //await cuentas.sync({ alter: true })
    const CuentasResultado = await cuentasContables.findAll();

    res.status(200).json(CuentasResultado);
  } catch (error) {
    console.log(error);
  }
  
};
