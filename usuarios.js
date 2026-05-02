console.log('-----MÓDULO DE USUARIOS-----')

// Array inicial de usuarios para pruebas
const usuarios = [
  {nombre: "Ana Pérez", correo: "ana@email.com"},
  {nombre: "Carlos Gómez", correo: "carlos@email.com"}
]

// Función para registrar usuarios
const registrarUsuario = (lista) => {
  const nombre = prompt("Digite el nombre del usuario:")
  const correo = prompt("Digite el correo electrónico del usuario:")

  const nuevoUsuario = {
    nombre: nombre,
    correo: correo
  }

  lista.push(nuevoUsuario)

  console.log("Usuario registrado correctamente:")
  console.log(nuevoUsuario)

  return lista
}

// Función para listar usuarios
const listarUsuarios = (lista) => {
  console.log('-----Lista de usuarios-----')

  lista.forEach(function(usuario, i){
    console.log(`${i + 1}. ${usuario.nombre} - ${usuario.correo}`)
  })
}