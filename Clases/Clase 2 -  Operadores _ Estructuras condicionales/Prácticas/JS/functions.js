function exerciseOne(numberOne, numberTwo) {
  let a = numberOne.value;
  let b = numberTwo.value;

  if (a > b) {
    isEvenOrOdd(a);
  } else if (a < b) {
    isEvenOrOdd(b);
  }
}

function exerciseTwo(option) {
  let principalDiv = document.getElementById("divFormGeneral");
  if (principalDiv != null) {
    principalDiv.parentNode.removeChild(principalDiv);
  }
  let tdTable = document.getElementById("exerciseTwo");

  let divForm = document.createElement("div");
  divForm.id = "divFormGeneral";

  let form = document.createElement("form");
  form.action = "";
  form.method = "get";
  form.classList.add("form");

  let divFormSideA = document.createElement("div");
  divFormSideA.classList.add("form");
  let divFormSideB = document.createElement("div");
  divFormSideB.classList.add("form");

  let divFormSubmitted = document.createElement("div");
  divFormSubmitted.classList.add("form");

  let inputSideA = document.createElement("input");
  inputSideA.type = "text";
  inputSideA.name = "inputSideA";
  inputSideA.id = "inputSideA";

  let labelSideA = document.createElement("label");
  labelSideA.htmlFor = "inputSideA";
  labelSideA.innerText = "Ingresa el valor de la base";

  divFormSideA.appendChild(labelSideA);
  divFormSideA.appendChild(inputSideA);

  let inputSideB = document.createElement("input");
  inputSideB.type = "text";
  inputSideB.name = "inputSideB";
  inputSideB.id = "inputSideB";

  let labelSideB = document.createElement("label");
  labelSideB.htmlFor = "inputSideB";
  labelSideB.innerText = "Ingresa el valor de la altura";

  divFormSideB.appendChild(labelSideB);
  divFormSideB.appendChild(inputSideB);

  let buttonSubmitted = document.createElement("button");
  buttonSubmitted.type = "submit";
  buttonSubmitted.innerText = "Verificar";

  divFormSubmitted.appendChild(buttonSubmitted);

  form.appendChild(divFormSideA);
  form.appendChild(divFormSideB);
  form.appendChild(divFormSubmitted);

  divForm.appendChild(form);

  tdTable.appendChild(divForm);

  switch (option.value) {
    case "1":
      buttonSubmitted.onclick = () =>
        getTriangleArea(inputSideA.value, inputSideB.value);
      break;
    default:
      buttonSubmitted.onclick = () =>
        getParallelogramOrRectangleArea(inputSideA.value, inputSideB.value);
      break;
  }
}

function exerciseThree(weight, height) {
  let result = weight.value / (height.value * height.value);
  result = result.toFixed(2);

  if (result < 18.5) {
    alert(
      `Su IMC es ${result}, lo que indica que su peso está en la categoría BAJO PESO para adultos de su misma estatura`
    );
  } else if (result >= 18.5 && result <= 24.9) {
    alert(
      `Su IMC es ${result}, lo que indica que su peso está en la categoría NORMAL para adultos de su misma estatura`
    );
  } else if (result >= 25 && result <= 29.9) {
    alert(
      `Su IMC es ${result}, lo que indica que su peso está en la categoría SOBREPESO para adultos de su misma estatura`
    );
  } else {
    alert(
      `Su IMC es ${result}, lo que indica que su peso está en la categoría OBESO para adultos de su misma estatura`
    );
  }
}

function isEvenOrOdd(a) {
  if (a % 2 == 0) {
    alert(`El valor ${a} es par`);
  } else {
    alert(`El valor ${a} es impar`);
  }
}

function getParallelogramOrRectangleArea(base, height) {
  let result = base * height;
  alert(`El área de la figura es: ${result}`);
}

function getTriangleArea(base, height) {
  let result = (base * height) / 2;
  alert(`El área de la figura es: ${result}`);
}
