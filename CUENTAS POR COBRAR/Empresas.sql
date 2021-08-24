--TABLA EMPRESAS

CREATE TABLE "EMPRESA".tb_empresa
(
    e_id_empresa SERIAL PRIMARY KEY NOT NULL ,
    e_nombre VARCHAR(50) NOT NULL,
	e_iniciales_empresa VARCHAR(20),
    e_rnc VARCHAR(20),
    e_sucursal INT ,
    e_estado BIT NOT NULL,
    e_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
    e_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
    e_direccion VARCHAR (100),
    e_telefono VARCHAR (20),
    e_correo VARCHAR (50),
    e_usuario VARCHAR(25) NOT NULL,
    e_termial VARCHAR (25) NOT NULL 
)
-- SUCURSAL AGREGAR CAMPO