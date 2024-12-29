//! Ejercicio 11

/* 
Dado el siguiente javascript usa forof y forin para saber cuantas veces ha 
sido cada sonido agregado por los usuarios a favorito.

Para ello recorre la lista de usuarios y usa forin para recoger el nombre 
de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada 
vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a 
la vez un buen reto y oportunidad para comprender que hay muchas formas de 
hacer las cosas en javascript.

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
*/

//? 11.1
const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

// Se declaran las variables
let arrayFavourites = []

for (const user of users) {
  // Se recoge el objeto favouritesSounds
  for (const sound in user.favoritesSounds) {
    arrayFavourites.push(sound)
  }
}
// Array favourites tiene todos los valores ahora voy a hacer un set para que sean unicos
const setFavourites = new Set([...arrayFavourites])
// Se recorre cada valor del set y se comprueba cuantas veces sale en arrayFavourites
const elementCounts = {}
for (const element of setFavourites) {
  const count = arrayFavourites.filter((x) => x === element).length
  elementCounts[element] = count
}
console.log(elementCounts)
