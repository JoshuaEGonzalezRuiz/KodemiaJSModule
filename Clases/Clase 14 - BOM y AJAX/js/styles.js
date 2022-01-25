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
