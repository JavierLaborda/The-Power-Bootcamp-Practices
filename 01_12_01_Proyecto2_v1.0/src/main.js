import './styles/main.scss'
import { assetsIconos, assetsImagenes } from './assets.js'
import { cover } from './assets.js'
import { icon_arrow } from './assets.js'
import { icon_menu } from './assets.js'

//! CONSTANTES
const opcionesInicio = ['Hombre', 'Mujer', 'Niños', 'Ofertas']
const opcionesIconos = [
  {
    nombre: 'Logo JD',
    ruta: assetsIconos.logo
  },
  {
    nombre: 'Icono Filtro',
    ruta: assetsIconos.filtro
  },
  {
    nombre: 'Icono Cesta de Compra',
    ruta: assetsIconos.bolsaCompra
  },
  {
    nombre: 'Icono Usuario',
    ruta: assetsIconos.usuarioAvatar
  }
]
const productos = [
  {
    marca: 'Nike Original',
    modelo: 'Dunk Low',
    precio: 100,
    imagen: assetsImagenes.nikeDunkLow,
    descripcion: 'Imagen Dunk Low'
  },
  {
    marca: 'Adidas Original',
    modelo: 'Handball Spezial',
    precio: 120,
    imagen: assetsImagenes.adidasSpezialRetro,
    descripcion: 'Imagen Handdball Spezial'
  },
  {
    marca: 'New Balance',
    modelo: 'NB 9060',
    precio: 120,
    imagen: assetsImagenes.newBalance9060,
    descripcion: 'Imagen New Balance 9060'
  },
  {
    marca: 'Adidas Original',
    modelo: 'Forum Buckle',
    precio: 100,
    imagen: assetsImagenes.adidasForumLow,
    descripcion: 'Imagen Forum Low'
  },
  {
    marca: 'Nike Original',
    modelo: 'Air Max 1',
    precio: 120,
    imagen: assetsImagenes.nikeAirMax1,
    descripcion: 'Imagen Nike Air Max 1'
  },
  {
    marca: 'Nike Original',
    modelo: 'Full Force Low',
    precio: 70,
    imagen: assetsImagenes.nikeMacAttack,
    descripcion: 'Imagen Full Force.'
  },
  {
    marca: 'New Balance',
    modelo: 'NB 9060',
    precio: 100,
    imagen: assetsImagenes.newBalance9060Blue,
    descripcion: 'Imagen NB 9060'
  },
  {
    marca: 'Nike Original',
    modelo: 'Nike Revolution',
    precio: 90,
    imagen: assetsImagenes.nikeWearAllDay,
    descripcion: 'Imagen Nike Revolution'
  },
  {
    marca: 'New Balance',
    modelo: 'NB 327',
    precio: 120,
    imagen: assetsImagenes.newBalance327,
    descripcion: 'Imagen NB 327'
  },
  {
    marca: 'Adidas Original',
    modelo: 'Handball Spezial',
    precio: 140,
    imagen: assetsImagenes.adidasSpezial,
    descripcion: 'Imagen Handball Spezial'
  },
  {
    marca: 'Nike Original',
    modelo: 'Air Max SC',
    precio: 150,
    imagen: assetsImagenes.nikeAirMaxSC,
    descripcion: 'Imagen Nike Air Max SC'
  },
  {
    marca: 'Nike Original',
    modelo: 'Air Max',
    precio: 145,
    imagen: assetsImagenes.nikeAirMax,
    descripcion: 'Imagen Nike Air Max'
  },
  {
    marca: 'Adidas Original',
    modelo: 'Gazelle',
    precio: 90,
    imagen: assetsImagenes.adidasGazelleBold,
    descripcion: 'imagen Gazelle'
  },
  {
    marca: 'Nike Original',
    modelo: 'Air Force',
    precio: 130,
    imagen: assetsImagenes.nikeAirForce1Low,
    descripcion: 'Imagen Nike Air Force 1'
  },
  {
    marca: 'Adidas Original',
    modelo: 'Campus',
    precio: 120,
    imagen: assetsImagenes.adidasCampus,
    descripcion: 'imagen Adidas Campus'
  },
  {
    marca: 'New Balance',
    modelo: 'NB 480',
    precio: 150,
    imagen: assetsImagenes.newBalance480HighTop,
    descripcion: 'Imagen NB 480'
  }
]
const textosJD = [
  'Compra con JD',
  'Guía de tallas',
  'Buscador de tallas',
  'Descuento estudiantes',
  'Calendario lanzamientos',
  'Inscríbete a JDX',
  'JD Blog'
]
const textosAtencion = [
  'Atención al cliente',
  'Preguntas frecuentes',
  'Envíos y devoluciones',
  'Seguimiento de envío',
  'Contacto'
]
const textosAvisos = [
  'Aviso legal',
  'Términos y condiciones',
  'Promociones y condiciones',
  'Política de privacidad',
  'Política de Cookies',
  'Ajustes de Cookies',
  'Accesibilidad'
]

