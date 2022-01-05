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

    let facturaResult: any = <any>await facturas_service.addFactura(body);

    let detalleFactura: any = <any>(
      await detalleFactura_service.addDetalleFactura(
        body.detalleFactura,
        facturaResult.id
      )
    );
//ENVIAR ARREGLO DE DETALLE FACTURAS
    return res.json({ FACTURA: facturaResult, DETALLE: detalleFactura });

  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};
