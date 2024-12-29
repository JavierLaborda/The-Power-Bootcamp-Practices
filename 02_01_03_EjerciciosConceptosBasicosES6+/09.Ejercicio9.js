//! Ejercicio 9

/* 
Dado el siguiente javascript usa forof para recorrer el array de películas, 
genera un nuevo array con las categorías de las películas e imprime por 
consola el array de categorías. Ten en cuenta que las categorías no deberían 
repetirse.

Para filtrar las categorías puedes ayudarte de la función .includes().

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
*/

//? 9.1
const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

const arrayCategorias = []

for (const movie of movies) {
  for (const categorie of movie.categories) {
    if (!arrayCategorias.includes(categorie)) {
      arrayCategorias.push(categorie)
    }
  }
}
console.log(arrayCategorias)

/* 
premium
const arrayCategorias = [
  ...new Set(movies.flatMap(movie => movie.categories))
];
console.log(arrayCategorias);
 */
