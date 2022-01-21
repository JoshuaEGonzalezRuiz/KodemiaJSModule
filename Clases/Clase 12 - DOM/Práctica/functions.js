let divGeneral = document.createElement("div");

//let titlePage = document.createElement("h1");
//titlePage.innerText = "Hola amigos esto es un h1";

//let subtitlePage = document.createElement("h2");
//subtitlePage.innerText = "Esto es un h2 koders";

//console.log(titlePage.textContent);

//console.log(subtitlePage.textContent);

let imageOne = document.createElement("img");
imageOne.src = "./img/th.jpeg";

let imageTwo = document.createElement("img");
imageTwo.src =
  "https://secure.meetupstatic.com/photos/event/2/b/7/0/600_471971120.jpeg";
imageTwo.height = 200;

let imageThree = document.createElement("img");
imageThree.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png";
imageThree.height = 200;

let descriptionOne = document.createElement("p");
descriptionOne.innerText = "Logo de Kodemia";

let descriptionTwo = document.createElement("p");
descriptionTwo.innerText = "Banner de Kodemia";

let descriptionThree = document.createElement("p");
descriptionThree.innerText = "Logo de JS";
//let elementosHTML = [titlePage, subtitlePage, image];

let elementosHTML = [
  imageOne,
  descriptionOne,
  imageTwo,
  descriptionTwo,
  imageThree,
  descriptionThree,
];

elementosHTML.forEach((element) => {
  divGeneral.appendChild(element);
});

divGeneral.classList.add("divGeneral");

//console.log(titlePage.nextSibling);

//console.log(subtitlePage.previousSibling);

document.body.appendChild(divGeneral);

//console.log(document.body.childNodes);
//console.log(divGeneral.childNodes);
