export interface ICuentaContable {
 
  cuenta: string;
  cuentaPadreId: number | null;
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  empresaId: number;
  monedaId: number;
  
}
