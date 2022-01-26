/* DECLARACIÓN DE LOS DIVS*/
let page = 1;

let divOptions = document.createElement("div");

let divMovies = document.createElement("div");

let divPages = document.createElement("div");

/* DECLARACIÓN DE LOS DIVS*/

/* SE AGREGAN LOS ELEMENTOS AL DIV PRINCIPAL*/

let options = [
  {
    name: "Popularidad (desc)",
    value: "popularity.desc",
  },
  {
    name: "Popularidad (asc)",
    value: "popularity.asc",
  },
  {
    name: "Fecha de salida (asc)",
    value: "release_date.asc",
  },
  {
    name: "Fecha de salida (desc)",
    value: "release_date.desc",
  },
  {
    name: "Ingreso (asc)",
    value: "revenue.asc",
  },
  {
    name: "Ingreso (desc)",
    value: "revenue.desc",
  },
  {
    name: "Fecha de lanzamiento principal (asc)",
    value: "primary_release_date.asc",
  },
  {
    name: "Fecha de lanzamiento principal (desc)",
    value: "primary_release_date.desc",
  },
  {
    name: "Título original (asc)",
    value: "original_title.asc",
  },
  {
    name: "Título original (desc)",
    value: "original_title.desc",
  },
  {
    name: "Voto promedio (asc)",
    value: "vote_average.asc",
  },
  {
    name: "Voto promedio (desc)",
    value: "vote_average.desc",
  },
  {
    name: "Cantidad de votos (asc)",
    value: "vote_count.asc",
  },
  {
    name: "Cantidad de votos (desc)",
    value: "vote_count.desc",
  },
];

let labelSortSelect = document.createElement("p");
labelSortSelect.innerText = "Ordenar por: ";
labelSortSelectStyle(labelSortSelect);

let sortSelect = document.createElement("select");
sortSelectStyle(sortSelect);

let labelYearSelect = document.createElement("p");
labelYearSelect.innerText = "Año: ";
labelYearSelectStyle(labelYearSelect);

let yearSelect = document.createElement("select");
yearSelectStyle(yearSelect);

options.forEach((option) => {
  let opt = document.createElement("option");
  opt.textContent = option.name;
  opt.value = option.value;
  sortSelect.appendChild(opt);
});

for (let index = new Date().getFullYear(); index >= 1900; --index) {
  let opt = document.createElement("option");
  opt.textContent = index;
  opt.value = index;
  yearSelect.appendChild(opt);
}

divOptions.appendChild(labelSortSelect);
divOptions.appendChild(sortSelect);
divOptions.appendChild(labelYearSelect);
divOptions.appendChild(yearSelect);

for (let index = 1; index < 200; index++) {
  let buttonOtherPage = document.createElement("button");
  buttonOtherPage.innerText = index;
  buttonOtherPage.style.marginTop = "80px";
  buttonOtherPage.style.marginLeft = "5px";
  buttonOtherPage.style.marginRight = "5px";
  buttonOtherPage.style.backgroundColor = "#79B4B7";
  buttonOtherPage.style.border = "none";
  buttonOtherPage.style.borderRadius = "20px";
  buttonOtherPage.style.color = "#FEFBF3";

  console.log(buttonOtherPage.style.backgroundColor);
  buttonOtherPage.onclick = () => {
    page = parseInt(buttonOtherPage.innerText);
    deleteAllinDiv();
    makeImages(
      divMovies,
      sortSelect.options[sortSelect.selectedIndex].value,
      yearSelect.options[yearSelect.selectedIndex].value,
      page
    );
  };

  divPages.appendChild(buttonOtherPage);
}

sortSelect.onchange = () => {
  deleteAllinDiv();
  makeImages(
    divMovies,
    sortSelect.options[sortSelect.selectedIndex].value,
    yearSelect.options[yearSelect.selectedIndex].value,
    page
  );
};

yearSelect.onchange = () => {
  deleteAllinDiv();
  makeImages(
    divMovies,
    sortSelect.options[sortSelect.selectedIndex].value,
    yearSelect.options[yearSelect.selectedIndex].value,
    page
  );
};

makeImages(
  divMovies,
  sortSelect.options[sortSelect.selectedIndex].value,
  yearSelect.options[yearSelect.selectedIndex].value,
  page
);

/* SE AGREGAN LOS ELEMENTOS AL DIV PRINCIPAL*/

/* SE AGREGA EL DIV PRINCIPAL AL BODY*/
document.body.appendChild(divOptions);
document.body.appendChild(divMovies);
document.body.appendChild(divPages);
document.body.style.backgroundColor = "#FEFBF3";
document.body.style.fontFamily = "'Nunito'";

/* SE AGREGA EL DIV PRINCIPAL AL BODY*/

/* DECLARACIÓN DE LOS ESTILOS*/
divOptionsStyle(divOptions);
divMoviesStyle(divMovies);
divPagesStyle(divPages);
/* DECLARACIÓN DE LOS ESTILOS*/

/* DECLARACIÓN DE LAS FUNCIONES*/

function getMovies(sort_by, year, page) {
  return new Promise(function (resolve, reject) {
    /*let xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      `https://api.themoviedb.org/3/discover/movie?sort_by=${sort_by}&api_key=${api_key}&language=es-MX&page=${page}&year=${year}`,
      //`https://api.themoviedb.org/3/discover/movie?sort_by=release_date.desc&api_key=${api_key}&language=es-MX&page=2`,
      true
    );

    xhr.onload = function () {
      if (this.readyState === 4 && this.status == 200) {
        //console.log(this.responseText);
        resolve(JSON.parse(this.responseText));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      }
    };

    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      });
    };

    xhr.send();*/

    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=${sort_by}&api_key=${api_key}&language=es-MX&page=${page}&year=${year}`,
      requestOptions
    )
      .then((response) => resolve(response.json()))
      .catch((error) =>
        reject({
          status: error.status,
          statusText: error.statusText,
        })
      );
  });
}

async function makeImages(div, sort, year, page) {
  let movies = await getMovies(sort, year, page);

  movies.results.forEach((movie) => {
    let cardMovie = document.createElement("div");

    let movieImage = document.createElement("img");
    movieImage.src = movie.poster_path
      ? `${url_images}${movie.poster_path}`
      : `https://upload.wikimedia.org/wikipedia/commons/9/95/No_not.png`;

    let movieTitle = document.createElement("p");
    movieTitle.innerText = movie.original_title;

    let divMovieDescription = document.createElement("div");
    divMovieDescription.style.height = "350px";
    divMovieDescription.style.overflowX = "hidden";

    let movieDescription = document.createElement("p");
    movieDescription.innerText = movie.overview;

    movieDescriptionStyle(movieDescription, movie, movieImage, movieTitle);
    movieImageStyle(movieImage, movie, movieTitle, movieDescription);

    divMovieDescription.appendChild(movieDescription);

    cardMovie.appendChild(movieImage);
    cardMovie.appendChild(movieTitle);
    cardMovie.appendChild(divMovieDescription);

    cardMovieStyle(cardMovie);

    div.appendChild(cardMovie);
  });
}

function deleteAllinDiv() {
  while (divMovies.hasChildNodes()) {
    divMovies.removeChild(divMovies.lastChild);
  }
}
/* DECLARACIÓN DE LAS FUNCIONES*/
