let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

let cityRaw = prompt("Enter a city");
let city = cityRaw.toLowerCase();

if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let tempF = (temperature * 9) / 5 + 32;
  console.log("This is tempF", tempF);
  alert(
    `It is currently ${Math.round(temperature)}°C (${Math.round(
      tempF
    )}°F) in ${cityRaw} with a humidity of ${Math.round(humidity)}%.`
  );
} else {
  city = city.replace(" ", "-");
  alert(
    `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${city}.`
  );
}

// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   sanFrancisco: {
//     temp: 20.9,
//     humidity: 100,
//   },
//   moscow: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// // write your code here

// let cityRaw = prompt("Enter a city");
// let city = cityRaw.toLowerCase();
// if (city === "paris") {
//   let temperature = weather.paris.temp;
//   let humidity = weather.paris.humidity;
//   let sentence = `It is currently ${Math.round(
//     temperature
//   )}°C in ${cityRaw} with a humidity of ${Math.round(humidity)}%.`;
//   alert(sentence);
// } else if (city === "tokyo") {
//   let temperature = weather.tokyo.temp;
//   let humidity = weather.tokyo.humidity;
//   let sentence = `It is currently ${Math.round(
//     temperature
//   )}°C in ${cityRaw} with a humidity of ${Math.round(humidity)}%.`;
//   alert(sentence);
// } else if (city === "lisbon") {
//   let temperature = weather.lisbon.temp;
//   let humidity = weather.lisbon.humidity;
//   let sentence = `It is currently ${Math.round(
//     temperature
//   )}°C in ${cityRaw} with a humidity of ${Math.round(humidity)}%.`;
//   alert(sentence);
// } else if (city === "san francisco") {
//   let temperature = weather.sanFrancisco.temp;
//   let humidity = weather.sanFrancisco.humidity;
//   let sentence = `It is currently ${Math.round(
//     temperature
//   )}°C in ${cityRaw} with a humidity of ${Math.round(humidity)}%.`;
//   alert(sentence);
// } else if (city === "moscow") {
//   let temperature = weather.moscow.temp;
//   let humidity = weather.moscow.humidity;
//   let sentence = `It is currently ${Math.round(
//     temperature
//   )}°C in ${cityRaw} with a humidity of ${Math.round(humidity)}%.`;
//   alert(sentence);
// } else {
//   let webCity = city.replace(" ", "-");
//   alert(
//     `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${webCity}.`
//   );
// }

// Real Solution!

// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   moscow: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// let city = prompt("Enter a city?");
// city = city.toLowerCase();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemperature = Math.round(temperature);
//   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

//   alert(
//     `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }
