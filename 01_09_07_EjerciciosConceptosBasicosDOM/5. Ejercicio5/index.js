//! EJERCICIO 5
/* 
Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
 */

//* 1.1
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
const newUl = document.createElement('ul')
for (const album of albums) {
  const newP = document.createElement('p')
  newP.innerText = album
  const newLi = document.createElement('li')
  newLi.appendChild(newP)
  newUl.appendChild(newLi)
}
document.body.appendChild(newUl)
