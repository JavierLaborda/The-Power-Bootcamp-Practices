//! EJERCICIO 23

/* 
Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.
*/

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let contador = 0
products.forEach((element) => {
  // Se calcula la suma
  contador += element.sellCount
})
// Se calcula la media y se muestra por consola
console.log(contador / products.length)
