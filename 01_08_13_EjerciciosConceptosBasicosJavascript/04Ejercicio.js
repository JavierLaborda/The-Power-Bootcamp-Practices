//! EJERCICIO 04

/* 
1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
*/

//* 1.1
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log('----------------------------------- 1.1')
console.log(avengers[0])
//* 1.2
avengers[0] = 'IRONMAN'
console.log('----------------------------------- 1.2')
console.log(avengers)
//* 1.3
console.log('----------------------------------- 1.3')
console.log(avengers.length)
//* 1.4
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log('----------------------------------- 1.4')
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])
//* 1.5
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters2.splice(rickAndMortyCharacters2.length - 1)
console.log('----------------------------------- 1.5')
console.log(
  `${rickAndMortyCharacters2[0]} & ${
    rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]
  }`
)
//* 1.6
const rickAndMortyCharacters3 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters3.splice(1, 1) //Eleminar x elementos desde el elemento y
console.log('----------------------------------- 1.6')
console.log(rickAndMortyCharacters3)
