declare namespace Express {
  export interface Request {
    userId: string;
    companyId: string;
    roleId: string;
    username: string;
  }
}
