//! EJERCICIO 7
/* 
Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
 */

//* 1.1
const div = document.querySelector('[data-function="printHere"]')
const newUl = document.createElement('ul')
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
for (const place of places) {
  const newP = document.createElement('p')
  newP.innerText = place
  const newLi = document.createElement('li')
  newLi.appendChild(newP)
  newUl.appendChild(newLi)
}
div.appendChild(newUl)
