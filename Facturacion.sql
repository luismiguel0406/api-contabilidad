CREATE TABLE "FACTURACION".tb_tipo_venta(
tv_id_tipo_venta SERIAL PRIMARY KEY NOT NULL,
tv_descripcion_tipo VARCHAR(50) NOT NULL,
tv_id_tipo_item INT NOT NULL,	
tv_estado BIT NOT NULL,
tv_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
tv_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
tv_usuario VARCHAR(25) NOT NULL,
tv_terminal VARCHAR(25) NOT NULL,
CONSTRAINT PK_TIPO_ITEM
FOREIGN KEY (tv_id_tipo_item)	
REFERENCES "INVENTARIO".tb_tipo_item(ti_id_tipo_item)	
)

--INSERT TIPO VENTAS

INSERT INTO "FACTURACION".tb_tipo_venta(
tv_descripcion_tipo,
tv_id_tipo_item,	
tv_estado,
tv_fecha_ingreso,
tv_fecha_actualizacion,
tv_usuario,
tv_terminal	
)
VALUES
('VENTAS DE BIENES CON VALOR FISCAL',1,'1',NOW(),NULL,'SA','SA'),
('VENTAS DE BIENES DE CONSUMO',1,'1',NOW(),NULL,'SA','SA'),
('VENTAS COMPROBANTE',2,'1',NOW(),NULL,'SA','SA'),
('VENTAS DE CONSUMO',2,'1',NOW(),NULL,'SA','SA'),
('VENTAS AL ESTADO',2,'1',NOW(),NULL,'SA','SA'),
('VENTAS DE REGIMENES ESPECIALES',2,'1',NOW(),NULL,'SA','SA'),
('VENTAS AL EXTERIOR',2,'1',NOW(),NULL,'SA','SA')
