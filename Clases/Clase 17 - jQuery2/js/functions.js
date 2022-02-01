let backgroundColor = "";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    alert("Geolocation is not supported by this browser.");
    getLocation();
  }
}

function geoSuccess(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log("lat:" + lat + " lng:" + lon);
  getCurrentWeather(lat, lon);
}

function geoError() {
  alert("Geocoder failed.");
}

function getCurrentWeather(lat, lon) {
  /*var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=metric&lang=es&appid=${api_key}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => makePage(result))
    .catch((error) => console.log(error));*/
  let settings = {
    url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=metric&lang=es&appid=${api_key}`,
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    //console.log(response);
    makePage(response);
  });
}

function makePage(weatherData) {
  $(document).ready(function () {
    console.log(weatherData);

    let icon = weatherData.current.weather[0].icon;

    if (icon == "03d" || icon == "03n" || icon == "02d" || icon == "02n") {
      icon = "03";
    } else if (icon == "04d" || icon == "04n") {
      icon = "04";
    } else if (icon == "09d" || icon == "09n") {
      icon = "09";
    } else if (icon == "11d" || icon == "11n") {
      icon = "10";
    } else if (icon == "13d" || icon == "13n") {
      icon = "13";
    } else if (icon == "50d" || icon == "50n") {
      icon = "50";
    }

    backgroundColor =
      parseFloat(weatherData.current.feels_like) > 26 &&
        parseFloat(weatherData.current.feels_like) < 38
        ? "#F6D7A7"
        : parseFloat(weatherData.current.feels_like) < 26
          ? "#DEEDF0"
          : parseFloat(weatherData.current.feels_like) > 38
            ? "#FF7878"
            : null;

    $("body").append(
      $("<div/>").attr("id", "divWeather").append(
        $("<div/>").attr("id", "cardWeather").append(
          $("<div/>").attr("id", "divTitle").append(
            $("<h1/>").attr("id", "titlePage").text(weatherData.timezone.split("/")[1])
          ),
          $("<img/>").attr({
            id: "imgWeather",
            src: `./icons/${icon}.png`,
          }),
          $("<div/>").attr("id", "cardDescription").append(
            $("<p/>").attr("id", "descLabel").text(weatherData.current.weather[0].description.toUpperCase())
          ),
          $("<div/>").attr("id", "cardTemperature").append(
            $("<p/>").attr("id", "tempLabel").text("Temperatura: "),
            $("<p/>").attr("id", "tempValue").text(weatherData.current.temp + "°C")
          ),
          $("<div/>").attr("id", "cardTempFeel").append(
            $("<p/>").attr("id", "tempFeelLabel").text("Sensación térmica: "),
            $("<p/>").attr("id", "tempFeelValue").text(weatherData.current.feels_like + "°C")
          ),
          $("<div/>").attr("id", "cardClouds").append(
            $("<p/>").attr("id", "cloudsLabel").text("Nubes: "),
            $("<p/>").attr("id", "cloudsValue").text(weatherData.current.clouds + "%")
          ),
          $("<div/>").attr("id", "cardHumidity").append(
            $("<p/>").attr("id", "humidityLabel").text("Humedad: "),
            $("<p/>").attr("id", "humidityValue").text(weatherData.current.humidity + "%")
          )
        )
      )
    );

    styles();

  });
}

getLocation();
