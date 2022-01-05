import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import DetalleFacturaService from "../services/facturacion/facturas/detalleFactura.service";
import FacturasService from "../services/facturacion/facturas/facturas.service";

const facturas_service = new FacturasService();
const detalleFactura_service = new DetalleFacturaService();

export const getFacturas = async (req: Request, res: Response) => {
  return res.json({ Message: " Invoice Works" });
};

export const addFactura = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const facturaResult = await facturas_service.addFactura(body);

   /* const { detalleFactura } = body;
    const detalleFacturaResult = await detalleFactura_service.addDetalleFactura(
      detalleFactura,
      facturaResult);*/
     return res.json({FacturaResultante :facturaResult})
    } 
   catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};
