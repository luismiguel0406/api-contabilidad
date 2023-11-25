export type TUser = {
  id?: number;
  username: string;
  password: string;
  email: string;
  state: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  companyId: number;
  roleId: number;
};
