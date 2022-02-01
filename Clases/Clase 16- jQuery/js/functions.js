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
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  console.log("lat:" + lat + " lng:" + lon);
  getCurrentWeather(lat, lon);
}

function geoError() {
  alert("Geocoder failed.");
}

function getCurrentWeather(lat, lon) {
  var settings = {
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
  console.log(weatherData);
  $(document).ready(function () {
    $("#titlePage").text(weatherData.timezone.split("/")[1]);

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

    $("#imgWeather").attr("src", `./icons/${icon}.png`);

    $("#descLabel").text(
      weatherData.current.weather[0].description.toUpperCase()
    );

    $("#tempLabel").text("Temperatura: ");

    $("#tempValue").text(weatherData.current.temp + "°C");

    $("#tempFeelLabel").text("Sensación térmica: ");

    $("#tempFeelValue").text(weatherData.current.feels_like + "°C");

    $("#cloudsLabel").text("Nubes: ");

    $("#cloudsValue").text(weatherData.current.clouds + "%");

    $("#humidityLabel").text("Humedad: ");

    $("#humidityValue").text(weatherData.current.humidity + "%");

    backgroundColor =
      parseFloat(weatherData.current.feels_like) > 26 &&
      parseFloat(weatherData.current.feels_like) < 38
        ? "#F6D7A7"
        : parseFloat(weatherData.current.feels_like) < 26
        ? "#DEEDF0"
        : parseFloat(weatherData.current.feels_like) > 38
        ? "#FF7878"
        : null;

    $("body").css("background-color", backgroundColor);
  });
}

getLocation();
