//! EJERCICIO 11

/* 
Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

pista (typeof)
*/

function sumAll(array) {
  // Se define suma
  let sumatorio = 0
  for (let i = 0; i < array.length; i++) {
    const numero = array[i]
    let sumaParcial = numero + sumatorio
    sumatorio = sumaParcial
  }
  return sumatorio
}

function average(array) {
  // Primero se calcula el valor de la suma de elementos con funcion anterior
  const suma = sumAll(array)
  const media = suma / array.length
  return media
}

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(array) {
  // Se itera por el bucle
  let listaAuxiliar = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    // Se comprueba el tipo y se va añadiendo a la lista
    if (typeof element == 'number') {
      listaAuxiliar.push(element)
    } else {
      listaAuxiliar.push(element.length)
    }
  }
  let media = average(listaAuxiliar)
  return media
}

console.log(averageWord(mixedElements))
