-- ESQUEMA *CUENTAS*
--TABLA EMPRESAS

CREATE TABLE "CUENTAS".tb_empresa
(
    e_id_empresa SERIAL PRIMARY KEY NOT NULL ,
    e_nombre VARCHAR(50) NOT NULL,
	e_iniciales_empresa VARCHAR(20),
    e_rnc VARCHAR(20),
    e_estado bit(1) NOT NULL,
    e_fecha_ingreso timestamp with time zone NOT NULL,
    e_fecha_actualizacion timestamp with time zone 
    e_direccion VARCHAR (100),
    e_telefono VARCHAR (20),
    e_email VARCHAR (50),
    e_usuario VARCHAR(25) NOT NULL,
    e_termial VARCHAR (25) NOT NULL , 
)

--TABLA CUENTAS CONABLES PADRES
CREATE TABLE "CUENTAS".tb_cuentas_contables_padres
(
ccp_id SERIAL PRIMARY KEY NOT NULL,
ccp_no_cuenta int NOT NULL,
ccp_descripcion varchar(50) NOT NULL,
ccp_cuenta_padre int not null default 0,
ccp_empresa int NOT NULL,
ccp_estado bit NOT NULL,
ccp_fecha_ingreso timestamp NOT NULL,
ccp_fecha_actualizacion timestamp with time zone,
ccp_usuario varchar(25) NOT NULL,
ccp_terminal varchar(25) NOT NULL	
)

--INSERT TABLA CUENTAS CONTABLES PADRES
INSERT INTO "CUENTAS".tb_cuentas_contables_padres (
	ccp_no_cuenta, 
	ccp_descripcion, 
	ccp_cuenta_padre, 
	ccp_empresa, 
	ccp_estado, 
	ccp_fecha_ingreso, 
	ccp_fecha_actualizacion, 
	ccp_usuario, 
	ccp_terminal
		) 
VALUES 
 (1,'ACTIVOS',0,1,'1',NOW(),NULL,'SA','SA'), --1

 (10,'ACTIVOS CORRIENTES',1,1,'1',NOW(),NULL,'SA','SA'),--2

 (101,'CUENTAS POR COBRAR',2,1,'1',NOW(),NULL,'SA','SA'),--3

 (11,'INVERSIONES',1,1,'1',NOW(),NULL,'SA','SA'),--4
													
 (12,'ACTIVOS FIJOS',1,1,'1',NOW(),NULL,'SA','SA'),--5

 (13,'ACTIVOS DIFERIDOS',1,1,'1',NOW(),NULL,'SA','SA'),--6
													
 (14,'OTROS ACTIVOS',1,1,'1',NOW(),NULL,'SA','SA'),--7

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