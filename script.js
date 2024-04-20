// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "53923e11cemshf52f2a11bcb340cp19a054jsn7b4d60536157",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then( (response) => {
        // Cloud_pct.InnerHtml = response.cloud_pct;
        // console.log(response)
        temp.innerHTML =response.temp
        temp1.innerHTML =response.temp
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        humidity.innerHTML = response.humidity
        humidity1.innerHTML = response.humidity
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed1.innerHTML = response.wind_speed
        feels_like.innerHTML = response.feels_like
    })
    .catch (err => console.error(err))
};

submit.addEventListener("click", (e) => {
  e.preventdefault;
  getWeather(city.value);
})

getWeather("Delhi")
