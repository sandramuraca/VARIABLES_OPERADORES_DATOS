/*Necesitamos un programa que pida dos números con los siguientes mensajes respectivamente:

Ingresá el primer número.
Ingresá el segundo número.

Con esta información, el programa deberá mostrar si el primer valor es múltiplo del segundo mediante el siguiente mensaje: El número {primerNumero} es múltiplo de {segundoNumero}: {resultado} */

const primerNumero = Number(prompt("Ingresá el primer número."));

const segundoNumero = Number(prompt("Ingresá el segundo número."));

const esMultiplo = primerNumero % segundoNumero;

if (esMultiplo === 0){
    resultado = true;
    alert(`El número ${primerNumero} es múltiplo de ${segundoNumero}: ${resultado}`); 
} else {
    resultado = false;
    alert(`El número ${primerNumero} es múltiplo de ${segundoNumero}: ${resultado}`); 
}





