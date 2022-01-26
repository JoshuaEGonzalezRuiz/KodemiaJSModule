function divOptionsStyle(divOptions) {
  divOptions.style.marginTop = "20px";
  divOptions.style.marginLeft = "20px";
  divOptions.style.marginRight = "20px";
  divOptions.style.marginBottom = "40px";
  divOptions.style.display = "flex";
  divOptions.style.justifyContent = "center";
  divOptions.style.alignItems = "center";
}

function divMoviesStyle(divMovies) {
  divMovies.style.justifyContent = "space-evenly";
  divMovies.style.display = "grid";
  divMovies.style.gridTemplateColumns = "auto auto auto auto";
  divMovies.style.gridTemplateRows = "auto auto auto auto";
  divMovies.style.gridGap = "25px";
}

function cardMovieStyle(cardMovie) {
  cardMovie.style.padding = "20px";
  cardMovie.style.backgroundColor = "#79B4B7";
  cardMovie.style.height = "380px";
  cardMovie.style.width = "200px";
  cardMovie.style.textAlign = "center";
  cardMovie.style.borderRadius = "20px";
  cardMovie.style.boxShadow = "2px 2px 12px 2px #9D9D9D";
  cardMovie.style.color = "#FEFBF3";
  cardMovie.style.overflowWrap = "";

  cardMovie.onmouseover = () => {
    cardMovie.style.boxShadow = "2px 2px 12px 2px #000";
  };

  cardMovie.onmouseleave = () => {
    cardMovie.style.boxShadow = "2px 2px 12px 2px #9D9D9D";
  };
}

function labelSortSelectStyle(labelSortSelect) {
  labelSortSelect.style.margin = "25px";
}

function sortSelectStyle(sortSelect) {
  sortSelect.style.paddingLeft = "5px";
  sortSelect.style.paddingRight = "5px";
  sortSelect.style.height = "25px";
  sortSelect.style.borderRadius = "25px";
}

function labelYearSelectStyle(labelYearSelect) {
  labelYearSelect.style.margin = "25px";
}

function yearSelectStyle(yearSelect) {
  yearSelect.style.borderRadius = "25px";
}

function movieImageStyle(movieImage, movie, movieTitle, movieDescription) {
  movieImage.height = 300;
  movieImage.width = movie.poster_path ? 200 : 200;
  movieImage.style.borderRadius = "20px";

  movieImage.onclick = () => {
    if (movie.overview) {
      movieImage.style.display = "none";
      movieTitle.style.display = "none";
      movieDescription.style.display = "inline";
    } else {
      alert("Esta película no cuenta con sinopsis por el momento");
    }
  };
}

function movieDescriptionStyle(
  movieDescription,
  movie,
  movieImage,
  movieTitle
) {
  movieDescription.style.display = "none";

  movie.overview
    ? (movieDescription.onclick = () => {
        movieImage.style.display = "inline";
        movieTitle.style.display = "inline";
        movieDescription.style.display = "none";
      })
    : null;
}

function divPagesStyle(divPages) {
  divPages.style.margin = "25px";
  divPages.style.overflowX = "scroll";
  divPages.style.overflowY = "hidden";
  divPages.style.whiteSpace = "nowrap";
}
