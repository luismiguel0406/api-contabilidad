--TABLA EMPRESAS

CREATE TABLE "EMPRESA".empresa
(
    id SERIAL PRIMARY KEY NOT NULL ,
    nombre VARCHAR(50) NOT NULL,
	"inicialesEmpresa" VARCHAR(20),
    rnc VARCHAR(20),
    sucursal INT ,
    estado BIT NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
    "updatedAt" TIMESTAMP WITH TIME ZONE,
    direccion VARCHAR (100),
    telefono VARCHAR (20),
    correo VARCHAR (50),
    usuario VARCHAR(25) NOT NULL,
    termial VARCHAR (25) NOT NULL 
)
--INSERT EMPRESA EJEMPLO
INSERT INTO "EMPRESA".empresa(
    nombre,
	inicialesEmpresa,
    rnc,
    sucursal,
    estado,
    createdAt,
    updatedAt,
    direccion,
    telefono,
    correo,
    usuario,
    termial  
)
VALUES
('EMPRESA CACTUS','CA','123456','1','1',NOW(),NULL,'CALLE 1RA','809-555-5555','CORREO@EMAIL.COM','SA','SA')
-- SUCURSAL AGREGAR CAMPO