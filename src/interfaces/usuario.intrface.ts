export interface IUsuario {
  nombreUsuario: string;
  contrasena: string;
  email: string;
  estado: boolean;
  createAt: Date;
  updatedAt: Date | null;
  empresaId: number;
  perfilId: number;
}
