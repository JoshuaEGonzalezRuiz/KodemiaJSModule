console.log("Práctica Clase 8 - Métodos funcionales en Arrays (pt. 1)\n");

//Se crea el arreglo
let kodersNames = ["Francisco", "Jess", "Héctor", "Mónica", "Gustavo", "Roberto", "Cristian", "Heidel", "Erick", "Aldahir"];

console.log('Se reanuda el arreglo "kodersNames": \n');

console.log(kodersNames);

console.log('\n');

console.log('Se ordena el arreglo "kodersNames" de forma ascendente: \n');

console.log(kodersNames.sort());
//console.log(kodersNames.sort((a,b) => a > b ? 1 : -1));

console.log('\n');

console.log('Se ordena el arreglo "kodersNames" de forma descendente: \n');

console.log(kodersNames.sort((a,b) => a > b ? -1 : 1));

console.log('\n');

console.log('Verificamos si todos los elementos del arreglo tienen una longitud de nombre válida: \n');

console.log(kodersNames.every(koder => koder.length > 3));

console.log('\n');

console.log('Verificamos si alguno de los elementos del arreglo contiene la letra h y lo eliminamos del arreglo: \n');

if(kodersNames.some(koder => koder.includes("h") || koder.includes("H"))){
  kodersNames.forEach((koder) => {
    if(koder.includes("h") || koder.includes("H")){
      kodersNames.splice(kodersNames.indexOf(koder), kodersNames.indexOf(koder));
    }
  });
}

console.log(kodersNames);

console.log('\n');

console.log('Imprimimos el primer nombre que coincida en tener menos de 5 letras junto con su índice: \n');

console.log(kodersNames.find(koder => koder.length < 5));

let index = kodersNames.findIndex(koder => koder.length < 5);
console.log(index);

console.log('\n');

console.log('Llenamos el espacio del elemento "Jess" con otro nombre: \n');

kodersNames.fill("Víctor", index, index + 1);

console.log(kodersNames);

console.log('\n');

console.log('Cambiamos el orden en el que se encuentran los elementos en el arreglo, de tal forma que el elemento final es el principal y así consecutivamente: \n');

console.log(kodersNames.reverse());