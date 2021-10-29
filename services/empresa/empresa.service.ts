import { empresa } from "../../interfaces/empresa.interface";
import empresasModel from "../../models/empresa.model";

export default class empresaService {
  async getEmpresa(id: any = null) {
    
    
    const empresaResult =  id === null 
          ? await empresasModel.findAll({ where: { estado: "1"} })
          : await empresasModel.findOne({ where: { id, estado : "1"} })
    return empresaResult;
  }

  async AddEmpresa(body: empresa) {
    const empresa = empresasModel.create(body);
    (await empresa).save();
  }

  async deleteEmpresa(id: string) {
    await empresasModel.update(
      { estado: "0" },
      {
        where: {
          id,
        },
      }
    );
  }

  async updateEmpresa(body: empresa, id: string) {
    await empresasModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }
}
