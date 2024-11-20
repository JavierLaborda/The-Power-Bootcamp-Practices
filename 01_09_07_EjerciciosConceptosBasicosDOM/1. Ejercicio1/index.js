//! EJERCICIO 1
/* 
1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con 
la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".
 */

//* 1.1
const button = document.querySelector('.showme')
//* 1.2
const h1 = document.querySelector('#pillado')
console.log(h1)
//* 1.3
const allP = document.querySelectorAll('p')
console.log(allP)
//* 1.4
const allPokemon = document.getElementsByClassName('pokemon')
console.log(allPokemon)
//* 1.5
const elements = document.querySelectorAll('[data-function="testMe"]')
console.log(elements)
//* 1.6
console.log(elements[3].innerHTML)
