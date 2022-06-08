/* Weather Search Engine and Update City Name */

function displayWeather(response) {
  let temp = Math.round(response.data.main.temp);
  document.querySelector("#main-temp-num").innerHTML = temp;
  console.log(response.data);
}

function updateCityWeather(event) {
  event.preventDefault();
  let city = document.querySelector("#city-name");
  document.querySelector("#city-display").innerHTML = city.value;
  let apiKey = "5630ddfbed4d1b38c51e1715cf9e9557";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector("#city-input");
form.addEventListener("submit", updateCityWeather);

/* Current Location Weather */

function displayLocationWeather(response) {
  let temp = Math.round(response.data.main.temp);
  document.querySelector("#main-temp-num").innerHTML = temp;
  document.querySelector("#city-display").innerHTML = response.data.name;
}

function getPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "5630ddfbed4d1b38c51e1715cf9e9557";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayLocationWeather);
}

function updateCurrentLocationWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", updateCurrentLocationWeather);

/* Display Date and Time */

function displayDate() {
  let date = new Date();
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = date.getHours();
  let hourTwelve = date.getHours() - 12;
  let min = date.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  } else {
    min = min;
  }
  let timeAM;
  if (hour < 10) {
    timeAM = `0${hour}:${min}`;
  } else if (hour === 0) {
    timeAM = `12:${min}`;
  } else {
    timeAM = `${hour}:${min}`;
  }
  let timePM;
  if (hourTwelve < 10) {
    timePM = `0${hourTwelve}:${min}`;
  } else {
    timePM = `${hour}:${min}`;
  }
  let fullDateAM = `${days[day]} ${timeAM} am`;
  let fullDatePM = `${days[day]} ${timePM} pm`;
  if (hour > 12) {
    return fullDatePM;
  } else {
    return fullDateAM;
  }
}
document.querySelector("#date-time").innerHTML = displayDate();

/* F to C converter 

let temp = document.querySelector("#main-temp-num").innerHTML;
let tempCelsius = Math.round(((temp - 32) * 5) / 9);
let tempFahrenheit = temp;
function convertToC(event) {
  event.preventDefault();
  document.getElementById("main-temp-num").innerHTML = tempCelsius;
}
function convertToF(event) {
  event.preventDefault();
  document.getElementById("main-temp-num").innerHTML = temp;
}
let cLink = document.querySelector("#temp-c");
cLink.addEventListener("click", convertToC);
let fLink = document.querySelector("#temp-f");
fLink.addEventListener("click", convertToF);

*/
