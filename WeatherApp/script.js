const apiKey = "2774e8ec35bd0035e94eed2a8c8f19aa";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return;

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
      const badIcons = ["01n", "50d", "50n"];
      const icon = data.weather?.[0]?.icon;
      const useIcon = (icon && !badIcons.includes(icon)) ? icon : "03d";
      const iconUrl = `https://openweathermap.org/img/wn/${useIcon}@2x.png`;
      
      document.getElementById("weatherInfo").innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="${iconUrl}" alt="Weather Icon" />
        <p><strong>${data.weather[0].description}</strong></p>
        <p>🌡️ ${data.main.temp}°C (Feels like ${data.main.feels_like}°C)</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      `;
      
      const condition = data.weather[0].main.toLowerCase();

      const videos = {
        clear: document.getElementById("clearVideo"),
        rain: document.getElementById("rainVideo"),
        snow: document.getElementById("snowVideo"),
        clouds: document.getElementById("cloudVideo")
      };

      Object.values(videos).forEach(video => video.style.display = "none");

      if (condition.includes("rain")) {
        videos.rain.style.display = "block";
      } else if (condition.includes("snow")) {
        videos.snow.style.display = "block";
      } else if (condition.includes("cloud")) {
        videos.clouds.style.display = "block";
      } else {
        videos.clear.style.display = "block";
      }
    });

  fetch(forecastUrl)
    .then(res => res.json())
    .then(data => {
      const daily = {};
      data.list.forEach(item => {
        const day = new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: 'short' });
        if (!daily[day]) {
          daily[day] = item;
        }
      });

      document.getElementById("forecast").innerHTML = Object.entries(daily).map(([day, info]) => {
        const icon = info.weather?.[0]?.icon;
        const badIcons = ["01n", "50d", "50n"];
        const useIcon = (icon && !badIcons.includes(icon)) ? icon : "03d";
        const iconUrl = `https://openweathermap.org/img/wn/${useIcon}@2x.png`;
      
        return `
          <div class="forecast-day">
            <p>${day}</p>
            <img src="${iconUrl}" alt="${info.weather[0].description}" />
            <p>${Math.round(info.main.temp)}°C</p>
          </div>
        `;
      }).join('');
      
    });
}
