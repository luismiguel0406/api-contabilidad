export interface cuentaContable {
  
  cuenta: string;
  idCuentaPadre: number;
  descripcion: string;
  idEmpresa: number;
  idMoneda: number;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  
}
