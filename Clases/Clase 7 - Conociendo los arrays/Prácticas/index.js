console.log("Práctica Clase 7 - Conociendo los arreglos\n");
//Se crea el arreglo
let kodersNames = [];

//Se agregan elementos al arreglo
kodersNames.push("Jess");
kodersNames.push("Héctor");
kodersNames.push("Mónica");
kodersNames.push("Gustavo");
kodersNames.push("Roberto");
kodersNames.push("Cristian");
kodersNames.push("Heidel");
kodersNames.push("Erick");
kodersNames.push("Aldahir");

console.log("Verificamos se hayan agregado correctamente los elementos al arreglo:");
console.log(kodersNames);
console.log("Longitud actual del arreglo: " + kodersNames.length + "\n");

//Se agrega un elemento adicional al principio del arreglo
kodersNames.unshift("Francisco");

console.log("Verificamos se haya agregado correctamente el elemento al arreglo:");
console.log(kodersNames);
console.log("Longitud actual del arreglo: " + kodersNames.length + "\n");

//Formas en las cuales podemos acceder al valor de cada elemento del arreglo

console.log("Forma 1 para acceder al valor de cada elemento del arreglo:\n");

for(let i = 0; i < kodersNames.length; i++){
  console.log(kodersNames[i]);
}

console.log("\n");

console.log("Forma 2 para acceder al valor de cada elemento del arreglo:\n");

for(let koder of kodersNames){
  console.log(koder);
}

console.log("\n");

console.log("Forma 3 para acceder al valor de cada elemento del arreglo:\n");

kodersNames.forEach(koder => console.log(koder));

console.log("\n");

console.log("Obtener índices de algunos elementos en el arreglo: \n");

let firstMember = kodersNames.indexOf("Roberto");
let secondMember = kodersNames.indexOf("Heidel");
let thirdMember = kodersNames.indexOf("Mónica");

console.log(firstMember);
console.log(secondMember);
console.log(thirdMember);

console.log("\n");

console.log('Se crea un nuevo arreglo a partir de extraer elementos de "kodersNames"');

let firstTeam = kodersNames.splice(firstMember, thirdMember);

console.log(firstTeam);

console.log("\n");

console.log('Se eliminan el primer y último elemento del arreglo "kodersNames"');

kodersNames.shift();
kodersNames.pop();

console.log(kodersNames);

console.log("\n");

console.log('Se obtiene el arreglo "kodersNames" como cadena de texto:');

let stringKodersNames = kodersNames.join(",");

console.log(stringKodersNames);

console.log("\n");

console.log('Volvemos a obtener el arreglo "kodersNames" a partir de la cadena de texto creada:');

console.log(stringKodersNames.split(","));

console.log("\n");