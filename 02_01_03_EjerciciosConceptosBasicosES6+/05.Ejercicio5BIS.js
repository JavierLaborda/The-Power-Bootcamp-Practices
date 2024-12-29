//! Ejercicio 5 BIS

/* 
Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
*/

//? 5.6
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

// Variable recogida en input
let valorFiltro = ''
// Se recoge el input y su valor con addEventListener
const input = document.querySelector('input')
input.addEventListener('input', () => {
  valorFiltro = input.value
  // Se utiliza filter para mostar por consola los streamer
  const streamerFiltrados = streamers.filter((streamer) =>
    streamer.name.includes(valorFiltro)
  )
  // Se muestra por consola el resultado
  console.log(streamerFiltrados)
})
