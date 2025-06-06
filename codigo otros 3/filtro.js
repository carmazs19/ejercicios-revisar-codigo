
// Tenemos un lista de los productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

const listaDeProductos = document.getElementById("lista-de-productos");// Se le da un nombre apropiado a la variable y corrige el método para obtener la lista de productos
const inputFiltro = document.getElementById("filtro");// Se corrige el metodo para obtener input
// Se corrige el id de boton filtrar 
const botonDeFiltro = document.getElementById("filtrar");

// Se hizo una función para mostrar los productos en el DOM
const displayProductos = (productos) => {
  listaDeProductos.innerHTML = ""; // Limpia el contenedor antes de agregar nuevos elementos

  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);

    listaDeProductos.appendChild(d);
  });
};

displayProductos(productos); // Se hace la funcion para desplegar productos 


botonDeFiltro.onclick = () => {            // boton para el filtro 
  const texto = inputFiltro.value.trim().toLowerCase(); 
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
};

// funcion para buscar los productos 
const filtrado = (productos, texto) => {
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto)
  );
};

// boton para resetear
const botonReset = document.getElementById("resetear");

// reinicio del filtro
botonReset.onclick = () => {
  inputFiltro.value = ""; // Va hacía el campo de búsqueda
  displayProductos(productos); // muuestra los productos nuevamente
};