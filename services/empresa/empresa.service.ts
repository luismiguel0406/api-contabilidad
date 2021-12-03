import { IEmpresa } from "../../interfaces/empresa.interface";
import empresasModel from "../../models/Empresa/empresa.model";

export default class EmpresaService {
  async getEmpresa(id: any = null) {
    const empresaResult =
      id === null
        ? await empresasModel.findAll({ where: { estado: "1" } })
        : await empresasModel.findOne({ where: { id, estado: "1" } });
    return empresaResult;
  };

  async AddEmpresa(body: IEmpresa) {
    await empresasModel.create(body);
  };

  async deleteEmpresa(id: string) {
    await empresasModel.update(
      { estado: "0" },
      {
        where: {
          id,
        },
      }
    );
  };

  async updateEmpresa(body: IEmpresa, id: string) {
    await empresasModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  };
};
