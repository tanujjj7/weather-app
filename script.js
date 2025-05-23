const apiKey = "dfa2db4a26fd81e081efc296958e4c5d"; 

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();

  document.getElementById("weatherResult").innerHTML = `
    <h2>Weather in ${data.name}</h2>
    <p>${data.weather[0].main} - ${data.weather[0].description}</p>
    <p>🌡️ Temp: ${data.main.temp}°C</p>
    <p>💨 Wind: ${data.wind.speed} m/s</p>
  `;
}

