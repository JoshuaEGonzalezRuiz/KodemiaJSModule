let firstWord = "Felices";
let secondWord = "Fiestas";
let thirdWord = "Decembrinas";
let fourthWord = "Koders";

exerciseOne();
exerciseTwo();
exerciseThree();

function exerciseOne() {
  let tableCell = document.getElementById("exerciseOne");

  let labelOne = document.createElement("p");
  labelOne.innerText = `La primera letra de ${firstWord} es: ${
    firstWord[0]
  } y la última es: ${firstWord[firstWord.length - 1]}`;

  let labelTwo = document.createElement("p");
  labelTwo.innerText = `La primera letra de ${secondWord} es: ${
    secondWord[0]
  } y la última es: ${secondWord[secondWord.length - 1]}`;

  let labelThird = document.createElement("p");
  labelThird.innerText = `La primera letra de ${thirdWord} es: ${
    thirdWord[0]
  } y la última es: ${thirdWord[thirdWord.length - 1]}`;

  let labelFourth = document.createElement("p");
  labelFourth.innerText = `La primera letra de ${fourthWord} es: ${
    fourthWord[0]
  } y la última es: ${fourthWord[fourthWord.length - 1]}`;

  tableCell.appendChild(labelOne);
  tableCell.append(labelTwo);
  tableCell.append(labelThird);
  tableCell.append(labelFourth);
}

function exerciseTwo() {
  let tableCell = document.getElementById("exerciseTwo");

  let labelOne;
  let labelTwo;
  let labelThree;
  let labelFour;

  showFirstWord();

  function showFirstWord() {
    labelOne = document.createElement("p");
    labelOne.innerText = firstWord;

    function showSecondWord() {
      labelTwo = document.createElement("p");
      labelTwo.innerText = secondWord;

      function showThirdWord() {
        labelThree = document.createElement("p");
        labelThree.innerText = thirdWord;

        function showFourthWord() {
          labelFour = document.createElement("p");
          labelFour.innerText = fourthWord;
        }

        return showFourthWord();
      }

      return showThirdWord();
    }

    return showSecondWord();
  }

  tableCell.appendChild(labelOne);
  tableCell.appendChild(labelTwo);
  tableCell.appendChild(labelThree);
  tableCell.appendChild(labelFour);
}

function exerciseThree() {
  let tableCell = document.getElementById("exerciseThree");

  let finalWord = firstWord + secondWord + thirdWord + fourthWord;

  let labelFinal = document.createElement("p");

  labelFinal.innerText = finalWord;

  tableCell.appendChild(labelFinal);
}
