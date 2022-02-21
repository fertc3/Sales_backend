DROP TABLE IF EXISTS pedidos;
CREATE TABLE pedidos
(
    id SERIAL CONSTRAINT users_pk PRIMARY KEY,
    nombre varchar(255) NOT NULL, 
    carrera varchar(255) NOT NULL,
    telefono varchar(255),
    pedido varchar(255),
    cantidad varchar(255),
    created_on TIMESTAMP NOT NULL,
);

INSERT INTO users (nombre, carrera, telefono, pedido, cantidad)
       VALUES ('Mafe', 'inco', '123456', 'oreo', '2');
