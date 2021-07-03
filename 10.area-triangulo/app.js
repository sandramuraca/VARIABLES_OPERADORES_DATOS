/*AREA DE UN TRIANGULO
Necesitamos un programa que pida ingresar el valor de la base y el valor de la altura de un triángulo mediante los siguientes mensajes:

Ingresá el valor de la base del triángulo
Ingresá el valor de la altura del triángulo
Con esta información, el programa deberá mostrar el resultado del área del triángulo mediante el siguiente mensaje: El resultado del área del triángulo con base {base} y altura {altura} es: {resultado}*/

let base = prompt("Ingresá el valor de la base del triángulo");
let altura = prompt("Ingresá el valor de la base del triángulo");
let resultado = (base * altura)/2;

alert(`El resultado del área del triángulo con base ${base} y altura ${altura} es: ${resultado}`);