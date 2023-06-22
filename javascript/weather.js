let input = document.getElementById("input1");

function fetchWeather(cityName) {
  let url = `http://api.weatherstack.com/current?access_key=2e47cb1ed56cea3e629c6dc13944de35&query=${cityName}`;
  let options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    success: (data) => {
      console.log("RESPONSE");
      console.log(data);
      let d = new Date(data.location.localtime);
      $("#weatherData").html(`<p>${data.request.query}</p>
      <p>${d.toLocaleDateString("en-US", options)}</p>
      <h2>${data.current.temperature}°C</h2>
      <p>${data["current"]["weather_descriptions"].join(", ")}</p>`);
    },
  });
}

function inputHandler() {
  let iValue = input.value.trim();
  fetchWeather(iValue);
}

$(document).ready(function () {
  $("#weatherForm").submit(function (e) {
    e.preventDefault();
    inputHandler();
  });
});

//-------------------------------

let x = ["hello", "good", "morning", "clear"];
console.log(x);

let r = x.join(", ");
console.log(r);
