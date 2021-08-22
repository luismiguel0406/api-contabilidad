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

--**************************************************************--


CREATE TABLE "FACTURACION".tb_tipo_comprobante(
tc_id_comprobante SERIAL PRIMARY KEY NOT NULL,
tc_tipo VARCHAR(10)NOT NULL,
tc_descripcion VARCHAR(50) NOT NULL,
tc_estado BIT NOT NULL,
tc_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
tc_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
tc_usuario VARCHAR(25) NOT NULL,
tc_terminal VARCHAR(25) NOT NULL)


CREATE TABLE "FACTURACION".tb_impuestos(
i_id_impuesto SERIAL PRIMARY KEY NOT NULL,
i_nombre VARCHAR(50),
i_alias VARCHAR(15),
i_porcentaje DECIMAL(18,4) DEFAULT 1,
i_estado BIT NOT NULL,
i_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
i_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
i_usuario VARCHAR(25) NOT NULL,
i_terminal VARCHAR(25) NOT NULL)
	


CREATE TABLE "FACTURACION".tb_factura(
f_id_factura SERIAL PRIMARY KEY NOT NULL,
f_numero INT(50) NOT NULL,
f_ncf VARCHAR(25),	
f_id_empresa INT NOT NULL,
f_id_cliente INT NOT NULL,
f_moneda INT	
f_subtotal DECIMAL(18,4),
f_descuento DECIMAL(18,4),
f_id_impuesto INT ,
f_total DECIMAL(18,4),
f_fecha_factura TIMESTAMP WITH TIME ZONE,
f_fecha_vencimiento TIMESTAMP WITH TIME ZONE,
f_estado VARCHAR(25) NOT NULL,-- OJO VERIFICAR ESTADO SI SERA BIT O POR LETRAS
f_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
f_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
f_usuario VARCHAR(25) NOT NULL,
f_terminal VARCHAR(25) NOT NULL)
	
	
	
	
	
	CONSTRAINT PK_ID_EMPRESA
	FOREIGN KEY(f_id_empresa)
	REFERENCES "EMPRESA".tb_empresa(e_id_empresa),
	
	CONSTRAINT PK_ID_CLIENTE
	FOREIGN KEY (f_id_cliente)
	REFERENCES "CLIENTE".tb_cliente(c_id_cliente),
	
	CONSTRAINT PK_ID_IMPUESTO
	FOREIGN KEY(f_id_impueesto)
	REFERENCES "FACTURACION".tb_impuestos(i_id_impuesto)

)

