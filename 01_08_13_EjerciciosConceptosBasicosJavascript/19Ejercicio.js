//! EJERCICIO 19

/* 
Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:

*/

const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]

const listaAuxiliar = []
for (let i = 0; i < toys.length; i++) {
  const element = toys[i]
  // Se comprueba el name si incluye gato
  if (!element.name.includes('gato')) {
    listaAuxiliar.push(element)
  }
}
console.log(listaAuxiliar)
