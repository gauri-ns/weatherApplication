document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var city = document.getElementById('city-input').value;
    fetchWeather(city);
  });
  
  function fetchWeather(city) {
    const apiKey = 'd4bee7bcd457244d0769a9f082a38076';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => displayWeather(data))
      .catch(error => console.error('Error:', error));
  }
  
  function displayWeather(weatherData) {
    var weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = '';
  
    if (weatherData.cod === '404') {
      weatherContainer.innerHTML = 'Error: City not found';
    } else {
      var location = weatherData.name + ', ' + weatherData.sys.country;
      var temperature = weatherData.main.temp + '°C';
      var description = weatherData.weather[0].description;
  
      weatherContainer.innerHTML = `
        <p>Location: ${location}</p>
        <p>Temperature: ${temperature}</p>
        <p>Description: ${description}</p>
      `;
    }
  }
  