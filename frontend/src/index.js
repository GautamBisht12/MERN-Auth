

const weatherapi = () => {

  
  const apikey = "d69c545bf2748eb5f457292f619fe586";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
  const searchBox = document.querySelector(".search-weather input");
  const searchBtn = document.querySelector(".search-weather button");
  const weatherIcon = document.querySelector(".weather-icon");
  
  const checkWeather = async (city) => {
    const res = await fetch(apiUrl + city + `&appid=${apikey}`);
  
    if (res.status === 404) {
      document.querySelector(".error-weather").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      const data = await res.json();
  
      console.log(data);
  
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + " °C";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "clouds";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "clear";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "drizzle";
      } else if (data.weather[0].main === "Humidity") {
        weatherIcon.src = "humidity";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "mist";
      } else if (data.weather[0].main === "rain") {
        weatherIcon.src = "rain";
      } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "snow";
      } else if (data.weather[0].main === "Wind") {
        weatherIcon.src = "wind";
      }
  
      document.querySelector(".weather").style.display = "block";
    }
  };
  
  // searchBtn.addEventListener("click", () => {
  //   checkWeather(searchBox.value);
  //   });
  
  const setupEventListeners = () => {
    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
    });
  };

  // Wait for the DOM to be fully loaded before setting up the event listeners
  document.addEventListener("DOMContentLoaded", setupEventListeners);
      


}

export default weatherapi






