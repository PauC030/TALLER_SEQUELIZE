create database biblioteca;
use biblioteca;
CREATE TABLE libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
   anioPublicacion INT NOT NULL,
    disponibilidad BOOLEAN DEFAULT TRUE
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE prestamos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    libroId INT NOT NULL,
    usuarioId INT NOT NULL,
    fechaPrestamo DATETIME DEFAULT CURRENT_TIMESTAMP,
    fechaDevolucion DATETIME NULL,
    FOREIGN KEY (libroId) REFERENCES libros(id),
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

INSERT INTO libros (titulo, autor, añoPublicacion, disponibilidad) VALUES('Cien años de soledad', 'Gabriel García Márquez', 1967, true),('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605, false);
INSERT INTO usuarios (nombre, email) VALUES('Juan Pérez', 'juan.perez@gmail.com'),('María López', 'maria.lopez@gmail.com');
INSERT INTO prestamos (libroId, usuarioId, fechaPrestamo, fechaDevolucion) VALUES(1, 1, '2024-11-01', NULL),(2, 2, '2024-11-05', '2024-11-12');

insert into libros(añopublicacion) values (1967);
insert into libros(añopublicacion) values (1860);

SELECT * FROM prestamos;
SELECT * FROM prestamos WHERE id = 2;
DESCRIBE prestamos;



ALTER TABLE libros ADD COLUMN añoPublicacion INT NOT NULL;
alter table libros drop column anioPublicacion ;


select * from prestamos;
