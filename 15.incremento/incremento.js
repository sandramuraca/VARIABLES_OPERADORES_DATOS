/*Necesitamos un programa que pida ingresar un número de partida y una cantidad, mediante los siguientes mensajes:

Ingresá un número
Ingresá una cantidad
Con esta información, el programa deberá incrementar el número cinco veces la cantidad y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento. Por ejemplo si ingresamos el 6 como número y el 1 como cantidad, debería mostrar lo siguiente:

'Incremento 1: 7'
'Incremento 2: 8'
'Incremento 3: 9'
'Incremento 4: 10'
'Incremento 5: 11'*/

const numero = Number(prompt("Ingresá un número"));
const cantidadAIncrementar = Number(prompt("Ingresá una cantidad"));

const incrementoUno = numero + cantidadAIncrementar;
const incrementoDos = incrementoUno + cantidadAIncrementar;
const incrementoTres = incrementoDos + cantidadAIncrementar;
const incrementoCuatro = incrementoTres + cantidadAIncrementar;
const incrementoCinco = incrementoCuatro + cantidadAIncrementar;

console.log(`Incremento1: ${incrementoUno}
             Incremento2: ${incrementoDos}
             Incremento3: ${incrementoTres}
             Incremento4: ${incrementoCuatro}
             Incremento5: ${incrementoCinco}`);