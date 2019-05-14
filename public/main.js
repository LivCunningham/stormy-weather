// fetch from weather api
const getWeatherApi = () => {
  const getCityName = document.querySelector('.city-info').value
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      getCityName +
      '&appid=1ade1299f122506897748ee69d592b05'
  )
    .then(resp => {
      console.log(getCityName)
      return resp.json()
    })
    .then(forecast => {
      console.log(forecast)
      document.querySelector('.da-weather-1').textContent =
        'Humidity:' + forecast.main.humidity
      document.querySelector('.da-weather-2').textContent =
        'Pressure:' + forecast.main.pressure
      document.querySelector('.da-weather-3').textContent =
        'Pressure:' + forecast.main.temp
    })
}
// output data to text HTML

document.querySelector('.button').addEventListener('click', getWeatherApi)

//register zip-code input to
//promise to return given weather data
//output referenced properties per location
