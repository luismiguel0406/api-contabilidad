import { Response, Request } from "express";
import moneda from "../models/moneda.model";

export const getMoneda = async (req: Request, res: Response) => {
  try {
    const monedaResultado = await moneda.findAll();
    res.status(200).json(monedaResultado);
  } catch (error) {
    res.status(404).json({ Message: "No hay cuentas", error });
  }
};
