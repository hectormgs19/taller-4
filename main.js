import { usuarios, registrarUsuario, listarUsuarios } from './usuarios.js'

import {
  libros,
  registrarLibro,
  listarLibros,
  listarLibrosDisponibles,
  buscarLibrosPorAutor,
  prestarLibro,
  devolverLibro
} from './libros.js'

console.log('-----------------BIBLIOTECA EL PROGRESO-----------------')

let opcion = ""

while (opcion !== "9") {
  opcion = prompt(
    "Seleccione una opción:\n1. Registrar usuario\n2. Listar usuarios\n3. Registrar libro\n4. Listar todos los libros\n5. Listar libros disponibles\n6. Buscar libros por autor\n7. Prestar libro\n8. Devolver libro\n9. Salir"
  )

  if (opcion === "1") {
    registrarUsuario(usuarios)

  } else if (opcion === "2") {
    listarUsuarios(usuarios)

  } else if (opcion === "3") {
    registrarLibro(libros)

  } else if (opcion === "4") {
    listarLibros(libros)

  } else if (opcion === "5") {
    listarLibrosDisponibles(libros)

  } else if (opcion === "6") {
    buscarLibrosPorAutor(libros)

  } else if (opcion === "7") {
    prestarLibro(libros)

  } else if (opcion === "8") {
    devolverLibro(libros)

  } else if (opcion === "9") {
    console.log("Saliendo del programa...")

  } else {
    console.log("Opción no válida")
  }
}