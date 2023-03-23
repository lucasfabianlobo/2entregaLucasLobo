class compra {
  constructor(carrito) {
    this.carrito = carrito;
  }
}
confirmarCompra();
if (this.obtenerSubtotal() !== "error") {
  return `🤙Confirma el pago de $ ${this.obtenerSubtotal()}. \n Gracias por elegirnos`;
} else {
  return `👎Hubo un problema. Intenta otra vez`;
}
