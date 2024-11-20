//! EJERCICIO 3 (pag 7)
/* 
1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

 */

//* 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const newUl = document.createElement('ul')
for (const country of countries) {
  const newLi = document.createElement('li')
  const newP = document.createElement('p')
  newP.innerText = country
  newLi.appendChild(newP)
  newUl.appendChild(newLi)
}
document.body.appendChild(newUl)
//* 1.2
const elementRemove = document.querySelector('.fn-remove-me')
elementRemove.remove()

//* 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const divSelect = document.querySelector("[data-function='printHere']")
const newUl2 = document.createElement('ul')
for (const car of cars) {
  const newLi2 = document.createElement('li')
  const newP2 = document.createElement('p')
  newP2.innerText = car
  newLi2.appendChild(newP2)
  newUl2.appendChild(newLi2)
}
divSelect.appendChild(newUl2)
//* 1.4
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
for (const pais of countries2) {
  const newDiv = document.createElement('div')
  const newH4 = document.createElement('h4')
  newH4.innerText = pais.title
  const newImg = document.createElement('img')
  newImg.src = pais.imgUrl
  newDiv.appendChild(newH4)
  newDiv.appendChild(newImg)
  document.body.appendChild(newDiv)
}
