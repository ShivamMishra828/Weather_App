const userTab = document.querySelector('[data-userWeather]');
const searchTab = document.querySelector('[data-searchWeather]');
const userContainer = document.querySelector('.weather-container');
const grantAccessContainer = document.querySelector(
  '.grant-location-container'
);
const searchForm = document.querySelector('[data-searchForm]');
const loadingScreen = document.querySelector('.loading-container');
const userInfoContainer = document.querySelector('.user-info-container');

const API_KEY = '';
let oldTab = userTab;
oldTab.classList.add('current-tab');
getFromSessionStorage();

function switchTab(newTab) {
  if (newTab != oldTab) {
    oldTab.classList.remove('current-tab');
    oldTab = newTab;
    oldTab.classList.add('current-tab');

    if (!searchForm.classList.contains('active')) {
      userInfoContainer.classList.remove('active');
      grantAccessContainer.classList.remove('active');
      searchForm.classList.add('active');
    } else {
      searchForm.classList.remove('active');
      userInfoContainer.classList.remove('active');
      getFromSessionStorage();
    }
  }
}

userTab.addEventListener('click', () => {
  switchTab(userTab);
});

searchTab.addEventListener('click', () => {
  switchTab(searchTab);
});

function getFromSessionStorage() {
  const localCoordinates = sessionStorage.getItem('user-coordinates');
  if (!localCoordinates) {
    grantAccessContainer.classList.add('active');
  } else {
    const coordinates = JSON.parse(localCoordinates);
    fetchUserWeatherInfo(coordinates);
  }
}

async function fetchUserWeatherInfo(coordinates) {
  const { lat, lon } = coordinates;
  grantAccessContainer.classList.remove('active');
  loadingScreen.classList.add('active');

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    loadingScreen.classList.remove('active');
    userInfoContainer.classList.add('active');
    renderWeatherInfo(data);
  } catch (error) {
    loadingScreen.classList.remove('active');
  }
}

function renderWeatherInfo(weatherInfo) {
  const cityName = document.body.querySelector('[data-cityName]');
  const countryIcon = document.body.querySelector('[data-countryIcon]');
  const desc = document.body.querySelector('[data-weatherDesc]');
  const weatherIcon = document.body.querySelector('[data-weatherIcon]');
  const temp = document.body.querySelector('[data-temp]');
  const windspeed = document.body.querySelector('[data-windspeed]');
  const humidity = document.body.querySelector('[data-humidity]');
  const cloudiness = document.body.querySelector('[data-cloudiness]');

  cityName.innerText = weatherInfo?.name;
  countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
  desc.innerText = weatherInfo?.weather?.[0].description;
  weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
  temp.innerText = `${weatherInfo?.main?.temp} °C`;
  windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
  humidity.innerText = `${weatherInfo?.main?.humidity} %`;
  cloudiness.innerText = `${weatherInfo?.clouds?.all} %`;
}

function showPosition(position) {
  const userCoordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };

  sessionStorage.setItem('user-coordinates', JSON.stringify(userCoordinates));
  fetchUserWeatherInfo(userCoordinates);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert(
      "Sorry your browser doesn't Support Geo-location. Please Update your Browser or try again with another Browser."
    );
  }
}

const grantAccessButton = document.body.querySelector('[data-grantAccess]');
grantAccessButton.addEventListener('click', getLocation);

let searchInput = document.body.querySelector('[data-searchInput]');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let cityName = searchInput.value;

  if (cityName == '') {
    return;
  } else {
    fetchSearchWeatherInfo(cityName);
  }
});

async function fetchSearchWeatherInfo(city) {
  loadingScreen.classList.add('active');
  userInfoContainer.classList.remove('active');
  grantAccessContainer.classList.remove('active');
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    loadingScreen.classList.remove('active');
    userInfoContainer.classList.add('active');
    renderWeatherInfo(data);
  } catch (error) {}
}
