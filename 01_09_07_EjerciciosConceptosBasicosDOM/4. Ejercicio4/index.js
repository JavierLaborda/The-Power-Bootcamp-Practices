//! EJERCICIO 4
/* 
1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

 */

//* 1.1
const button = document.querySelector('button')
button.addEventListener('click', (e) => {
  console.log(e)
})
//* 1.2
const focus = document.querySelector('.focus')
focus.addEventListener('focus', (e) => {
  console.log(e)
})
//* 1.3
const input = document.querySelector('.value')
input.addEventListener('input', (e) => {
  console.log(input.value)
})
