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
    const facturaResult = await facturas_service.getFacturas(id);

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

    let Factura: any = <any>await facturas_service.addFactura(body);

    let detalleFactura: any = <any>(
      await detalleFactura_service.addDetalleFactura(
        body.detalleFactura,
        Factura.id
      )
    );
    // await detalleImpuesto_service.addDetalleImpuesto(detalleFactura.dataValues);
    return res.json({ Factura, DetalleFactura: detalleFactura });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const deleteFactura = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await facturas_service.deleteFactura(id);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

//NO EXISTE METODO UPDATE PARA FACTURAS//
