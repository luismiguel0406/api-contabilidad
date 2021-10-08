import empresasModel from "../../models/empresa.model";

export default class empresaService {
  async getEmpresa(id: string) {
    const empresa = await empresasModel.findAll({});
    return empresa;
  }
}
