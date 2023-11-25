import { TUser } from "types";
import usersModel from "../../models/user/user.model";

export default class UserService {
  async addUser(body: TUser) {
    return await usersModel.create(body);
  }

  async getUser(email: string, companyId: string) {
    const result = await usersModel.findOne({
      where: { email, companyId, state: true },
    });
    return result;
  }

  async updateUser(body: TUser, id: string, companyId: string) {
    await usersModel.update(body, {
      where: { id, companyId, state: true },
    });
  }

  async deleteUser(id: string, companyId: string) {
    await usersModel.update({ state: false }, { where: { id, companyId } });
  }
}
