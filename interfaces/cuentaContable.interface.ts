export interface ICuentaContable {
 
  cuenta: string;
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  cuentaPadreId: number | null;
  empresaId: number;
  monedaId: number;
  
}
