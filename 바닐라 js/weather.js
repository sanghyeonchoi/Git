const COORDS = "coords";
const API_KEY = "ead13315e61be757375f96a1fac189c4";
const weather = document.querySelector(".js-weather");

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `${temp} @${place}`;
    });
}

function handleGeosucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
function handleGeoError() {
  console.log("cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeosucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JOSN.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {}
init();
