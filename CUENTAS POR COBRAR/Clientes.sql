
--TABLA TIPO CLIENTES

CREATE TABLE "CLIENTES".tb_tipos_clientes(
   id SERIAL PRIMARY KEY NOT NULL,
   descripcion VARCHAR(25) NOT NULL,
   estado BIT NOT NULL,
   "createAt" TIMESTAMP WITH TIME ZONE NOT NULL,
   "updateAt" TIMESTAMP WITH TIME ZONE,
   usuario VARCHAR(25) NOT NULL,
   terminal VARCHAR(25) NOT NULL		
)

--TABLA CLIENTES

CREATE TABLE "CLIENTES".tb_clientes(

	id SERIAL PRIMARY KEY NOT NULL,
	nombre VARCHAR(100) NOT NULL,
	RNC VARCHAR(25),
   direccion VARCHAR(100),
   "tipoCliente" INT,
	"pagaItbis" BIT NOT NULL,
	estado BIT NOT NULL,
   "createAt" TIMESTAMP WITH TIME ZONE NOT NULL,
   "udatedAt" TIMESTAMP WITH TIME ZONE,
   usuario VARCHAR(25) NOT NULL,
   terminal VARCHAR(25) NOT NULL,
   
	CONSTRAINT PK_ID_TIPO_CLIENTE
	FOREIGN KEY (c_tipo_cliente)
	REFERENCES "CLIENTES".tb_tipos_clientes(tc_id_tipo_cliente)
)

--TABLA CORREOS

CREATE TABLE "CLIENTES".tb_correos(
   c_id_correo	SERIAL PRIMARY KEY NOT NULL,
   c_id_cliente INT NOT NULL,
   c_correo VARCHAR(50) NOT NULL,
   c_estado bit NOT NULL,
   c_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
   c_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
   c_usuario VARCHAR(25) NOT NULL,
   c_terminal VARCHAR(25) NOT NULL,	
   CONSTRAINT PK_ID_CLIENTE
   FOREIGN KEY (c_id_cliente)
   REFERENCES "CLIENTES".tb_clientes(c_id_cliente)
   
)
--TABLA TELEFONOS

CREATE TABLE "CLIENTES".tb_telefonos(
   t_id_telefono SERIAL PRIMARY KEY NOT NULL,
   t_id_cliente INT NOT NULL,
   t_telefono VARCHAR(25)NOT NULL,
   t_estado bit NOT NULL,
   t_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
   t_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
   t_usuario VARCHAR(25) NOT NULL,
   t_terminal VARCHAR(25) NOT NULL,	
   CONSTRAINT PK_ID_CLIENTE
   FOREIGN KEY (t_id_cliente)
   REFERENCES "CLIENTES".tb_clientes(c_id_cliente)	
)
