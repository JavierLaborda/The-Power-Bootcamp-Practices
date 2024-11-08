//! EJERCICIO 07

/* 
Completa la función que tomando dos números como argumento devuelva el más alto.
*/

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else if (numberOne < numberTwo) {
    return numberTwo
  } else {
    return 'Los numeros son iguales. Intenta de nuevo'
  }
}

console.log(sum(6, 3))
console.log(sum(4, 10))
console.log(sum(4, 4))
