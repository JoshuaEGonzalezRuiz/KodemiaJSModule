console.log("Práctica para ver en la clase 13");

let div = document.createElement("div");
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.backgroundColor = "#000";
div.style.flexDirection = "column";
div.style.alignItems = "center";

let select = document.createElement("select");
select.style.margin = "10px";
let optionOne = document.createElement("option");
optionOne.textContent = "Opción 1";
optionOne.value = "Seleccionaste la opción 1";

let optionTwo = document.createElement("option");
optionTwo.textContent = "Opción 2";
optionTwo.value = "Seleccionaste la opción 2";

select.appendChild(optionOne);
select.appendChild(optionTwo);

select.onchange = () => {
  console.log(select.options[select.selectedIndex].value);
};

let button = document.createElement("button");
button.innerText = "Soy un botón";
button.style.margin = "10px";

button.onclick = () => {
  console.log("Has hecho click en un botón");
};

let input = document.createElement("input");
input.type = "text";
input.value = "Esto es un texto por defecto";
input.style.margin = "10px";

input.onselect = () => {
  console.log("Has activado el evento onselect");
};

input.oncopy = () => {
  console.log("Has activado el evento oncopy");
};

input.oncut = () => {
  console.log("Has activado el evento oncut");
};

input.onpaste = () => {
  console.log("Has activado el evento onpaste");
};

input.onchange = (ev) => {
  console.log(input.value);
};

/*input.onkeyup = () => {
  //No tan usado basta con el onchange
  console.log("Has activado el evento onkeyup");
};*/

/*input.addEventListener(
  "keyup",
  () => {
    console.log("Has activado el evento onkeyup");
  },
  true
);*/

/*input.onkeypress = () => {
  console.log("Has activado el evento onkeypress");
};*/

/*input.onkeydown = () => {
  console.log("Has activado el evento onkeydown");
};*/

div.appendChild(select);
div.appendChild(button);
div.appendChild(input);

div.oncontextmenu = () => {
  alert("Has ejecutado un oncontextmenu");
};

div.ondblclick = () => {
  console.log("Has ejecutado un ondblclick");
};

div.onmouseover = () => {
  console.log("Has ejecutado un onmouseover");
};

div.onclick = (event) => {
  let axisX = event.screenX;
  let axisY = event.screenY;
  console.log(
    "Las coordenadas del eje x son: " +
      axisX +
      " las coordenadas del eje Y son: " +
      axisY
  );
};

document.body.appendChild(div);
