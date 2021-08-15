-- ESQUEMA INVENTARIO
-- TABLA TIPO ITEMS

CREATE TABLE "INVENTARIO".tb_tipo_item(
ti_id_tipo_item SERIAL PRIMARY KEY NOT NULL,
ti_descripcion VARCHAR(100) NOT NULL,
i_estado BIT NOT NULL,
i_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
i_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
i_usuario VARCHAR(25) NOT NULL,
i_terminal VARCHAR(25) NOT NULL
)

-- TABLA ITEMS

CREATE TABLE "INVENTARIO".tb_items(
i_id_item SERIAL PRIMARY KEY NOT NULL,
i_id_tipo_item INT NOT NULL,
i_descripcion_Item VARCHAR(50) NOT NULL,
i_precio_compra DECIMAL(18,4) DEFAULT 0.00,
i_precio_venta DECIMAL(18,4) DEFAULT 0.00,
i_precio_minimo DECIMAL(18,4),	
i_margen_ganancia DECIMAL(18,4) ,
i_cantidad INT DEFAULT 0,
I_cantidad_minima INT,
i_almacen INT,
i_bodega INT,
i_pasillo INT,
i_tramo INT,
i_estado BIT NOT NULL,
i_fecha_ingreso TIMESTAMP WITH TIME ZONE NOT NULL,
i_fecha_actualizacion TIMESTAMP WITH TIME ZONE,
i_usuario VARCHAR(25) NOT NULL,
i_terminal VARCHAR(25) NOT NULL,	
CONSTRAINT PK_TIPO_ITEM
FOREIGN KEY (i_id_tipo_item)
REFERENCES "INVENTARIO".tb_tipo_item(ti_id_tipo_item)	
)
