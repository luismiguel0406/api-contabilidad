-- ESQUEMA *CUENTAS*
--TABLA CUENTAS CONABLES PADRES
CREATE TABLE "CUENTAS".tb_cuentas_contables_padres
(
ccp_id SERIAL PRIMARY KEY NOT NULL,
ccp_no_cuenta INT NOT NULL,
ccp_descripcion VARCHAR(50) NOT NULL,
ccp_cuenta_padre INT NOT NULL DEFAULT 0,
ccp_id_empresa INT NOT NULL,
ccp_estado BIT NOT NULL,
ccp_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
ccp_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
ccp_usuario VARCHAR(25) NOT NULL,
ccp_terminal VARCHAR(25) NOT NULL,	
CONSTRAINT PK_EMPRESA
FOREIGN KEY (ccp_id_empresa) 
REFERENCES "EMPRESA".tb_empresa(e_id_empresa)

)

--INSERT TABLA CUENTAS CONTABLES PADRES
INSERT INTO "CUENTAS".tb_cuentas_contables_padres (
	ccp_no_cuenta, 
	ccp_descripcion, 
	ccp_cuenta_padre, 
	ccp_id_empresa, 
	ccp_estado, 
	ccp_fecha_ingreso, 
	ccp_fecha_actualizacion, 
	ccp_usuario, 
	ccp_terminal
		) 
VALUES 
 (1,'ACTIVOS',0,1,'1',NOW(),NULL,'SA','SA'), --1

 (10,'ACTIVOS CORRIENTES',1,1,'1',NOW(),NULL,'SA','SA'),--2

 (11,'CUENTAS POR COBRAR',1,1,'1',NOW(),NULL,'SA','SA'),--3

 (12,'INVERSIONES',1,1,'1',NOW(),NULL,'SA','SA'),--4
													
 (13,'ACTIVOS FIJOS',1,1,'1',NOW(),NULL,'SA','SA'),--5

 (14,'ACTIVOS DIFERIDOS',1,1,'1',NOW(),NULL,'SA','SA'),--6
													
 (15,'OTROS ACTIVOS',1,1,'1',NOW(),NULL,'SA','SA'),--7

 (2,'PASIVOS',0,1,'1',NOW(),NULL,'SA','SA'),--8

 (20,'PASIVOS CORRIENTES',8,1,'1',NOW(),NULL,'SA','SA'),--9

 (200,'SOBREGIRO BANCARIO ',9,1,'1',NOW(),NULL,'SA','SA'),--10

 (201,'CUENTAS POR PAGAR',9,1,'1',NOW(),NULL,'SA','SA'),--11

 (202,'PRESTAMOS POR PAGAR',9,1,'1',NOW(),NULL,'SA','SA'),--12

 (203,'IMPUESTOS SOBRE LA RENTA POR PAGAR',9,1,'1',NOW(),NULL,'SA','SA'),--13

 (204,'DIVIDENDOS DECLARADOS POR PAGAR',9,1,'1',NOW(),NULL,'SA','SA'),--14

 (205,'RETENCIONES Y ACUMULACIONES POR PAGAR',9,1,'1',NOW(),NULL,'SA','SA'),--15

 (3,'CAPITAL',0,1,'1',NOW(),NULL,'SA','SA'),--16

 (4,'INGRESOS',0,1,'1',NOW(),NULL,'SA','SA'),--17

 (5,'COSTOS',0,1,'1',NOW(),NULL,'SA','SA'),--18

 (6,'GASTOS',0,1,'1',NOW(),NULL,'SA','SA'),--19

 (60,'GASTOS GENERALES Y ADMINISTRATIVOS',19,1,'1',NOW(),NULL,'SA','SA'),--20

 (61,'MANTENIMIENTO MOBILIARIOS Y EQUIPO DE OFICINA',19,1,'1',NOW(),NULL,'SA','SA'),--21
	
 (62,'GASTOS FINANCIAMIENTOS',19,1,'1',NOW(),NULL,'SA','SA'),--22

 (7,'RESUMENES',0,1,'1',NOW(),NULL,'SA','SA')--23
RETURNING *

--VER TODAS LAS CUENTAS

SELECT  
C.CCP_NO_CUENTA   AS NUMERO_CUENTA ,
C.CCP_DESCRIPCION AS DESCRIPCION ,
COALESCE((SELECT CC.CCP_DESCRIPCION FROM "CUENTAS".tb_cuentas_contables_padres AS CC 
 WHERE C.CCP_CUENTA_PADRE = CC.CCP_ID ),'RAIZ') AS CUENTA_PADRE 
FROM "CUENTAS".tb_cuentas_contables_padres AS C

--CATALOGO CUENTAS

CREATE TABLE "CUENTAS".tb_cuentas_contables(
cc_id_cta SERIAL PRIMARY KEY NOT NULL,
cc_cuenta VARCHAR(25)NOT NULL,
cc_id_cuenta_padre INT,
cc_descripcion VARCHAR(50) NOT NULL,
cc_id_empresa INT,
cc_id_moneda INT,
cc_estado BIT NOT NULL,
cc_fecha_de_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
cc_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
cc_usuario VARCHAR(25) NOT NULL,
cc_terminal VARCHAR(25) NOT NULL,
	
	CONSTRAINT PK_ID_EMPRESA
	FOREIGN KEY (cc_id_empresa)
	REFERENCES "EMPRESA".tb_empresa(e_id_empresa),

	CONSTRAINT PK_ID_MONEDA
    FOREIGN KEY (cc_id_moneda)
    REFERENCES  "FACTURACION".tb_moneda(m_id_moneda),
	
	CONSTRAINT PK_ID_CUENTA_PADRE
	FOREIGN KEY (cc_id_cuenta_padre)
	REFERENCES "CUENTAS".tb_cuentas_contables_padres(ccp_id)
)
--