let titlePage = document.createElement("h1");
titlePage.innerText = "Hola amigos esto es un h1";

let subtitlePage = document.createElement("h2");
subtitlePage.innerText = "Esto es un h2 koders";

let elementosHTML = [titlePage, subtitlePage, createTable()];

function createTable() {
  let table = document.createElement("table");

  let encabezado = document.createElement("thead");
  let filaEncabezado = document.createElement("tr");

  let contenidoPrimerEncabezado = document.createElement("th");
  contenidoPrimerEncabezado.innerText = "Nombre";
  let contenidoSegundoEncabezado = document.createElement("th");
  contenidoSegundoEncabezado.innerText = "Descripción";

  filaEncabezado.appendChild(contenidoPrimerEncabezado);
  filaEncabezado.appendChild(contenidoSegundoEncabezado);

  encabezado.appendChild(filaEncabezado);

  let pie = document.createElement("tfoot");
  let filaPie = document.createElement("tr");

  pie.appendChild(filaPie);

  table.appendChild(encabezado);
  table.appendChild(pie);

  return table;
}

elementosHTML.forEach((element) => {
  divGeneral.appendChild(element);
});

document.body.appendChild(divGeneral);
