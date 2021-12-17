import { IMedioDePago } from "../../../interfaces/medioDePago.interface";
import mediosDePagoModel from "../../../models/Facturacion/medioDePago/medioDePago.model";


export default class MedioDePagoService {
    async getMedioDePago(id: any = null) {
      const medioDePagoResult =
        id === null
          ? await mediosDePagoModel.findAll({ where: { estado: "1" } })
          : await mediosDePagoModel.findOne({ where: { id, estado: "1" } });
  
      return medioDePagoResult;
    }
  
    async updateMedioDePago(id: string, body: IMedioDePago) {
      await mediosDePagoModel.update(body, {
        where: {
          id,
          estado: "1",
        },
      });
    }
  
    async deleteMedioDePago(id: string) {
      await mediosDePagoModel.update(
        { estado: "0" },
        {
          where: { id },
        }
      );
    }
  
    async addMedioDePago(body: IMedioDePago) {
      await mediosDePagoModel.create(body);
    }
  }