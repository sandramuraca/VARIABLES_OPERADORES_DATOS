/*
Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:

Ingresá la distancia del recorrido
Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s

Las velocidades de los medio de transporte son:

a pie : 5 km/ hs
bicicleta : 10 km/ hs
auto : 50 km/hs
*/

const distancia = prompt("ingrese la distancia de su trayecto en kilometros:");
const aPie = (Number(60) / Number(5))* distancia;
alert(`si usted realiza su recorrido a pie tardara ${aPie} minutos, ya que la velocidad calculada es de 5km por hora`);

const bicicleta = (Number(60) / Number(10))* distancia;
alert(`si usted realiza su recorrido en bicilcleta tardara ${bicicleta} minutos, ya que la velocidad calculada es de 10km por hora`);

const caballo = (Number(60) / Number(20))* distancia;
alert(`si usted realiza su recorrido a caballo tardara ${caballo} minutos, ya que la velocidad calculada es de 20km por hora`);

/* ejemplo clase
// 5km 
// 1 
// 1/2  
// 0.08hora
// 
const distancia = Number(prompt("Ingrese los km que quiere recorrer"));
const pieResultado = distancia / 5;
const biciResultado = distancia / 10;
const autoResultado = distancia / 60;

alert(`el tiempo para terminar tu recorrido es: \n a pie: ${pieResultado} hs\n en bici: ${biciResultado} hs\n en auto: ${autoResultado} hs`);
alert(`el tiempo para terminar tu recorrido es: 
 a pie: ${pieResultado} hs 
 en bici: ${biciResultado} hs
 en auto: ${autoResultado} hs`);*/