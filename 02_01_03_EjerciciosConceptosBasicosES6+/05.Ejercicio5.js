//! Ejercicio 5

/* 
5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.
*/

//? 5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const agesFiltered = ages.filter((age) => age > 18)
console.log(agesFiltered)

//? 5.2
const agesFilteredPar = ages.filter((age) => age % 2 === 0)
console.log(agesFilteredPar)

//? 5.3
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const streamersFiltered = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)
console.log(streamersFiltered)

//? 5.4
const streamersFilteredWithU = streamers.filter((streamer) =>
  streamer.name.includes('u')
)
console.log(streamersFilteredWithU)

//? 5.5
const streamersFilteredLegends = streamers
  .filter((streamer) => streamer.gameMorePlayed.includes('Legends')) // Filtrar por "Legends"
  .map((streamer) => {
    if (streamer.age > 35) {
      return {
        ...streamer,
        gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
      } // Convertir a mayúsculas
    }
    return streamer // Dejar igual si la edad es menor o igual a 35
  })

console.log(streamersFilteredLegends)
