import correosModel from "../../models/Contacto/Correos.model";

export default class CorreoService {
  async getCorreos(id: any = null) {
    const correo =
      id === null
        ? await correosModel.findAll({ where: { estado: "1" } })
        : await correosModel.findOne({ where: { id, estado: "1" } });

    return correo;
  };

  async AddCorreo(body:any) {
    await correosModel.create(body);
    
  };

  async deleteCorreo(id: string) {
    await correosModel.update(
      { estado: "0" },
      {
        where: {
          id,
        },
      }
    );
  };

  async updateEmpresa(body: any, id: string) {
    await correosModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  };
};

