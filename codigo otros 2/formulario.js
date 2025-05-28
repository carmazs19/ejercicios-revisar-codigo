const formulario = document.querySelector("#form")// se modifico la etiqueta var

formulario.onsubmit = function(e) {

  e.prevent();
  
  const n = formulario.elements[0] //se modifico la etiqueta var
  const e = formulario.elements[1]//se modifico la etiqueta var
  const na = formulario.elements[2]//se modifico la etiqueta var

  const nombre = n.value//se modifico la etiqueta var
  const edad = e.value//se modifico la etiqueta var

  const i = na.selectedIndex//se modifico la etiqueta var
  const nacionalidad = na.options[i].value//se modifico la etiqueta var
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === <0) { //menor a cero error 
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

const botonBorrar = document.createElement("button")//var
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")//var
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else (nacionalidad === "per") { //tiene que terminar con else 
    nacionalidad = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados")//var

const elementoLista = document.createElement("div") //var
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

const spanNombre = document.createElement("span")//var
const inputNombre = document.createElement("input")//var
const espacio = document.createElement("br")//var
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
const spanNombre = document.createElement("span") //var
const inputNombre = document.createElement("input")//var
const espacio = document.createElement("br")//var
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


const botonBorrar = document.createElement("button")//var
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")// var
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}