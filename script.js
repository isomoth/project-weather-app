const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?q=Gothenburg,Sweden&units=metric&APPID=affe19113e10ebc0685623d229879d1f";
const API_URL_5DAY =
  "https://api.openweathermap.org/data/2.5/forecast?q=Gothenburg,Sweden&units=metric&APPID=affe19113e10ebc0685623d229879d1f";

const sunsetSunrise = document.getElementById("sunset-sunrise");
const weatherContainer = document.getElementById("weather-container");
const forecastContainer = document.getElementById("forecast-container");

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    // This function adds a zero in case the time units consist of only one digit
    const addZero = (sec) => {
      if (sec < 10) {
        sec = "0" + sec;
      }
      return sec;
    };
    let sunriseTime = new Date(data.sys.sunrise);
    let sunsetTime = new Date(data.sys.sunset);
    let formattedHourSunrise =
      addZero(sunriseTime.getHours()) +
      ":" +
      addZero(sunriseTime.getMinutes()) +
      ":" +
      addZero(sunriseTime.getSeconds());
    let formattedHourSunset =
      addZero(sunsetTime.getHours()) +
      ":" +
      addZero(sunsetTime.getMinutes()) +
      ":" +
      addZero(sunsetTime.getSeconds());
    sunsetSunrise.innerHTML += `
    <h2>Sunrise: ${formattedHourSunrise}</h2>
    <h2>Sunset: ${formattedHourSunset}</h2>
    `;
    //If else statement med de olika ikonerna
    text.innerHTML += `
    <img src="./Designs/Design-2/icons/noun_Cloud_1188486.svg" alt="cloud icon">
    <img src="./Designs/Design-2/icons/noun_Sunglasses_2055147.svg" alt="sunglasses icon">
    <img src="./Designs/Design-2/icons/noun_Umbrella_2030530.svg" alt="umbrella icon">

    <h1>Get your sunnies on, it looks rather warm in Göteborg today</h1>
    <h1>Get your umbrella, it looks rather wet in Göteborg today</h1>
    <h1>It looks rather cloudy in Göteborg today</h1>
    <h2>City: ${data.name}</h2>
    <h2>Temperature: ${data.main.temp.toFixed(1)} C°</h2>
    <h2>Type of weather: ${data.weather[0].description}</h2>
    `;
  })
  .catch((error) => console.error(error));

//Function for turning a date to a string short weekday
const getWeekDay = (data) => {
  const dateDay = new Date(data * 1000); //Timestamp to milliseconds
  return dateDay.toLocaleDateString("en-GB", {
    //Setting how to show day
    weekday: "short",
  });
};

fetch(API_URL_5DAY)
  .then((response) => response.json())
  .then((data) => {
    console.log("DATA!", data);
    const filteredForecast = data.list.filter((item) =>
      item.dt_txt.includes("12:00")
    );
    console.log("FILTEREDFORECAST!", filteredForecast);

    forecastContainer.innerHTML += `
    <table>
    <th>Weekday</th>
    <th>Temperature</th>
    <tr>
     <td>${getWeekDay(filteredForecast[0].dt)}</td>
     <td class="degrees">${filteredForecast[0].main.temp.toFixed(1)} C°</td>
    </tr>
    <tr>
     <td>${getWeekDay(filteredForecast[1].dt)}</td>
     <td class="degrees">${filteredForecast[1].main.temp.toFixed(1)} C°</td> 
    </tr>
    <tr>
     <td>${getWeekDay(filteredForecast[2].dt)}</td>
     <td class="degrees">${filteredForecast[2].main.temp.toFixed(1)} C°</td>
    </tr>
    <tr>
     <td>${getWeekDay(filteredForecast[3].dt)}</td>
     <td class="degrees">${filteredForecast[3].main.temp.toFixed(1)} C°</td>
    </tr>
    <tr>
     <td>${getWeekDay(filteredForecast[4].dt)}</td>
     <td class="degrees">${filteredForecast[4].main.temp.toFixed(1)} C°</td>
    </tr>
      </table>
      `;
  })

  // forecastContainer.innerHTML += `
  //   <table>
  //   <th>Weekday</th>
  //   <th>Temperature</th>
  //   <tr>
  //    <td>${filteredForecast[0].dt}</td>
  //    <td class="degrees">${filteredForecast[0].main.temp.toFixed(1)} C°</td>

  //   </tr>
  //   <tr>
  //    <td>${filteredForecast[1].dt_txt.substring(0, 10)}</td>
  //    <td class="degrees">${filteredForecast[1].main.temp.toFixed(1)} C°</td>
  //   </tr>
  //   <tr>
  //    <td>${filteredForecast[2].dt_txt.substring(0, 10)}</td>
  //    <td class="degrees">${filteredForecast[2].main.temp.toFixed(1)} C°</td>
  //   </tr>
  //   <tr>
  //    <td>${filteredForecast[3].dt_txt.substring(0, 10)}</td>
  //    <td class="degrees">${filteredForecast[3].main.temp.toFixed(1)} C°</td>
  //   </tr>
  //   <tr>
  //    <td>${filteredForecast[4].dt_txt.substring(0, 10)}</td>
  //    <td class="degrees">${filteredForecast[4].main.temp.toFixed(1)} C°</td>
  //   </tr>
  //   </table>
  //  `;
  // })

  .catch((error) => console.error(error));

// fetch(WEATHER_API_URL)
// .then((res) => res.json())
// .then((data) => {
//   console.log("DATA", data);

//   // const sunsetTaipeiDate = new Date(
//   //   (data.sys.sunset + data.timezone + new Date().getTimezoneOffset() * 60) *
//   //     1000
//   const sunriseStockholmDate = new Date(
//     (data.sys.sunrise + data.timezone + new Date().getTimezoneOffset() * 60) *
//       1000
//   );
//   console.log("SUNRISE Stockholm", sunriseStockholmDate);

//   const sunsetStockholmDate = new Date(
//     (data.sys.sunset + data.timezone + new Date().getTimezoneOffset() * 60) *
//       1000
//   );
//   console.log("SUNSET Stockholm", sunsetStockholmDate);
// });

///////// weekdays /////////////////

// const theDate = new Date(filteredForecast[0].dt_txt.substring(0, 10))

// const weekday = new Array(7); //has to be named Array - dont know why
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// const correctDay = weekday[theDate.getDay()];

// console.log("a weekday", correctDay)
