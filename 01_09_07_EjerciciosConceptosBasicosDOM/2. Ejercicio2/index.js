//! EJERCICIO 2
/* 
1.1 Inserta dinamicamente en un html un div vacio con javascript.

1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.

1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.

1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here
 */

//* 1.1
const newDiv = document.createElement('div')
document.body.appendChild(newDiv)
console.log(newDiv)
//* 1.2
const newDiv2 = document.createElement('div')
const newP = document.createElement('p')
newDiv2.appendChild(newP)
document.body.appendChild(newDiv2)
//* 1.3
const newDiv3 = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const newP2 = document.createElement('p')
  newDiv3.appendChild(newP2)
}
document.body.appendChild(newDiv3)
//* 1.4
const newDiv4 = document.createElement('div')
const newP3 = document.createElement('p')
newP3.innerText = 'Soy dinámico!'
newDiv4.appendChild(newP3)
document.body.appendChild(newDiv4)
//* 1.5
const elementosInsert = document.querySelectorAll('.fn-insert-here')
for (const element of elementosInsert) {
  const newP4 = document.createElement('p')
  newP4.innerText = 'Wubba Lubba dub dub'
  element.appendChild(newP4)
}
//* 1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const newUl = document.createElement('ul')
for (const element of apps) {
  const newLi = document.createElement('li')
  const newP5 = document.createElement('p')
  newP5.innerText = element
  newLi.appendChild(newP5)
  newUl.appendChild(newLi)
}
document.body.appendChild(newUl)
//* 1.7
const nodoRemove = document.querySelectorAll('.fn-remove-me')
for (const element of nodoRemove) {
  element.remove()
}
//* 1.8
// Se colecta primer div
const primerDiv = document.querySelectorAll('div.fn-insert-here')[0]
const middleP = document.createElement('p')
middleP.innerText = 'Voy en medio'
primerDiv.insertAdjacentElement('afterend', middleP)
//* 1.9
const insertDivs = document.querySelectorAll('div.fn-insert-here')
for (const div of insertDivs) {
  const pDentro = document.createElement('p')
  pDentro.innerText = "'Voy dentro!'"
  div.appendChild(pDentro)
}
