import { IUsuario } from "../../interfaces/usuario.intrface";
import usuariosModel from "../../models/usuarios/usuario.model";

export default class UsuariosService {
  async addUsuario(body: IUsuario) {
    return await usuariosModel.create(body);
  }

  async getUsuario(id: any = null) {
    const usuarioResult =
      id === null
        ? await usuariosModel.findAll({ where: { estado: "1" } })
        : await usuariosModel.findOne({ where: { id, estado: "1" } });

    return usuarioResult;
  }

  async updateUsuario(body: IUsuario, id: string) {
    await usuariosModel.update(body, {
      where: { id, estado: "1" },
    });
  }

  async deleteUsuario(id: string) {
    await usuariosModel.update({ estado: "0" }, { where: { id } });
  }
}
