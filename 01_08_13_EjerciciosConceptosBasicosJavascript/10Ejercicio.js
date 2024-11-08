//! EJERCICIO 10

/* 
Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:
*/

const numbers = [12, 21, 38, 5, 45, 37, 6]

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

console.log(average(numbers))
