
--TABLA TIPO CLIENTES

CREATE TABLE "CLIENTES".tb_tipos_clientes(
   tc_id_tipo_cliente SERIAL PRIMARY KEY NOT NULL,
   tc_tipo_cliente VARCHAR(25) NOT NULL,
   tc_estado BIT NOT NULL,
   tc_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
   tc_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
   tc_usuario VARCHAR(25) NOT NULL,
   tc_terminal VARCHAR(25) NOT NULL		
)

--TABLA CLIENTES

CREATE TABLE "CLIENTES".tb_clientes(

	c_id_cliente SERIAL PRIMARY KEY NOT NULL,
	c_nombre VARCHAR(100) NOT NULL,
	c_rnc VARCHAR(25),
   c_tipo_cliente INT,
	c_paga_itbis BIT NOT NULL,
	c_estado BIT NOT NULL,
   c_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
   c_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
   c_usuario VARCHAR(25) NOT NULL,
   c_terminal VARCHAR(25) NOT NULL,
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
--TABLA DIRECCIONES

CREATE TABLE "CLIENTES".tb_direcciones(  
   d_id_direccion SERIAL PRIMARY KEY NOT NULL,
   d_id_cliente  INT NOT NULL,
   d_direccion VARCHAR(100) NOT NULL,
   d_estado BIT NOT NULL,
   d_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
   d_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
   d_usuario VARCHAR(25) NOT NULL,
   d_terminal VARCHAR(25) NOT NULL,	
   CONSTRAINT PK_ID_CLIENTE
   FOREIGN KEY (d_id_cliente)
   REFERENCES "CLIENTES".tb_clientes(c_id_cliente)
)