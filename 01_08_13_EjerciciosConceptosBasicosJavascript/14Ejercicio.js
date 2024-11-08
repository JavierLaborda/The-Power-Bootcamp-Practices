//! EJERCICIO 14

/* 
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(array) {
  // Se crea un objecto vacio
  let objectContador = {}
  // Se itera por el array
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    // Se comprueba elemento por elemento en array
    if (!objectContador[element]) {
      objectContador[element] = 1
    } else {
      objectContador[element] += 1
    }
  }
  return objectContador
}

console.log(repeatCounter(counterWords))
