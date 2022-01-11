import { IUsuario } from "../../interfaces/usuario.intrface";
import usuarios from "../../models/usuarios/usuario.model";

export default class UsuariosService {
  async addUsuario(body: IUsuario) {
    await usuarios.create(body);
  }
}
