import tipoProveedor from "../../models/Proveedores/tipoProveedores.model";

export class InsertarTiposProveedores{

  private tipoProveedoresArray:Array<{}> ;
  
  // AGREGO TIPO AL INICIO DEL PROGRAMA //
  constructor(){
    this.tipoProveedoresArray = [ {
      tipoProveedor: "LOCAL",
      estado: true,
      createdAt: new Date(),
      updatedAt: null,
      usuario: "SA",
      terminal: "SA",
    },
    {
      tipoProveedor: "EXTRANJERO",
      estado: true,
      createdAt: new Date(),
      updatedAt: null,
      usuario: "SA",
      terminal: "SA",
    },
    {
      tipoProveedor: "INFORMAL",
      estado: true,
      createdAt: new Date(),
      updatedAt: null,
      usuario: "SA",
      terminal: "SA",
    },
  ]
    tipoProveedor.afterSync("CreaTiposProveedores", () => {
      try {
         tipoProveedor.bulkCreate(this.tipoProveedoresArray)
         
      } catch (error) {
        console.error(error, "Error insertando tipos proveedores");
      }
    });
  }
  
}
