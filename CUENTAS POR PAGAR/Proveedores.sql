-- TIPO DE PROVEEDORES
CREATE TABLE "PROVEEDORES".tb_tipo_proveedores(
tp_id_tipo_proveedor SERIAL PRIMARY KEY NOT NULL,
tp_descripcion VARCHAR(25),
tp_estado BIT NOT NULL,
tp_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
tp_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
tp_usuario VARCHAR(25) NOT NULL,
tp_terminal VARCHAR(25) NOT NULL		
)

INSERT INTO "PROVEEDORES".tb_tipo_proveedores(
tp_descripcion,
tp_estado ,
tp_fecha_ingreso,
tp_fecha_actualizacion,
tp_usuario,
tp_terminal
)
VALUES('LOCAL','1',NOW(),NULL,'SA','SA'),
      ('EXTRANJERO','1',NOW(),NULL,'SA','SA')

--PROVEEDORES

CREATE TABLE "PROVEEDORES".tb_proveedores(
p_id_proveedor SERIAL PRIMARY KEY NOT NULL,
p_id_tipo_proveedor INT,	
p_nombre VARCHAR(50),
p_rnc VARCHAR(15) UNIQUE,
p_cedula VARCHAR(15),
p_direccion VARCHAR(100),
p_estado BIT NOT NULL,
p_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
p_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
p_usuario VARCHAR(25) NOT NULL,
p_terminal VARCHAR(25) NOT NULL	,

CONSTRAINT PK_ID_TIPO_PROVEEDOR
FOREIGN KEY (p_id_tipo_proveedor)
REFERENCES "PROVEEDORES".tb_tipo_proveedores(tp_id_tipo_proveedor)	
--REVISAR
)

--INSERT PROVEEDORES
INSERT INTO "PROVEEDORES".tb_proveedores(
p_id_tipo_proveedor,	
p_nombre, 
p_rnc,
p_cedula,
p_direccion ,
p_estado ,
p_fecha_ingreso,
p_fecha_actualizacion, 
p_usuario ,
p_terminal
	
)VALUES(2,'PROVEEDOR EXTRANJERO EJEMPLO',345,NULL,NULL,'1',NOW(),NULL,'SA','SA'),
       (1,'PROVEEDOR LOCAL EJEMPLO',123,NULL,NULL,'1',NOW(),NULL,'SA','SA')

--CORREOS PROVEEDORES      

CREATE TABLE "PROVEEDORES".tb_correos(
c_id_correo SERIAL PRIMARY KEY NOT NULL,	
c_id_proveedor INT,
c_correo VARCHAR(50) NOT NULL,
c_estado bit NOT NULL,
c_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
c_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
c_usuario VARCHAR(25) NOT NULL,
c_terminal VARCHAR(25) NOT NULL,
	
CONSTRAINT PK_ID_PROVEEDOR
FOREIGN KEY (c_id_proveedor)
REFERENCES "PROVEEDORES".tb_proveedores(p_id_proveedor)
)

--TELEFONO PROVEEDORES
CREATE TABLE "PROVEEDORES".tb_telefonos(
 t_id_telefono SERIAL PRIMARY KEY NOT NULL,
 t_id_proveedor INT NOT NULL,
 t_telefono VARCHAR(25)NOT NULL,
 t_estado bit NOT NULL,
 t_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
 t_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
 t_usuario VARCHAR(25) NOT NULL,
 t_terminal VARCHAR(25) NOT NULL,	

CONSTRAINT PK_ID_PROVEEDOR
FOREIGN KEY (t_id_proveedor)
REFERENCES "PROVEEDORES".tb_proveedores(p_id_proveedor)
)