//! FUNCIONES
const pintarTarjetas = (listadoZapatillas) => {
  // Se recoge el main
  const mainInsertar = document.querySelector('main')
  for (const zapatilla of listadoZapatillas) {
    // Se crean los elementos html
    const divTarjeta = document.createElement('div')
    divTarjeta.className = 'tarjeta'
    const divImagen = document.createElement('div')
    divImagen.className = 'fondo-tarjeta'
    const imgTarjeta = document.createElement('img')
    imgTarjeta.src = zapatilla.imagen
    imgTarjeta.alt = zapatilla.descripcion
    const divTextoTarjeta = document.createElement('div')
    divTextoTarjeta.classList.add('texto-tarjeta')
    const textoh3 = document.createElement('h3')
    textoh3.innerText = zapatilla.marca
    const divTextoInterior = document.createElement('div')
    divTextoInterior.classList.add('texto-interior')
    const textoModelo = document.createElement('p')
    textoModelo.innerText = zapatilla.modelo
    const textoPrecio = document.createElement('p')
    textoPrecio.innerText = `${zapatilla.precio.toFixed(2)} €`
    const buttonComprar = document.createElement('button')
    buttonComprar.innerText = 'Comprar'
    buttonComprar.classList.add('button')
    // Se insertan elementos en la tarjeta
    divTextoInterior.append(textoModelo)
    divTextoInterior.append(textoPrecio)
    divTextoTarjeta.append(textoh3)
    divTextoTarjeta.append(divTextoInterior)
    divTextoTarjeta.append(buttonComprar)
    divImagen.append(imgTarjeta)
    divTarjeta.append(divImagen)
    divTarjeta.append(divTextoTarjeta)
    // Se insertan tarjetas en el html
    mainInsertar.append(divTarjeta)
  }
  // Se inserta en el documento
  document.body.appendChild(mainInsertar)
}

const pintarListaFooter = (arrayStrings) => {
  // Se recoge el footer
  const footerInsertar = document.querySelector('footer')
  // Se crean contenedores
  const divEnlaces = document.createElement('div')
  const ulEnlaces = document.createElement('ul')
  ulEnlaces.className = 'links'
  for (const string of arrayStrings) {
    // Se crean los elementos html
    const liEnlace = document.createElement('li')
    const pEnlace = document.createElement('p')
    pEnlace.innerText = string
    liEnlace.append(pEnlace)
    ulEnlaces.append(liEnlace)
  }
  // Se insertan elementos en html
  divEnlaces.append(ulEnlaces)
  footerInsertar.append(divEnlaces)
  // Se inserta en el documento
  document.body.appendChild(footerInsertar)
}

const unicasMarcas = [...new Set(productos.map((producto) => producto.marca))]

const preciosUnicoMarca = (marcaElegida, arrayMarcas) => {
  const arrayPrecios = []
  for (const marca of arrayMarcas) {
    if (marcaElegida === marca.marca) {
      const precioElegido = marca.precio
      arrayPrecios.push(precioElegido)
    }
  }
  // Eliminar duplicados y ordenar de menor a mayor
  const unicosPrecios = [...new Set(arrayPrecios)].sort((a, b) => a - b)

  // Devolver el array único y ordenado
  return unicosPrecios
}

