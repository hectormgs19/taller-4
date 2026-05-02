console.log('-----MÓDULO DE LIBROS-----')

// Array inicial de libros para pruebas
const libros = [
  {titulo: "Cien años de soledad", autor: "Gabriel García Márquez", prestado: false},
  {titulo: "Hamlet", autor: "William Shakespeare", prestado: true},
  {titulo: "El Principito", autor: "Antoine de Saint-Exupéry", prestado: false}
]

// Función para registrar libros
const registrarLibro = (lista) => {
  const titulo = prompt("Digite el título del libro:")
  const autor = prompt("Digite el autor del libro:")
  const estado = prompt("Digite el estado del libro: disponible / prestado")

  let prestado = false

  if (estado === "prestado") {
    prestado = true
  } else {
    prestado = false
  }

  const nuevoLibro = {
    titulo: titulo,
    autor: autor,
    prestado: prestado
  }

  lista.push(nuevoLibro)

  console.log("Libro registrado correctamente:")
  console.log(nuevoLibro)

  return lista
}

// Función para listar todos los libros
const listarLibros = (lista) => {
  console.log('-----Lista de todos los libros-----')

  lista.forEach(function(libro, i){
    console.log(`${i + 1}. ${libro.titulo} - ${libro.autor} - Prestado: ${libro.prestado}`)
  })
}

// Función para listar solo los libros disponibles
const listarLibrosDisponibles = (lista) => {
  console.log('-----Libros disponibles-----')

  const librosDisponibles = lista.filter(function(libro){
    return libro.prestado === false
  })

  console.log(librosDisponibles)
}

// Función para buscar libros por autor
const buscarLibrosPorAutor = (lista) => {
  const autorBuscar = prompt("Digite el autor que desea buscar:")

  const librosAutor = lista.filter(function(libro){
    return libro.autor.includes(autorBuscar)
  })

  console.log('-----Libros encontrados por autor-----')
  console.log(librosAutor)
}