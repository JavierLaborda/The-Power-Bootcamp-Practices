//! EJERCICIO 15

/* 
Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
*/

const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]

function incluidorCamiseta(array) {
  // Se crea array salida
  const salida = []
  // Se itera por el array
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    // Se comprueba elemento por elemento en array
    if (element.includes('Camiseta')) {
      salida.push(element)
    }
  }
  return salida
}

console.log(incluidorCamiseta(products))
