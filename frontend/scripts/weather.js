const WEATHER_API = "http://localhost:5000/api/weather";

async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) return alert("Please enter a city");

  try {
    const res = await fetch(`${WEATHER_API}?city=${city}`);
    const data = await res.json();

    if (data.error) {
      document.getElementById("weatherResult").innerHTML = `
        <div class="card"><p>❌ ${data.error}</p></div>
      `;
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
      <div class="card">
        <h3>📍 ${data.city}</h3>
        <p>🌡 Temperature: ${data.temperature} °C</p>
        <p>💧 Humidity: ${data.humidity}%</p>
        <p>🌬 Wind Speed: ${data.wind} km/h</p>
        <p>☁ Condition: ${data.condition}</p>
      </div>
    `;
  } catch (err) {
    console.error(err);
    document.getElementById("weatherResult").innerHTML = `
      <div class="card"><p>⚠ Unable to fetch weather data. Try again later.</p></div>
    `;
  }
}
