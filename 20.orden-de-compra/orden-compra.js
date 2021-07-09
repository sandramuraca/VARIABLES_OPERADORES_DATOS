/*Necesitamos un programa que pida ingresar la orden de compra de un local, para eso se deberá ingresar la cantidad que se desea comprar de tres productos distintos(mouse, teclado y auriculares) y la cantidad de cuotas de la compra mediante los siguientes mensajes respectivamente:

Ingresá la cantidad de mouse que deseas comprar
Ingresá la cantidad de teclados que deseas comprar
Ingresá la cantidad de auriculares que deseas comprar
Ingresá la cantidad de cuotas
Tenemos que: * Un mouse sale $400. * El teclado $800. * Los auriculares $1500.

Con esta información, el programa deberá mostrar un mensaje con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas con el mensaje: 'El detalle de la compra es: mouse {cantidadDeMouse} x $ 400 $ {precioTotalDeMouse}, teclado {cantidadDeTeclados} x $ 800 $ {precioTotalDeTeclados}, auriculares {cantidadAuriculares} x $ 1500 $ {precioTotalAuriculares}. El total es $ {precioTotal} en {cuotas} cuotas de $ {precioPorCuota}'. */

const precioMouse = 400;
const precioTeclado = 800;
const precioAuriculares = 1500;

const cantidadDeMouse = Number(prompt("Ingresá la cantidad de mouse que deseas comprar"));
const cantidadDeTeclados = Number(prompt("Ingresá la cantidad de teclados que deseas comprar"));
const cantidadAuriculares = Number(prompt("Ingresá la cantidad de auriculares que deseas comprar"));

const precioTotalDeMouse = cantidadDeMouse * precioMouse;
const precioTotalDeTeclados = cantidadDeTeclados * precioTeclado;
const precioTotalAuriculares = cantidadAuriculares * precioAuriculares;
const precioTotal = precioTotalDeMouse + precioTotalDeTeclados+ precioTotalAuriculares;

const cuotas = Number(prompt("Ingresá la cantidad de cuotas"));
const precioPorCuota = precioTotal/cuotas;

alert(`El detalle de la compra es: mouse ${cantidadDeMouse} x $ 400 ${precioTotalDeMouse}, teclado ${cantidadDeTeclados} x $ 800 $ ${precioTotalDeTeclados}, auriculares ${cantidadAuriculares} x $ 1500 $ ${precioTotalAuriculares}. El total es $ ${precioTotal} en ${cuotas} cuotas de $ ${precioPorCuota}`);
