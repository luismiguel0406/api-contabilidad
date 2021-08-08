--TABLA EMPRESAS
-- ESQUEMA *CUENTAS*
CREATE TABLE "CUENTAS".tb_empresa
(
    e_id_empresa SERIAL PRIMARY KEY NOT NULL ,
    e_nombre VARCHAR(50) NOT NULL,
	e_iniciales_empresa VARCHAR(20),
    e_rnc VARCHAR(20),
    e_estado bit(1) NOT NULL,
    e_fecha timestamp without time zone NOT NULL,
    e_direccion VARCHAR (100),
    e_telefono VARCHAR (20),
    e_email VARCHAR (50),
    e_usuario VARCHAR(25) NOT NULL,
    e_termial VARCHAR (25) NOT NULL  
)