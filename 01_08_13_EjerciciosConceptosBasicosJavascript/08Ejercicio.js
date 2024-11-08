//! EJERCICIO 08

/* 
Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:
*/

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(array) {
  let listaAuxLength = []
  // Se itera por el array
  for (let i = 0; i < avengers.length; i++) {
    // Se calcula longitud de string
    const palabra = avengers[i]
    // Se pushea en lista
    listaAuxLength.push(palabra.length)
  }
  // Se localiza el mayor indice
  const max = Math.max(...listaAuxLength)
  // Se localiza el primer indice que tiene ese valor
  let indiceArray = listaAuxLength.indexOf(max)
  // Se devuelve ese elemento del array
  return console.log(array[indiceArray])
}

findLongestWord(avengers)

/* 
  PREMIUM
  
  function findLongestWord(array) {
  let maxLength = 0
  let longestWord = ""

  // Se itera por el array
  for (let palabra of array) {
    // Se comprueba si la palabra actual es la más larga
    if (palabra.length > maxLength) {
      maxLength = palabra.length
      longestWord = palabra
    }
  }

  // Se devuelve la palabra más larga
  return longestWord
}
 */

findLongestWord(avengers)
