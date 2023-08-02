function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "BURAYA_API_ANAHTARINIZI_YAZIN";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            if (data.cod === "404") {
                weatherInfo.innerHTML = `<p>Şehir bulunamadı. Lütfen geçerli bir şehir adı girin.</p>`;
            } else {
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;
                weatherInfo.innerHTML = `
                    <p><strong>Hava Durumu:</strong> ${weatherDescription}</p>
                    <p><strong>Sıcaklık:</strong> ${temperature}°C</p>
                    <p><strong>Nem Oranı:</strong> ${humidity}%</p>
                    <p><strong>Rüzgar Hızı:</strong> ${windSpeed} m/s</p>
                `;
            }
        })
        .catch(error => console.log("Hata:", error));
}
