import { Request, Response } from "express";
import { IFactura } from "interfaces/factura.interface";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import DetalleFacturaService from "../services/facturacion/facturas/detalleFactura.service";
import FacturasService from "../services/facturacion/facturas/facturas.service";

const facturas_service = new FacturasService();
const detalleFactura_service = new DetalleFacturaService();


export const getFacturas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const facturaResult: any = await facturas_service.getFacturas(
      id,
      req.empresaId
    );

    if (Object.entries(facturaResult).length == 0) {
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

    const factura: any = await facturas_service.addFactura(body);
    const { id } = factura.dataValues;
    const detalleFactura = await detalleFactura_service.addDetalleFactura(
      body.detalleFactura,
      id
    );

    res.json({ factura, detalleFactura });
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
