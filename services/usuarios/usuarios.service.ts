import { IUsuario } from "../../interfaces/usuario.intrface";
import usuariosModel from "../../models/usuarios/usuario.model";

export default class UsuariosService {
  async addUsuario(body: IUsuario) {
    return await usuariosModel.create(body);
  }

  async getUsuario(email:string, empresaId: string) {
    const usuarioResult = await usuariosModel.findAll({
      attributes: {exclude:["contrasena"]},
      where: { email, empresaId, estado: "1" },
    });
    
    return usuarioResult;
  }

  async updateUsuario(body: IUsuario, id: string, empresaId:string) {
    await usuariosModel.update(body, {
      where: { id, empresaId, estado: "1" },
    });
  }

  async deleteUsuario(id: string, empresaId: string) {
    await usuariosModel.update({ estado: "0" }, { where: { id, empresaId } });
  }
}
