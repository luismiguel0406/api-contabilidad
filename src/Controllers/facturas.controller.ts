import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import DetalleFacturaService from "../services/facturacion/facturas/detalleFactura.service";
import FacturasService from "../services/facturacion/facturas/facturas.service";
import DetalleImpuestoService from "../services/facturacion/impuestos/detalleImpuesto.service";

const facturas_service = new FacturasService();
const detalleFactura_service = new DetalleFacturaService();
const detalleImpuesto_service = new DetalleImpuestoService();

export const getFacturas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const facturaResult = await facturas_service.getFacturas(id, req.empresaId);

    if (!facturaResult) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.json({ Facturas: facturaResult });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const addFactura = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const factura:any = await facturas_service.addFactura(body);

    return res.json({ factura }); 
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const deleteFactura = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await facturas_service.deleteFactura(id, req.empresaId);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

//NO EXISTE METODO UPDATE PARA FACTURAS//