const filtrarProductos = (
  arrayProductos,
  marcaSeleccionada,
  precioSeleccionado
) => {
  return arrayProductos.filter((producto) => {
    // Verifica si el producto cumple con ambos criterios (marca y precio)
    return (
      producto.marca === marcaSeleccionada &&
      producto.precio <= parseFloat(precioSeleccionado)
    )
  })
}

//! CODIGO
//? HEADER
const header = document.querySelector('header')

// Se crean los elementos del header
const encabezadoNegro = document.createElement('div')
encabezadoNegro.classList = 'encabezado-principal'
const divLogo = document.createElement('div')
const imgLogo = document.createElement('img')
imgLogo.src = opcionesIconos[0].ruta
imgLogo.alt = opcionesIconos[0].nombre
divLogo.appendChild(imgLogo)
// Se crea nav de navegador
const navOpciones = document.createElement('nav')
const ulOpciones = document.createElement('ul')
ulOpciones.className = 'nav-opciones'
for (const opcion of opcionesInicio) {
  const liOpcion = document.createElement('li')
  const aOpcion = document.createElement('a')
  aOpcion.innerText = opcion
  liOpcion.appendChild(aOpcion)
  ulOpciones.appendChild(liOpcion)
}
navOpciones.appendChild(ulOpciones)
// Se crea img menu
const imgMenu = document.createElement('img')
imgMenu.src = icon_menu
imgMenu.alt = 'Menu icono'
imgMenu.classList = 'icono-menu'
// Se crea nav de menu, usuario...
const navIconos = document.createElement('nav')
const ulIconos = document.createElement('ul')
ulIconos.classList = 'nav-iconos'
// Se itera a partir de indice 1
for (let i = 1; i < opcionesIconos.length; i++) {
  const icono = opcionesIconos[i]
  const liIcono = document.createElement('li')
  const aIcono = document.createElement('a')
  const imgIcono = document.createElement('img')
  imgIcono.src = icono.ruta
  imgIcono.alt = icono.nombre
  aIcono.appendChild(imgIcono)
  liIcono.appendChild(aIcono)
  ulIconos.appendChild(liIcono)
}
navIconos.appendChild(ulIconos)
encabezadoNegro.appendChild(divLogo)
encabezadoNegro.appendChild(navOpciones)
encabezadoNegro.appendChild(imgMenu)
encabezadoNegro.appendChild(navIconos)
header.appendChild(encabezadoNegro)

//* Se añade imagen
const imgFondo = document.createElement('img')
imgFondo.src = cover
imgFondo.alt = 'fondo JD'
header.appendChild(imgFondo)
//* Se añade barra de filtros
const barraFiltros = document.createElement('div')
barraFiltros.className = 'barra-filtros'
const accionadorFiltros = document.createElement('button')
accionadorFiltros.className = 'accionador'
const iconoFiltro = document.createElement('img')
iconoFiltro.src = icon_arrow
iconoFiltro.alt = 'accionador filtros'
accionadorFiltros.appendChild(iconoFiltro)
barraFiltros.appendChild(accionadorFiltros)

//* Se crea menu de filtros
const menuFiltros = document.createElement('div')
menuFiltros.className = 'menu-filtros hidden'

header.appendChild(barraFiltros)
header.appendChild(menuFiltros)

//* Evento para alternar el menú
accionadorFiltros.addEventListener('click', () => {
  menuFiltros.classList.toggle('hidden') // Alterna la clase para mostrar/ocultar
  accionadorFiltros.classList.toggle('active')
})

//* Se crean filtros y botones
const divFiltros = document.createElement('div')
divFiltros.className = 'filtros-contenedor'
// Crear el primer select (Marca)
const selectMarca = document.createElement('select')
selectMarca.className = 'input-select'
selectMarca.innerHTML = '<option value="">Seleccione una marca</option>'
for (const marca of unicasMarcas) {
  const opcionMarca = document.createElement('option')
  opcionMarca.value = marca // Usar `value` para mantener la lógica
  opcionMarca.innerText = marca
  selectMarca.append(opcionMarca)
}

