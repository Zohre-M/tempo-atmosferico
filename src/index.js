function searchCity(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#city-search");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchElement.value;
  getWeatherData(searchElement.value);
}

function getWeatherData(city) {
  let apiKey = "118fe35e7ob1e1d3379dc44t5fac90b2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&untis=metric`;
  axios.get(apiUrl).then(displayWeatherData);
}
function displayWeatherData(response) {
  console.log(response);
  let currentTemp = Math.round(response.data.temperature.current);
  let currentTempElement = document.querySelector("#current-temp-amount");
  let currentWeatherDescriptionElement = document.querySelector(
    "#current-weather-desription"
  );
  let currentWeatherDescription = response.data.condition.description;
  console.log(currentWeatherDescriptionElement);
  let city = response.data.city;
  let cityElement = document.querySelector("#current-city");
  let currentHumidity = response.data.temperature.humidity;
  let currentHumidityElement = document.querySelector("#current-humidity");
  let currentWindSpeed = Math.round(response.data.wind.speed);
  let currentWindSpeedElement = document.querySelector("#current-wind-speed");

  currentTempElement.innerHTML = currentTemp;
  currentWeatherDescriptionElement.innerHTML = currentWeatherDescription;
  cityElement.innerHTML = city;
  currentHumidityElement.innerHTML = `${currentHumidity}%`;
  currentWindSpeedElement.innerHTML = `${currentWindSpeed}km/h`;
}

let formElement = document.querySelector("#submit-city-form");
formElement.addEventListener("submit", searchCity);
