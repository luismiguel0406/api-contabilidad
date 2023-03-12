export interface IUsuario {
  [index:number]:number;
  [index:symbol]:symbol;
  nombreUsuario: string;
  contrasena: string;
  email: string;
  estado: boolean;
  createAt: Date;
  updatedAt: Date | null;
  empresaId: number;
  perfilId: number;
}
