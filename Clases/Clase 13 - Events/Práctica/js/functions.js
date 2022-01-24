console.log("Práctica Clase 13");

let divGeneral = document.createElement("div");
divGeneral.id = "divGeneral";
divGeneral.classList.add("divGeneral");

let divTitle = document.createElement("div");
divTitle.id = "divTitle";
divTitle.classList.add("divTitle");

let titlePage = document.createElement("h1");
titlePage.innerText = "Top 3 of the most powerful smartphones of 2021";
titlePage.classList.add("titlePage");

divTitle.appendChild(titlePage);

function createImages(url, datos) {
  let divImage = document.createElement("div");
  divImage.style.height = "500px";
  divImage.style.width = "500px";

  let description = document.createElement("p");
  description.classList.add("description");
  description.innerText = `El ${datos.nombre} cuya fecha de lanzamiento fue el ${datos.specifications.released} 
  cuenta con unas dimensiones de ${datos.specifications.body.dimensions}, un peso de ${datos.specifications.body.weight} y es ${datos.specifications.body.sim}. 
  Su pantalla cuenta con técnología ${datos.specifications.display.type}, un tamaño de ${datos.specifications.display.size} y una resolución de ${datos.specifications.display.resolution}.
  En su interior cuenta con un ${datos.specifications.platform.chipset} siendo un ${datos.specifications.platform.cpu} acompañado de una GPU ${datos.specifications.platform.gpu}
  y viene de fábrica con el S.O ${datos.specifications.platform.os}`;
  description.style.margin = "50px";

  divImage.appendChild(description);

  let img = document.createElement("img");

  let name = document.createElement("p");

  img.src = url;
  img.height = 400;
  name.innerText = datos.nombre;
  img.classList.add("smarthphone");
  divImage.classList.add("divImage");

  divImage.appendChild(img);
  divImage.appendChild(name);

  img.onmouseover = () => {
    img.style.display = "none";
    description.style.display = "inline-block";
    name.style.display = "none";
  };

  description.onmouseover = () => {
    img.style.display = "inline-block";
    description.style.display = "none";
    name.style.display = "inline-block";
  };

  return divImage;
}

console.log(images);

images.forEach((smartphone) => {
  divGeneral.appendChild(createImages(smartphone.url, smartphone));
});

document.body.appendChild(divGeneral);
document.body.appendChild(divTitle);