// Crear el segundo select (Precio dependiente)
const selectPrecio = document.createElement('select')
selectPrecio.className = 'input-select'
selectPrecio.disabled = true // Inicialmente desactivado
selectPrecio.innerHTML = '<option value="">Seleccione un precio</option>'

// Lógica para actualizar el segundo select según la marca seleccionada
selectMarca.addEventListener('change', () => {
  const marcaSeleccionada = selectMarca.value
  selectPrecio.innerHTML = '<option value="">Seleccione un precio</option>' // Reiniciar el select

  if (marcaSeleccionada) {
    // Obtener los precios únicos y ordenados para la marca seleccionada
    const listadoPrecios = preciosUnicoMarca(marcaSeleccionada, productos)

    // Agregar opciones al select de precios
    for (const precio of listadoPrecios) {
      const opcionPrecio = document.createElement('option')
      opcionPrecio.value = precio // Usar `value` para el precio
      opcionPrecio.innerText = `${precio.toFixed(2)} €` // Mostrar precio con formato
      selectPrecio.append(opcionPrecio)
    }

    selectPrecio.disabled = false // Activar el select de precios
  } else {
    selectPrecio.disabled = true // Desactivar si no hay marca seleccionada
  }
})

// Crear el botón Filtrar
const btnFiltrar = document.createElement('button')
btnFiltrar.className = 'btn-filtro'
btnFiltrar.textContent = 'Filtrar'
btnFiltrar.addEventListener('click', () => {
  const marcaSeleccionada = selectMarca.value
  const precioSeleccionado = selectPrecio.value
  // Llamar a la función de filtrado
  const productosFiltrados = filtrarProductos(
    productos,
    marcaSeleccionada,
    precioSeleccionado
  )
  // Limpiar el contenedor principal y mostrar los productos filtrados
  const main = document.querySelector('main')
  const footer = document.querySelector('footer')
  main.innerHTML = ' ' // Limpia el contenido actual
  footer.innerHTML = ' ' // Limpia el contenido actual
  pintarTarjetas(productosFiltrados) // Mostrar productos filtrados
  pintarListaFooter(textosJD)
  pintarListaFooter(textosAtencion)
  pintarListaFooter(textosAvisos)
})
// Crear el botón Limpiar
const btnLimpiar = document.createElement('button')
btnLimpiar.className = 'btn-filtro'
btnLimpiar.textContent = 'Limpiar'
// Se crea una variable para alojar si ya se ha ejecutado
let clickRealizado = false

btnLimpiar.addEventListener('click', () => {
  if (!clickRealizado) {
    // solo permite primera ejecucion
    clickRealizado = true // Se cambia estado de variable
    // Limpia el contenido actual
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    main.innerHTML = '' // Limpia el contenedor principal
    footer.innerHTML = '' // Limpia el footer

    // Reinicia el estado de los selects
    selectMarca.value = ''
    selectPrecio.value = ''
    selectPrecio.disabled = true
    selectMarca.value = ''
    selectPrecio.value = ''
    selectPrecio.disabled = true
    // Vuelve a pintar las tarjetas originales y el footer
    pintarTarjetas(productos)
    pintarListaFooter(textosJD)
    pintarListaFooter(textosAtencion)
    pintarListaFooter(textosAvisos)
  }
})
// Añadir los elementos al contenedor de filtros
divFiltros.appendChild(selectMarca)
divFiltros.appendChild(selectPrecio)
divFiltros.appendChild(btnFiltrar)
divFiltros.appendChild(btnLimpiar)

menuFiltros.appendChild(divFiltros)

//? MAIN
pintarTarjetas(productos)

//? FOOTER
pintarListaFooter(textosJD)
pintarListaFooter(textosAtencion)
pintarListaFooter(textosAvisos)
