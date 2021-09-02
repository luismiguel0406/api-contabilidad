-- PROVEEDORES
CREATE TABLE "PROVEEDORES".tb_tipo_proveedores(
tp_id_proveedor SERIAL PRIMARY KEY NOT NULL,
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