import direccionesModel from "../../models/Contacto/Direcciones.model";

export default class DireccionesService {
  async getDirecciones(id: any = null) {
    const direccionesResult =
      id === null
        ? await direccionesModel.findAll({ where: { estado: "1" } })
        : await direccionesModel.findOne({ where: { id, estado: "1" } });

    return direccionesResult;
  }

  async addDirecciones(body: any) {
    await direccionesModel.create(body);
  }

  async updateDirecciones(body: any, id: string) {
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
