/*SE DEBE EJECUTAR LA FUNCION COMPRAR*/

const articulos = [
  {
    codigo: 1,
    Imagen: "/img/anillo1.jpg",
    producto: "anillo1",
    precio: "10000",
  },
  {
    codigo: 2,
    Imagen: "/img/anillo2.jpg",
    producto: "anillo1",
    precio: "20000",
  },
  {
    codigo: 3,
    Imagen: "/img/anillo3.jpg",
    producto: "anillo1",
    precio: "30000",
  },
  {
    codigo: 4,
    Imagen: "/img/cadena1.jpg",
    producto: "anillo1",
    precio: "40000",
  },
  {
    codigo: 5,
    Imagen: "/img/cadena2.jpg",
    producto: "anillo1",
    precio: "50000",
  },
  {
    codigo: 6,
    Imagen: "/img/cadena3.jpg",
    producto: "anillo1",
    precio: "60000",
  },
];

const carrito = [];

const mensajeInicial =
  "Elegí el articulo por su número: n" +
  "anillo1 \n " +
  "anillo2 \n " +
  "anillo3 \n " +
  "cadena1 \n " +
  "cadena2 \n " +
  "cadena3 \n ";

function buscarArticulos(codigo) {
  let resultado = articulos.find(
    (prenda) => prenda.codigo === parseInt(codigo)
  );
  return resultado;
}

function verCarrito() {
  console.table(carrito);
}

function finalizarCompra() {
  if (carrito.length > 0) {
    const shopping = new compra(carrito);
    alert(`Costo acumulado es $ ${shopping.obtenerSubtotal}`);
    let respuesta = confirm("Realizar pago?");
    if (respuesta) {
      alert(shopping.confirmarCompra());
      carrito.length = 0;
    }
  } else {
    console.warn("no hay nada en el carrito");
  }
}

//EJECUTAR LA FUNCION COMPRAR
function iniciarCompra() {
  let codigo = prompt(mensajeInicial);
  if (!parseInt(codigo)) {
    alert("😫No existe el codigo");
    let respuesta = confirm("intentar otra vez?");
    if (respuesta) {
      iniciarCompra();
    }
    return;
  }
  let prendaElegida = buscarArticulos(codigo);
  if (prendaElegida !== undefined) {
    alert(
      `${prendaElegida.Imagen} la prenda ${prendaElegida.tipo} fue agregada al carrito.`
    );
    carrito.push(prendaElegida);
    let respuesta = confirm("llevar otra prenda?");
    if (respuesta) {
      iniciarCompra();
    } else {
      finalizarCompra();
    }
  } else {
    alert("😫No existe el codigo");
    let respuesta = confirm("intentar otra vez?");
    if (respuesta) {
      iniciarCompra();
    }
    return;
  }
}
