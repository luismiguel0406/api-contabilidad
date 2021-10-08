import { Response, Request } from "express";
import monedaService from "../services/facturacion/monedas.service";

export const getMoneda = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const moneda_Service = new monedaService();
    const monedaResult = await moneda_Service.getMoneda(id);

    if (monedaResult === null) {
      return res.status(204).json({ Message: "No content" });
    }
    res.status(200).json({ Monedas: monedaResult });
  } catch (error) {
    res.status(404).json({ Message: "Ha ocurrido un error ", error });
  }
};
