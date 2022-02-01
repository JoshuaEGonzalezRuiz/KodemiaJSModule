function styles() {
  $("#divWeather").css("alignItems", "center");
  $("#divWeather").css("display", "flex");
  $("#divWeather").css("margin", "25px");
  $("#divWeather").css("flexDirection", "column");

  $("#divTitle").css("justifyContent", "center");
  $("#divTitle").css("display", "flex");
  $("#divTitle").css("margin", "10px");

  $("#cardWeather").css("margin", "25px");
  $("#cardWeather").css("padding", "25px");
  $("#cardWeather").css("border", "1px solid");
  $("#cardWeather").css("borderRadius", "25px");
  $("#cardWeather").css("backgroundColor", "#F6F6F6");

  $("#imgWeather").css("height", "325");
  $("#imgWeather").css("borderRadius", "20px");

  $("#cardDescription").css("display", "flex");
  $("#cardDescription").css("justifyContent", "center");
  $("#cardDescription").css("margin", "5px");
  $("#cardDescription").css("marginTop", "15px");

  $("#descLabel").css("fontSize", "18px");

  $("#cardTemperature").css("display", "flex");
  $("#cardTemperature").css("justifyContent", "space-between");
  $("#cardTemperature").css("margin", "5px");
  $("#cardTemperature").css("marginTop", "15px");
  $("#cardTemperature").css("borderBottom", "1px solid");

  $("#tempLabel").css("fontSize", "18px");

  $("#tempValue").css("fontSize", "18px");

  $("#cardTempFeel").css("display", "flex");
  $("#cardTempFeel").css("justifyContent", "space-between");
  $("#cardTempFeel").css("margin", "5px");
  $("#cardTempFeel").css("borderBottom", "1px solid");

  $("#tempFeelLabel").css("fontSize", "18px");

  $("#cardClouds").css({
    display: "flex",
    justifyContent: "space-between",
    margin: "5px",
    borderBottom: "1px solid"
  })

  $("#cloudsLabel").css("fontSize", "18px");

  $("#cloudsValue").css("fontSize", "18px");

  $("#cardHumidity").css("display", "flex");
  $("#cardHumidity").css("justifyContent", "space-between");
  $("#cardHumidity").css("margin", "5px");

  $("#humidityLabel").css("fontSize", "18px");

  $("#humidityValue").css("fontSize", "18px");

  $("body").css("backgroundColor", backgroundColor);
  $("body").css("fontFamily", "'Nunito'");
}
