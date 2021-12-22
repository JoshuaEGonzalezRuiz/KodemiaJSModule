console.log("\nFomas de declarar una cadena\n");
//Formas de declarar una cadena

  //String primitivo
  let myStringPrimitivo = "Los Koders aprenden rápidamente.";

  //Objeto String
  let myObjectString = new String("Los Koders aprenden rápidamente.");

  //Diferencia:
    //String primitivo
      console.log("String primitivo antes -> ");
      console.log(myStringPrimitivo);

      myStringPrimitivo = 2;

      console.log("String primitivo después -> ");
      console.log(myStringPrimitivo);

    //Objeto String
      console.log("\nObjeto String antes -> ");
      console.log(myObjectString);

      myObjectString = new String(2);

      console.log("Objeto String después -> ");
      console.log(myObjectString);

  //Como se puede observar, al usar la notación String estamos indicando que el valor siempre será una cadena, por lo que al ingresar un número JS lo vuelve cadena.

console.log("\nDiferentes formas de obtener los caracteres en una cadena\n");


//Diferentes formas de obtener los caracteres en una cadena

  let myString = "Los Koders aprenden rápidamente.";

  //Si usamos charAt()
  console.log("Usando charAt() -> "); 
  console.log(myString.charAt(myString.length-2));//Para obtener un valor es necesario que sea un número entero (el ingresar valores negativos a veces se usa para corroborar que lo que se está usando es una cadena)

  //Si usamos slice()
  console.log("Usando slice() -> ");
  console.log(myString.slice(-2, -1));//Requiere un punto de partida y uno de final, esto permite que el método busque entre el valor inicial y hasta un índice antes del final indicado. 

  //Si usamos at()
  console.log("Usando at() -> "); 
  /*console.log(myString.at(-2));//Permite obtener el caracter deseado ya sea usando valores positivos o negativos entendiendo la cadena de izquierda a derecha o viceversa (en este caso no es soportado por el compilador, es por eso que ya no es muy usado)

  // izq a der -> positivos
  // der a izq -> negativos*/

console.log("\nConcatenar cadenas\n");

//Diferentes formas de obtener los caracteres en una cadena
  let text1 = "El rey de constantinopla";
  let text2 = "se quizo descontantinoplar";
  let text3 = "y el que lo descontantinople";
  let text4 = "será un buen descontantinoplador.";


  console.log("Usando concat() -> "); 

  console.log(text1.concat(" ",text2).concat(" ",text3).concat(" ",text4));
  
  console.log("\n"); 

  console.log(text1.concat(text2).concat(text3).concat(text4)); //Este método permite concatenar las cadenas necesarias en una sola, tiene la capacidad de modificar el caracter de unión que deseas aparezca (en este ejemplo un espacio, pero puede ser cualquier otro caracter o número) o simplemente concaternarlo sin incluir el caracter de separación (útil para claves o llaves complejas)

console.log("\nVerificar si existe un conjunto de caracteres en una cadena\n");

  console.log("Usando includes() -> "); 

  console.log(text1.includes("rey")); //Devuelve true indicando que la palabra rey si existe en la cadena
  console.log(text1.includes("es")); //Devuelve false indicando que la palabra es no existe en la cadena

  //Esto puede servir para corroborar que alguna palabra esté en algún resultado traído por una API o BD

console.log("\nReemplazar una parte de una cadena por otra\n");

  console.log("Usando replace() -> ");
  console.log(text1.replace("rey", "príncipe"));
  console.log(text1.replace(/rey/i, "príncipe"));

  //Esto permite sustituir un texto por otro dentro de una cadena, de forma más específica suele usarse una expresión regular que incluya todas las condiciones que se deben cumplir para lo que se quiere reemplazar

console.log("\nVolver una cadena a arreglo con base en un caracter o cadena\n");

  console.log("Usando split() -> ");
  console.log(text1.split("rey"));
  
  //Esto permite que JS convierta la cadena en arreglo colocando cada valor antes y después del caracter o cadena incluida como condición en una "caja" del arreglo, esta cadena condición no se visualiza en el arreglo ya que se omite, es útil cuando se quiere construir un envío a una API con base en una cadena

console.log("\nBonus: buscando el índice de un texto dentro de una cadena\n");

  console.log("Usando indexOf() -> ");
  console.log(text1.indexOf("e"));
  console.log(text1.charAt(text1.indexOf("e")));
  console.log("\n"); 

  //En este caso vemos que es correcto que en la posición 4 del texto se encuentra la letra e, pero veamos que ocurre al buscar una palabra

  console.log(text1.indexOf("ey"));
  console.log(text1.charAt(text1.indexOf("ey")));

  //Vemos que nos devuelve el mismo índice y no es incorrecto, nos quiere decir que la palabra que buscamos empieza desde la posición 4 de la palabra inicial

  console.log(text1.slice(text1.indexOf("ey"), text1.length));

  //Como vemos, ahora podemos cortar el texto usando el método slice para que solo imprima a partir del texto "ey" nuestra nueva cadena

  //Nota: Este método indexOf devuelve algún valor negativo cuando la palabra que queremos buscar no existe en la cadena