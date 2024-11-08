//! EJERCICIO 21

/* 
Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto

"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
*/

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

const usuariosMayores = []
const usuariosMenores = []
for (const element of users) {
  if (element.years >= 18) {
    usuariosMayores.push(element.name)
  } else {
    usuariosMenores.push(element.name)
  }
}
console.log(
  `los usuarios mayores son: ${usuariosMayores} y los menores son: ${usuariosMenores}`
)

/* PREMIUM
const usuarios = {
  mayores: [],
  menores: []
};

users.forEach((user) => {
  if (user.years >= 18) {
    usuarios.mayores.push(user.name);
  } else {
    usuarios.menores.push(user.name);
  }
}); */
