
--TABLA TIPO CLIENTES

CREATE TABLE "CLIENTES"."tipoClientes"(
   id SERIAL PRIMARY KEY NOT NULL,
   descripcion VARCHAR(25) NOT NULL,
   estado BIT NOT NULL,
   "createAt" TIMESTAMP WITH TIME ZONE NOT NULL,
   "updateAt" TIMESTAMP WITH TIME ZONE,
   usuario VARCHAR(25) NOT NULL,
   terminal VARCHAR(25) NOT NULL		
)

--TABLA CLIENTES

CREATE TABLE "CLIENTES".clientes(

	id SERIAL PRIMARY KEY NOT NULL,
	nombre VARCHAR(100) NOT NULL,
	RNC VARCHAR(25),
   direccion VARCHAR(100),
   "tipoClienteId" INT,
	"pagaItbis" BIT NOT NULL,
	estado BIT NOT NULL,
   "createAt" TIMESTAMP WITH TIME ZONE NOT NULL,
   "udatedAt" TIMESTAMP WITH TIME ZONE,
   usuario VARCHAR(25) NOT NULL,
   terminal VARCHAR(25) NOT NULL,
   empresaId INT NOT NULL

	/*
   CONSTRAINT PK_ID_TIPO_CLIENTE
	FOREIGN KEY ("tipoClienteId")
	REFERENCES "CLIENTES"."tipoClientes"(id)*/
)

--TABLA CORREOS

CREATE TABLE "CONTACTOS".correos(
   id	SERIAL PRIMARY KEY NOT NULL,
   correo VARCHAR(50) NOT NULL,
   estao bit NOT NULL,
   estado BIT NOT NULL,
   "createAt" TIMESTAMP WITH TIME ZONE NOT NULL,
   "udatedAt" TIMESTAMP WITH TIME ZONE,
   usuario VARCHAR(25) NOT NULL,
   terminal VARCHAR(25) NOT NULL,
   empresaId INT NOT NULL
  /* 
   CONSTRAINT PK_ID_CLIENTE
   FOREIGN KEY (c_id_cliente)
   REFERENCES "CLIENTES".tb_clientes(c_id_cliente)*/
   
)
--TABLA TELEFONOS

CREATE TABLE "CONTACTOS".telefonos(
   id	SERIAL PRIMARY KEY NOT NULL,
   telefono VARCHAR(50) NOT NULL,
   estao bit NOT NULL,
   estado BIT NOT NULL,
   "createAt" TIMESTAMP WITH TIME ZONE NOT NULL,
   "udatedAt" TIMESTAMP WITH TIME ZONE,
   usuario VARCHAR(25) NOT NULL,
   terminal VARCHAR(25) NOT NULL,
   empresaId INT NOT NULL
   /*
   CONSTRAINT PK_ID_CLIENTE
   FOREIGN KEY (t_id_cliente)
   REFERENCES "CLIENTES".tb_clientes(c_id_cliente)	*/
)

CREATE TABLE "CONTACTOS".direcciones(
   id	SERIAL PRIMARY KEY NOT NULL,
   direccion VARCHAR(50) NOT NULL,
   estao bit NOT NULL,
   estado BIT NOT NULL,
   "createAt" TIMESTAMP WITH TIME ZONE NOT NULL,
   "udatedAt" TIMESTAMP WITH TIME ZONE,
   usuario VARCHAR(25) NOT NULL,
   terminal VARCHAR(25) NOT NULL,
   empresaId INT NOT NULL
   /*
   CONSTRAINT PK_ID_CLIENTE
   FOREIGN KEY (t_id_cliente)
   REFERENCES "CLIENTES".tb_clientes(c_id_cliente)	*/
)
