//Estructuras cíclicas

console.log("while\n");

let myString = "Hola Koders";
let count = 0;

while (count < myString.length) {
  //Esta estructura revisa primero la condición para que con base en ella pueda decidir si se ejecuta o no el código dentro de ella
  count += 1;
  console.log(myString.charAt(myString.length - count));
}

console.log("\ndo - while\n");

do {
  //Esta estructura realiza primero lo que sea que se requiera realizar dentro de ella y luego checa si debe seguir ejecutando ese código
  console.log(myString.charAt(myString.length - count));
  count -= 1;
} while (count >= 0);

console.log("\nfor\n");
count = myString.length;

for (count; count >= 0; count--) {
  //Esta estructura necesita de un contador, una condición y una expresión para el contador, con estos datos puede verificar si es necesario ejecutarse o seguir ejecutándose
  console.log(myString.charAt(myString.length - count));
}

let arreglo = ["Heidel", "Roberto", "Jess", "Hugo"];

for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}
