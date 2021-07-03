/*Necesitamos un programa que pida ingresar un número, y luego el porcentaje que se desea obtener del mismo mediante los siguientes mensajes:

Ingresá un número
Ingresá un porcentaje
Con esta información, el programa deberá mostrar el resultado del porcentaje mediante el siguiente mensaje: El porcentaje {porcentaje} del número {numero} es: {resultado}*/

let numero = Number(prompt("Ingresá un número"));
let porcentaje = Number(prompt("Ingresá un porcentaje"));
let resultado = (numero * porcentaje)/100;

alert(`El porcentaje ${porcentaje} del número ${numero} es: ${resultado}`);

