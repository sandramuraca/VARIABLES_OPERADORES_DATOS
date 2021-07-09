/*Necesitamos un programa que pida ingresar 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos, mediante los siguientes mensajes:
¿Cúal es la primer escala?
¿Cúal es la duración de la primer escala?
¿Cúal es la segunda escala?
¿Cúal es la duración de la segunda escala?
¿Cúal es la tercer escala?
¿Cúal es la duración de la tercer escala?
Con esta información, el programa deberá mostrar todas las escalas con su duración y la duración total del vuelo con el siguiente mensaje: La duración total del vuelo con escala en {escalaUno} de duración {duracionEscalaUno} hs, {escalaDos} de duración {duracionEscalaDos} hs y {escalaTres} de duración {duracionEscalaTres} hs es: {resultado} hs.
*/

const escalaUno = prompt ("¿Cúal es la primer escala?");
const duracionEscalaUno = Number(prompt ("¿Cúal es la duración de la primer escala?"));
const escalaDos = prompt ("¿Cúal es la segunda escala?");
const duracionEscalaDos = Number(prompt ("¿Cúal es la duración de la segunda escala?"));
const escalaTres= prompt ("¿Cúal es la tercer escala?");
const duracionEscalaTres = Number(prompt ("¿Cúal es la duración de la tercer escala?"));
const resultado = duracionEscalaUno + duracionEscalaDos + duracionEscalaTres;

alert(`La duración total del vuelo con escala en ${escalaUno} de duración ${duracionEscalaUno} hs, ${escalaDos} de duración ${duracionEscalaDos} hs y ${escalaTres} de duración ${duracionEscalaTres} hs es: ${resultado} hs.`);