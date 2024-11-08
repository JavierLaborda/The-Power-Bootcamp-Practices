//! EJERCICIO 13

/* 
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
*/

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, name) {
  // Se itera por la lista
  if (array.includes(name)) {
    console.log(`${name}: true y su posición es ${array.indexOf(name)}`)
  } else {
    console.log(false)
  }
}
finderName(nameFinder, 'Marc')
finderName(nameFinder, 'Xabierito')
