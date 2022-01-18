import { ICorreo } from "../../interfaces/contactos.interface";
import correosModel from "../../models/Contacto/Correos.model";

export default class CorreoService {
  async getCorreos(id: any = null) {
    const correoResult =
      id === null
        ? await correosModel.findAll({ where: { estado: "1" } })
        : await correosModel.findOne({ where: { id, estado: "1" } });

    return correoResult;
  }

  async AddCorreo(body:ICorreo) {
  
   await  correosModel.create(body);  
    
  }

  async deleteCorreo(id: string) {
    await correosModel.update(
      { estado: "0" },
      {
        where: {
          id,
        },
      }
    );
  }

  async updateCorreo(body: ICorreo, id: string) {
    await correosModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }
}
