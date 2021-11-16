addTableContent(tableContent); //Se inicia la función para agregar los atributos a la tabla deseada.

//Función que con base en la información pasada por parámetro crea los elementos necesarios para que se visualice la información correctamente en la tabla especificada.
function addTableContent(tableContent) {
  var body = document.createElement("tbody"); //Se crea el elemento que será el cuerpo de la tabla

  var cantidadContenido = tableContent.length;
  for (let index = 0; index < cantidadContenido; index++) {
    //Se iteran los objetos del arreglo
    const element = tableContent[index];

    var row = document.createElement("tr"); //Se crea una fila
    var cellMethod = document.createElement("td"); //Se crea la celda que contendrá el nombre del método
    cellMethod.classList.add("methodCell"); //Se añade la clase CSS deseada a la celda

    var linkMethod = document.createElement("a"); //Se crea un link

    linkMethod.target = "_blank"; //Se indica al link que deberá abrir una nueva pestaña para mostrar la información
    linkMethod.href = element.url; //Se añade la URL deseada
    linkMethod.text = element.method; //Se añade el texto que tendrá el link

    row.appendChild(cellMethod); //Se agrega a la fila la celda creada
    cellMethod.appendChild(linkMethod); //Se agrega a la celda el link creado

    var cellDescription = document.createElement("td"); //Se crea la celda que contendrá la descripción del método
    cellDescription.classList.add("descriptionCell"); //Se añade la clase CSS deseada a la celda
    cellDescription.innerText = element.description; // Se agrega el texto deseado a la celda creada

    row.appendChild(cellDescription); //Se agrega la celda creada a la fila deseada

    body.appendChild(row); //Se agrega al cuerpo de la tabla la fila creada

    console.count("console.count", element);
  }

  var table = document.getElementById("consoleMethods"); //Se adquiere acceso a los atributos de la tabla deseada
  table.appendChild(body); //Se agrega a la tabla el cuerpo que acabamos de crear
}

console.log("Esto es un console.log:", tableContent);
console.info("Este es un console.info:", tableContent);
console.assert(tableContent.length % 3 === 0, {
  tableContent: tableContent.length,
  errorMsg: "La longitud del arreglo no es impar",
});
console.error("Este es un console.error");
console.table(tableContent);
