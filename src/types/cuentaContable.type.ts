export type TTipoCuentaContable = {
    descripcion: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
  }
  export type TGrupoCuentaContable = {
    cuenta: string;
    descripcion: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    tipoCuentaContableId: number | null;
    monedaId: number;
  }
  export type TCuentaContable = {
    noCuenta: string;
    descripcion: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    tipoCuentaId: number;
    grupoCuentaId: number;
    monedaId:number;
    empresaId: number;
  }
  export type TMovimientoCuentas = {
    createdAt: Date;
    cuentaContableId:string;
    tipoRegistroId:number;
    tipoEfectoId:number;
    monto:number;
    descripcion:string;
    usuario:string;
    terminal:string;
    referenciaId:number;
    transaccionId:number;
    saldo:number;
  }