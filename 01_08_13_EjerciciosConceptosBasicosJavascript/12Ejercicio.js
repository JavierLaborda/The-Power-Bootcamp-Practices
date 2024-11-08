//! EJERCICIO 12

/* 
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

pista (cuando eliminamos algo de un array, su longitud se verá afectada)
*/

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(array) {
  let listaAuxiliar = []
  // Se itera por el array
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    // Se analiza por elemento y se va pusheando en una lista
    if (!listaAuxiliar.includes(element)) {
      listaAuxiliar.push(element)
    }
  }
  return listaAuxiliar
}

console.log(removeDuplicates(duplicates))
