--TIPO DE VENTA

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
('VENTAS SERVICIOS COMPROBANTE',2,'1',NOW(),NULL,'SA','SA'),
('VENTAS SERVICIO CONSUMO',2,'1',NOW(),NULL,'SA','SA'),
('VENTAS AL ESTADO',2,'1',NOW(),NULL,'SA','SA'),
('VENTAS DE REGIMENES ESPECIALES',2,'1',NOW(),NULL,'SA','SA'),
('VENTAS AL EXTERIOR',2,'1',NOW(),NULL,'SA','SA')

--**************************************************************--
-- TABLA TIPO DE COMPROBANTE

CREATE TABLE "FACTURACION".tb_tipo_comprobante(
tc_id_comprobante SERIAL PRIMARY KEY NOT NULL,
tc_tipo VARCHAR(10)NOT NULL,
tc_descripcion VARCHAR(50) NOT NULL,
tc_estado BIT NOT NULL,
tc_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
tc_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
tc_usuario VARCHAR(25) NOT NULL,
tc_terminal VARCHAR(25) NOT NULL)

--INSERT TIPO DE COMPROBANTE

INSERT INTO "FACTURACION".tb_tipo_comprobante(
tc_tipo,
tc_descripcion,
tc_estado,
tc_fecha_ingreso,
tc_fecha_actualizacion,
tc_usuario,
tc_terminal
)
VALUES
('B01','FISCAL','1',NOW(),NULL,'SA','SA'),
('B02','CONSUMO','1',NOW(),NULL,'SA','SA'),
('B04','NOTAS DE CREDITO','1',NOW(),NULL,'SA','SA'),
('B11','COMPRAS','1',NOW(),NULL,'SA','SA'),
('B12','REGISTRO UNICO DE INGRESOS','1',NOW(),NULL,'SA','SA'),
('B13','GASTOS MENORES','1',NOW(),NULL,'SA','SA'),
('B14','REGIMEN ESPECIAL','1',NOW(),NULL,'SA','SA'),
('B15','GUBERNAMENTAL','1',NOW(),NULL,'SA','SA'),
('B16','EXPORTACIONES','1',NOW(),NULL,'SA','SA'), 
('B17','PAGOS AL EXTERIOR','1',NOW(),NULL,'SA','SA'),
('E-CF','ELECTRONICO','1',NOW(),NULL,'SA','SA')

-- TABLA IMPUESTOS

CREATE TABLE "FACTURACION".tb_impuestos(
i_id_impuesto SERIAL PRIMARY KEY NOT NULL,
i_nombre VARCHAR(50),
i_alias VARCHAR(15),
i_porcentaje DECIMAL(18,2) DEFAULT 0.00,
i_estado BIT NOT NULL,
i_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
i_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
i_usuario VARCHAR(25) NOT NULL,
i_terminal VARCHAR(25) NOT NULL)

--INSERT IMPUESTOS

INSERT INTO "FACTURACION".tb_impuestos(
i_nombre,
i_alias,
i_porcentaje,
i_estado,
i_fecha_ingreso,
i_fecha_actualizacion,
i_usuario,
i_terminal
)VALUES
('ITBIS FACTURADO','ITBIS',0.18,'1',NOW(),NULL,'SA','SA'),
('IMPUESTO SELECTIVO AL CONSUMO','ISC',0,'1',NOW(),NULL,'SA','SA'),
('ITBIS RETENIDO','ITB RET',0,'1',NOW(),NULL,'SA','SA'),-- ITBIS TIENE TRATAMIENTO ESPECIAL ,OJO 
('ITBIS SUJETO A PORPORCIONALIDAD','ISP',0,'1',NOW(),NULL,'SA','SA'),
('ITBIS LLEVADO AL COSTO','ILC',0,'1',NOW(),NULL,'SA','SA'),
('ITBIS POR ADELANTAR','ITBPA',0,'1',NOW(),NULL,'SA','SA'),
('ITBIS COMPRAS','ITBC',0,'1',NOW(),NULL,'SA','SA'),
('IMPUESTO SOBRE LA RENTA','ISR',0,'1',NOW(),NULL,'SA','SA'),
('PROPINA LEGAL','PL',0.1,'1',NOW(),NULL,'SA','SA'),
('OTROS/TASA','OT',0,'1',NOW(),NULL,'SA','SA'),
('CDT','CDT',0.02,'1',NOW(),NULL,'SA','SA')

--TABLA MONEDA

CREATE TABLE "FACTURACION".tb_moneda(
m_id_moneda SERIAL PRIMARY KEY NOT NULL,
m_descripcion VARCHAR(25),
m_simbolo VARCHAR(25),
m_estado BIT NOT NULL,
m_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
m_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
m_usuario VARCHAR(25) NOT NULL,
m_terminal VARCHAR(25) NOT NULL	
)

INSERT INTO "FACTURACION".tb_moneda(
m_descripcion,
m_simbolo,
m_estado,
m_fecha_ingreso,
m_fecha_actualizacion,
m_usuario,
m_terminal 
)
VALUES
('DOP','RD$','1',NOW(),NULL,'SA','SA'),
('US','US$','1',NOW(),NULL,'SA','SA'),
('EUR','€$','1',NOW(),NULL,'SA','SA')

--TABLA FACTURAS

CREATE TABLE "FACTURACION".tb_factura(
f_id_factura SERIAL PRIMARY KEY NOT NULL,
f_numero INT NOT NULL,--AUTO GENERA POR EMPRESA
f_ncf VARCHAR(25),--SE AUTOGENERA POR QUIEN INGRESA 
f_ncf_modificado VARCHAR(25),
f_id_empresa INT NOT NULL,
f_id_cliente INT NOT NULL,
f_id_moneda INT,	
f_subtotal DECIMAL(18,2),
f_descuento DECIMAL(18,2),
f_id_impuesto INT ,
f_total DECIMAL(18,2),
f_comentario VARCHAR(100),
f_fecha_factura TIMESTAMP WITH TIME ZONE,
f_fecha_vencimiento TIMESTAMP WITH TIME ZONE,
f_estado VARCHAR(25) NOT NULL,
f_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
f_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
f_usuario VARCHAR(25) NOT NULL,
f_terminal VARCHAR(25) NOT NULL,	
	
	CONSTRAINT PK_ID_EMPRESA
	FOREIGN KEY(f_id_empresa)
	REFERENCES "EMPRESA".tb_empresa(e_id_empresa),
	
	CONSTRAINT PK_ID_CLIENTE
	FOREIGN KEY (f_id_cliente)
	REFERENCES "CLIENTES".tb_clientes(c_id_cliente),
	
	CONSTRAINT PK_ID_MONEDA
	FOREIGN KEY (f_id_moneda)
	REFERENCES "FACTURACION".tb_moneda(m_id_moneda),
	
	CONSTRAINT PK_ID_IMPUESTO
	FOREIGN KEY(f_id_impuesto)
	REFERENCES "FACTURACION".tb_impuestos(i_id_impuesto)

)

