--TABLA TIPO DE GASTOS
CREATE TABLE "FACTURACION".tb_tipos_gastos(
g_id_gasto SERIAL PRIMARY KEY NOT NULL,
g_descripcion VARCHAR(100) NOT NULL,
g_estado BIT NOT NULL,
g_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
g_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
g_usuario VARCHAR(25) NOT NULL,
g_terminal VARCHAR(25) NOT NULL	
)

INSERT INTO "FACTURACION".tb_tipos_gastos
(
g_descripcion,
g_estado,
g_fecha_ingreso,
g_fecha_actualizacion,
g_usuario,
g_terminal
)
VALUES ('00-NO ESPECIFICADO','1',NOW(),NULL,'SA','SA'),
       ('01-GASTOS DE PERSONAL','1',NOW(),NULL,'SA','SA'),
       ('02-GASTOS POR TRABAJOS, SUMINISTROS Y SERVICIOS','1',NOW(),NULL,'SA','SA'),
	   ('03-ARRENDAMIENTOS','1',NOW(),NULL,'SA','SA'),
	   ('04-GASTOS DE ACTIVOS FIJOS','1',NOW(),NULL,'SA','SA'),
	   ('05-GASTOS DE REPRESENTACIÓN','1',NOW(),NULL,'SA','SA'),
	   ('06-OTRAS DEDUCCIONES ADMITIDAS','1',NOW(),NULL,'SA','SA'),
	   ('07-GASTOS FINANCIEROS','1',NOW(),NULL,'SA','SA'),
	   ('08-GASTOS EXTRAORDINARIOS','1',NOW(),NULL,'SA','SA'),
	   ('09-COMPRAS Y GASTOS QUE FORMAN PARTE DEL COSTO DE VENTA','1',NOW(),NULL,'SA','SA'),
	   ('10-ADQUISICIONES DE ACTIVOS','1',NOW(),NULL,'SA','SA'),
	   ('11-GASTOS DE SEGUROS','1',NOW(),NULL,'SA','SA')
       -- PREGUNTA: LAS VENTAS SOLO GENERAN ITBIS ,NINGUN OTRO IMPUESTO?

--TIPO FACTURAS POR PAGAR
CREATE TABLE "FACTURACION".tb_tipo_factura_por_pagar(
tf_id_fact_por_pagar SERIAL PRIMARY KEY NOT NULL,
tf_descripcion VARCHAR(100) NOT NULL,
tf_estado BIT NOT NULL,
tf_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
tf_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
tf_usuario VARCHAR(25) NOT NULL,
tf_terminal VARCHAR(25) NOT NULL	
)

INSERT INTO "FACTURACION".tb_tipo_factura_por_pagar(
tf_descripcion,
tf_estado,
tf_fecha_ingreso,
tf_fecha_actualizacion,
tf_usuario,
tf_terminal)
VALUES('GASTO','1',NOW(),NULL,'SA','SA'),
      ('NOTA DE CREDITO','1',NOW(),NULL,'SA','SA')

 --FACTURAS POR PAGAR

 CREATE TABLE "FACTURACION".tb_facturas_por_pagar(
fp_id_factura SERIAL PRIMARY KEY NOT NULL,
fp_id_tipo_factura INT NOT NULL,
fp_numero VARCHAR(25),
fp_ncf VARCHAR(25) ,
fp_ncf_modificado VARCHAR(25),
fp_id_empresa INT,
fp_id_proveedor INT,
fp_id_moneda INT,
fp_id_medio_de_pago INT NOT NULL,
fp_subtotal DECIMAL (18,2),
fp_id_impuesto INT,
fp_descuento DECIMAL (18,2),
fp_total DECIMAL (18,2),
fp_comentario VARCHAR(250),
fp_fecha_factura TIMESTAMP WITH TIME ZONE NOT NULL,
fp_id_cheque INT,
fp_fecha_limite_pago TIMESTAMP WITH TIME ZONE, 
fp_estado VARCHAR(10),
fp_fecha_de_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
fp_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
fp_usuario VARCHAR(25) NOT NULL,
fp_terminal VARCHAR(25) NOT NULL,
	
	CONSTRAINT PK_ID_TIPO_FACTURA
	FOREIGN KEY(fp_id_tipo_factura)
	REFERENCES "FACTURACION".tb_tipo_factura_por_pagar(tf_id_fact_por_pagar),
	
	CONSTRAINT PK_ID_EMPRESA
	FOREIGN KEY (fp_id_empresa)
	REFERENCES "EMPRESA".tb_empresa(e_id_empresa),
	
	CONSTRAINT PK_ID_PROVEEDOR
	FOREIGN KEY (fp_id_proveedor)
	REFERENCES "PROVEEDORES".tb_proveedores(p_id_proveedor),
	
	CONSTRAINT PK_ID_MONEDA
	FOREIGN KEY (fp_id_moneda)
	REFERENCES "FACTURACION".tb_moneda(m_id_moneda),
	
	CONSTRAINT PK_ID_MEDIO_DE_PAGO
	FOREIGN KEY (fp_id_medio_de_pago)
	REFERENCES "FACTURACION".tb_medios_de_pago(mp_id_medio_de_pago),
	
	CONSTRAINT PK_ID_IMPUESTO
	FOREIGN KEY (fp_id_impuesto)
	REFERENCES "FACTURACION".tb_impuestos(i_id_impuesto)
		
	CONSTRAINT PK_ID_CHEQUE
	FOREIGN KEY (fp_id_cheque)
	REFERENCES "FACTURACION".tb_cheques(ch_id_cheque)
	
)     

--CHEQUES 
CREATE TABLE "FACTURACION".tb_cheques(
ch_id_cheque SERIAL PRIMARY KEY NOT NULL,
ch_numeracion INT NOT NULL,
ch_beneficiario VARCHAR(100) NOT NULL,
ch_valor DECIMAL(18,2) NOT NULL,
ch_concepto VARCHAR(100) NOT NULL,
ch_id_empresa INT,
ch_estado VARCHAR(10),
ch_fecha_de_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
ch_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
ch_usuario VARCHAR(25) NOT NULL,
ch_terminal VARCHAR(25) NOT NULL,

CONSTRAINT PK_ID_EMPRESA
FOREIGN KEY (ch_id_empresa)
REFERENCES "EMPRESA".tb_empresa(e_id_empresa)
)


--MEDIOS DE PAGO

CREATE TABLE "FACTURACION".tb_medios_de_pago(
mp_id_medio_de_pago SERIAL PRIMARY KEY NOT NULL,
mp_descripcion VARCHAR(100) NOT NULL,
mp_estado BIT NOT NULL,
mp_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
mp_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
mp_usuario VARCHAR(25) NOT NULL,
mp_terminal VARCHAR(25) NOT NULL	
)

INSERT INTO "FACTURACION".tb_medios_de_pago(
mp_descripcion,
mp_estado ,
mp_fecha_ingreso ,
mp_fecha_actualizacion,
mp_usuario,
mp_terminal
)
VALUES('EFECTIVO','1',NOW(),NULL,'SA','SA')