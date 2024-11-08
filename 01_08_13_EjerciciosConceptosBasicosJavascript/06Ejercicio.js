//! EJERCICIO 06

/* 
1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.
*/

//* 1.1
console.log('----------------------------------- 1.1')
for (let i = 0; i < 10; i++) {
  console.log(i)
}
//* 1.2
console.log('----------------------------------- 1.2')
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}
//* 1.3
console.log('----------------------------------- 1.3')
for (let i = 0; i < 10; i++) {
  console.log('Intentando dormir 🐑')
}
console.log('Dormido!')
