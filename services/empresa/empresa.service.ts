import { empresa } from "../../interfaces/empresa.interface";
import empresasModel from "../../models/empresa.model";

export default class empresaService {
  async getEmpresa(id: string) {
    const empresa = await empresasModel.findAll({
      where:{
        estado: "1"
      }
    });
    return empresa;
  }

  async AddEmpresa(body: empresa) {
    const empresa = empresasModel.create(body);
    (await empresa).save();
  }

  async deleteEmpresa(id:string) {
   await empresasModel.update(
      { estado: "0" },
      {
        where: {
          id,
        },
      }
    );
  }
}
