export type TImpuestos = {
    nombre: string;
    alias: string;
    porcentaje: number;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
  }
  
  export type TDetalleImpuestos = {
    impuestoId: number;
    monto: number;
  }
  