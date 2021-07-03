//segundos ingresados por el usiario
let segundos = Number(8500);

//conversion a horas
let horas = parseInt(segundos/3600);
console.log(horas)

//resto de la division de los segundos para convertir en horas
let restoHoras = segundos%3600;
console.log(restoHoras)

//conversion del resto de horas a minutos, de los 1300 seg que me sobraron tengo 21 minutos, me siguen sobrando segundos???
let minutos = parseInt(restoHoras/60);
console.log(minutos)

// segundos iniciales 1300 - (21*60)= 1260  = 40
let segundos1 = restoHoras - (minutos * 60);
                //1300     -  21*60= 1260
console.log(segundos1)

alert(`${segundos} segundos son = ${horas} horas, ${minutos} minutos y ${segundos1} segundos`);