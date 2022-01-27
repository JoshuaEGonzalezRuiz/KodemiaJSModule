function styles(
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
) {
  divWeather.style.alignItems = "center";
  divWeather.style.display = "flex";
  divWeather.style.margin = "25px";
  divWeather.style.flexDirection = "column";

  divTitle.style.justifyContent = "center";
  divTitle.style.display = "flex";
  divTitle.style.margin = "10px";

  cardWeather.style.margin = "25px";
  cardWeather.style.padding = "25px";
  cardWeather.style.border = "1px solid";
  cardWeather.style.borderRadius = "25px";
  cardWeather.style.backgroundColor = "#F6F6F6";

  imgWeather.height = 325;
  imgWeather.style.borderRadius = "20px";

  cardDescription.style.display = "flex";
  cardDescription.style.justifyContent = "center";
  cardDescription.style.margin = "5px";
  cardDescription.style.marginTop = "15px";

  descLabel.style.fontSize = "18px";

  cardTemperature.style.display = "flex";
  cardTemperature.style.justifyContent = "space-between";
  cardTemperature.style.margin = "5px";
  cardTemperature.style.marginTop = "15px";
  cardTemperature.style.borderBottom = "1px solid";

  tempLabel.style.fontSize = "18px";

  tempValue.style.fontSize = "18px";

  cardTempFeel.style.display = "flex";
  cardTempFeel.style.justifyContent = "space-between";
  cardTempFeel.style.margin = "5px";
  cardTempFeel.style.borderBottom = "1px solid";

  tempFeelLabel.style.fontSize = "18px";

  cardClouds.style.display = "flex";
  cardClouds.style.justifyContent = "space-between";
  cardClouds.style.margin = "5px";
  cardClouds.style.borderBottom = "1px solid";

  cloudsLabel.style.fontSize = "18px";

  cloudsValue.style.fontSize = "18px";

  cardHumidity.style.display = "flex";
  cardHumidity.style.justifyContent = "space-between";
  cardHumidity.style.margin = "5px";

  humidityLabel.style.fontSize = "18px";

  humidityValue.style.fontSize = "18px";

  document.body.style.backgroundColor = backgroundColor;
  document.body.style.fontFamily = "'Nunito'";
}
