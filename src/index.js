function searchCity(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#city-search");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchElement.value;
}

let formElement = document.querySelector("#submit-city-form");
formElement.addEventListener("submit", searchCity);
