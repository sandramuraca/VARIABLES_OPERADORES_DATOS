/*Necesitamos un programa que pida ingresar cuántas habitaciones tiene un hotel para 2, 3 y 4 personas , con los siguientes mensajes respectivamente:

Ingresá cuantas habitaciones para dos personas tiene el hotel
Ingresá cuantas habitaciones para tres personas tiene el hotel
Ingresá cuantas habitaciones para cuatro personas tiene el hotel

Con esta información, el programa deberá mostrar el máximo de huéspedes que puede albergar mediante el mensaje : El hotel tiene una capacidad de {resultado} personas */

const dosPersonas = Number(prompt("Ingresá cuantas habitaciones para dos personas tiene el hotel"));
const tresPersonas = Number(prompt("Ingresá cuantas habitaciones para tres personas tiene el hotel"));
const cuatroPersonas = Number(prompt("Ingresá cuantas habitaciones para cuatro personas tiene el hotel"));

const habitacionsDosPersonas = dosPersonas * 2;
const habitacionsTresPersonas = tresPersonas * 3;
const habitacionsCuatroPersonas = cuatroPersonas * 4;
resultado = habitacionsDosPersonas + habitacionsTresPersonas + habitacionsCuatroPersonas;

alert(`El hotel tiene una capacidad de ${resultado} personas`);