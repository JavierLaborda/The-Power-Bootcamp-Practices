//! Ejercicio 3

/* 
3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
*/

//? 3.1
const pointsList = [32, 54, 21, 64, 75, 43]
const copiaPointsList = [...pointsList]
console.log(copiaPointsList)
console.log(pointsList === copiaPointsList)

//? 3.2
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const copiaToy = { ...toy }
console.log(copiaToy)
console.log(toy === copiaToy)

//? 3.3
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointsList2 = [54, 87, 99, 65, 32]

const pointsMerged = [...pointsList1, ...pointsList2]
console.log(pointsMerged)
//? 3.4
const toy2 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

const toyMerged = { ...toy2, ...toyUpdate }
console.log(toyMerged)

//? 3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const color2 = [...colors.slice(0, 2), ...colors.slice(3)]
console.log(color2)
