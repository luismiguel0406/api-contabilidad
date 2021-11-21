import { IDireccion } from "../../interfaces/contactos.interface";
import direccionesModel from "../../models/Contacto/Direcciones.model";

export default class DireccionService {
  async getDirecciones(id: any = null) {
    const direccionesResult =
      id === null
        ? await direccionesModel.findAll({ where: { estado: "1" } })
        : await direccionesModel.findOne({ where: { id, estado: "1" } });

    return direccionesResult;
  }

  async addDirecciones(body: IDireccion) {
    await direccionesModel.create(body);
  }

  async updateDirecciones(body: IDireccion, id: string) {
    await direccionesModel.update(
        body, 
        { 
            where:
            { id, estado: "1" } 
        });
  }
  async deleteDirecciones(id: string) {
    await direccionesModel.update(
        { estado: "0" },
         { where: 
            { id }
         });
  }
}
