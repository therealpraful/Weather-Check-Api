// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * Use fetch()
 * URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

/* Using Promises */
// getWeatherData = (city) => {
//   const URL = "https://api.openweathermap.org/data/2.5/weather";
//   //HINT: Use template literals to create a url with input and an API key
//   const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`
//   //CODE GOES HERE
//   const weatherPromise = fetch(FULL_URL);
//   return weatherPromise.then((response) => {
//     return response.json();
//   })
// }

/**
 * Retrieve city input and get the weather data
 * Use the promise returned from getWeatherData()
 */

// searchCity = () => {
//   const city = document.getElementById('city-input').value;
//   // CODE GOES HERE
//   getWeatherData(city)
//   .then((response)=>{
//     console.log(response)
//       showWeatherData(response);
//   }).catch((error) => {
//       console.log(error);
//   })
// }

/**
 * Show the weather data in HTML
 * make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
 if(weatherData.cod === 200){
 document.getElementById("city-name").innerText = weatherData.name
 document.getElementById("weather-type").innerText = weatherData.weather[0].main;
 document.getElementById("temp").innerText = weatherData.main.temp;
 document.getElementById("min-temp").innerText = weatherData.main.temp_min;
 document.getElementById("max-temp").innerText = weatherData.main.temp_max;
 
}
else{
  document.getElementById("city-name").innerText = "City Not Found"
  document.getElementById("weather-type").innerText = "----"
 document.getElementById("temp").innerText = "--"
 document.getElementById("min-temp").innerText = "--"
 document.getElementById("max-temp").innerText = "--"
}
}
/* ------------------------ Using asnyc - await---------------  */


async function getWeatherData(city) {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`
  const weatherPromise =  await fetch(FULL_URL);
  const weatherData = await weatherPromise.json();
  return weatherData

}


searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  let data = getWeatherData(city);
  data.then((response)=>{
      console.log(response)
      showWeatherData(response);
  })
}