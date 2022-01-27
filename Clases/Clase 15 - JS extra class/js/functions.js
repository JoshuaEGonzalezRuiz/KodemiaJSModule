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
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=metric&lang=es&appid=${api_key}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => makePage(result))
    .catch((error) => console.log("error", error));
}

function makePage(weatherData) {
  console.log(weatherData);

  let divWeather = document.createElement("div");

  let divTitle = document.createElement("div");

  let titlePage = document.createElement("h1");
  titlePage.innerText = weatherData.timezone.split("/")[1];

  let cardWeather = document.createElement("div");

  let imgWeather = document.createElement("img");
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

  imgWeather.src = `./icons/${icon}.png`;

  let cardDescription = document.createElement("div");

  let descLabel = document.createElement("p");
  descLabel.innerText =
    weatherData.current.weather[0].description.toUpperCase();

  let cardTemperature = document.createElement("div");

  let tempLabel = document.createElement("p");
  tempLabel.innerText = "Temperatura: ";

  let tempValue = document.createElement("p");
  tempValue.innerText = weatherData.current.temp + "°C";

  let cardTempFeel = document.createElement("div");

  let tempFeelLabel = document.createElement("p");
  tempFeelLabel.innerText = "Sensación térmica: ";

  let tempFeelValue = document.createElement("p");
  tempFeelValue.innerText = weatherData.current.feels_like + "°C";

  backgroundColor =
    parseFloat(weatherData.current.feels_like) > 26 &&
    parseFloat(weatherData.current.feels_like) < 38
      ? "#F6D7A7"
      : parseFloat(weatherData.current.feels_like) < 26
      ? "#DEEDF0"
      : parseFloat(weatherData.current.feels_like) > 38
      ? "#FF7878"
      : null;

  tempFeelValue.style.fontSize = "18px";

  let cardClouds = document.createElement("div");

  let cloudsLabel = document.createElement("p");
  cloudsLabel.innerText = "Nubes: ";

  let cloudsValue = document.createElement("p");
  cloudsValue.innerText = weatherData.current.clouds + "%";

  let cardHumidity = document.createElement("div");

  let humidityLabel = document.createElement("p");
  humidityLabel.innerText = "Humedad: ";

  let humidityValue = document.createElement("p");
  humidityValue.innerText = weatherData.current.humidity + "%";

  divTitle.appendChild(titlePage);

  cardDescription.appendChild(descLabel);

  cardTemperature.appendChild(tempLabel);
  cardTemperature.appendChild(tempValue);

  cardTempFeel.appendChild(tempFeelLabel);
  cardTempFeel.appendChild(tempFeelValue);

  cardClouds.appendChild(cloudsLabel);
  cardClouds.appendChild(cloudsValue);

  cardHumidity.appendChild(humidityLabel);
  cardHumidity.appendChild(humidityValue);

  cardWeather.appendChild(divTitle);
  cardWeather.appendChild(imgWeather);
  cardWeather.appendChild(cardDescription);
  cardWeather.appendChild(cardTemperature);
  cardWeather.appendChild(cardTempFeel);
  cardWeather.appendChild(cardClouds);
  cardWeather.appendChild(cardHumidity);
  divWeather.appendChild(cardWeather);

  document.body.appendChild(divWeather);

  styles(
    divWeather,
    divTitle,
    cardWeather,
    imgWeather,
    cardDescription,
    descLabel,
    cardTemperature,
    tempLabel,
    tempValue,
    cardTempFeel,
    tempFeelLabel,
    cardClouds,
    cloudsLabel,
    cloudsValue,
    cardHumidity,
    humidityLabel,
    humidityValue,
    document
  );
  //<a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>
}

getLocation();
