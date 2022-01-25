let elementsHTML = [];

/* DECLARACIÓN DE LOS DIVS*/

let divMovies = document.createElement("div");

/* DECLARACIÓN DE LOS DIVS*/

/* SE AGREGAN LOS ELEMENTOS AL DIV PRINCIPAL*/

let select = document.createElement("select");
let optionOne = document.createElement("option");
optionOne.textContent = "Popularidad (Descendente)";
optionOne.value = "popularity.desc";
select.appendChild(optionOne);

let optionTwo = document.createElement("option");
optionTwo.textContent = "Promedio de votos (Descendente)";
optionTwo.value = "vote_average.desc";
select.appendChild(optionTwo);

select.onchange = () => {
  makeImages(divMovies);
};

makeImages(divMovies);

/* SE AGREGAN LOS ELEMENTOS AL DIV PRINCIPAL*/

/* SE AGREGA EL DIV PRINCIPAL AL BODY*/

document.body.appendChild(divMovies);
document.body.appendChild(select);
document.body.style.backgroundColor = "#FEFBF3";
document.body.style.fontFamily = "'Nunito'";

/* SE AGREGA EL DIV PRINCIPAL AL BODY*/

/* DECLARACIÓN DE LOS ESTILOS*/

divMoviesStyle(divMovies);

/* DECLARACIÓN DE LOS ESTILOS*/

/* DECLARACIÓN DE LAS FUNCIONES*/

function getMovies(sort_by, year, page) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      `https://api.themoviedb.org/3/discover/movie?sort_by=${sort_by}&api_key=${api_key}&language=es-MX&page=${page}&year=${year}`,
      //`https://api.themoviedb.org/3/discover/movie?sort_by=release_date.desc&api_key=${api_key}&language=es-MX&page=2`,
      true
    );

    xhr.onload = function () {
      if (this.readyState === 4 && this.status == 200) {
        console.log(this.responseText);
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

    xhr.send();

    /*let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${api_key}`,
      requestOptions
    )
      .then((response) => resolve(response.json()))
      .catch((error) =>
        reject({
          status: error.status,
          statusText: error.statusText,
        })
      );*/
  });
}
async function makeImages(div) {
  let movies = await getMovies(
    select.options[select.selectedIndex].value,
    2015,
    1
  );

  movies.results.forEach((movie) => {
    console.log(movie);

    let cardMovie = document.createElement("div");

    let movieImage = document.createElement("img");
    movieImage.src = `${url_images}${movie.poster_path}`;
    movieImage.height = 300;
    movieImage.style.borderRadius = "20px";
    movie.overview
      ? (movieImage.onclick = () => {
          movieImage.style.display = "none";
          movieTitle.style.display = "none";
          movieDescription.style.display = "inline";
        })
      : null;

    let movieTitle = document.createElement("p");
    movieTitle.innerText = movie.original_title;

    let divMovieDescription = document.createElement("div");
    divMovieDescription.style.height = "350px";
    divMovieDescription.style.overflowX = "hidden";

    let movieDescription = document.createElement("p");
    movieDescription.innerText = movie.overview;
    movieDescription.style.display = "none";
    movie.overview
      ? (movieDescription.onclick = () => {
          movieImage.style.display = "inline";
          movieTitle.style.display = "inline";
          movieDescription.style.display = "none";
        })
      : null;

    divMovieDescription.appendChild(movieDescription);

    cardMovie.appendChild(movieImage);
    cardMovie.appendChild(movieTitle);
    cardMovie.appendChild(divMovieDescription);

    cardMovieStyle(cardMovie);

    div.appendChild(cardMovie);
  });
}

/* DECLARACIÓN DE LAS FUNCIONES*/
