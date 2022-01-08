console.log("Práctica Clase 6 - Funciones y ciclos\n");

let count = 0;

function randomNumbers(firstNumber) {

  console.log('Se multiplica el número pasado por parámetro a la función "randomNumbers" por el valor del contador hasta que el contador llegue hasta 9: \n');

  for (count = 0; count < 10; count++) {
    printMultiplication(firstNumber * count);
  }

  console.log("\n");
  console.log('Se divide el número pasado por parámetro a la función "randomNumbers" por el valor del contador" hasta que el contador llegue hasta 19: \n');

  while (count < 20) {
    count += 1;
    printDivision(firstNumber, count);
  }

  console.log("\n");

  console.log('Se multiplica el número pasado por parámetro a la función "randomNumbers" por el valor del contador hasta que el contador llegue hasta 29: \n');

  do {
    count += 1;
    printMultiplication(firstNumber * count);
  } while (count < 30)

}

let printMultiplication = (result) => console.log(result);
//let printMultiplication = (result) => { console.log(result) };


let printDivision = (number, divider) => console.log(number / divider);
//let printDivision = (number, divider) => { console.log(number / divider)};

randomNumbers(5);