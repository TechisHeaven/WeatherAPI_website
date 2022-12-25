const submit = document.getElementById("submit");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const temp_name = document.getElementById("temp_name");
const temp_name2 = document.getElementById("temp_name2");
const result = document.getElementById("results");
const loader = document.getElementById("loader");
const country_capital = document.getElementById("country_capital");
const postalcode = document.getElementById("postalcode");
const windspeed = document.getElementById("windspeed");
const con2tempvalue = document.getElementsByClassName("con-2-items-temp");
const mainimg = document.getElementById("mainimg");
const rain = document.getElementById("rain");
const imgweather = document.getElementsByClassName("imgcode");
const dailyforcimg = document.getElementsByClassName("dailyforcimg");
const weathername = document.getElementsByClassName("weathername");

function weathercheck(weathercoderesult) {
  if (weathercoderesult == 0) {
    rain.innerHTML = "Clear ";
    mainimg.src = "images/sun.png";
    dailyforcimg.src = "images/sun.png";
  } else if (weathercoderesult == 1) {
    rain.innerHTML = "Mostly Clear";
    mainimg.src = "images/clear-sky.png";
    dailyforcimg.src = "images/clear-sky.png";
  } else if (
    weathercoderesult == 2 ||
    weathercoderesult == 3 ||
    weathercoderesult == 45 ||
    weathercoderesult == 48
  ) {
    rain.innerHTML = "Partly cloudy";
    mainimg.src = "images/cloud.png";
    dailyforcimg.src = "images/cloud.png";
  } else if (
    weathercoderesult == 61 ||
    weathercoderesult == 62 ||
    weathercoderesult == 63 ||
    weathercoderesult == 65 ||
    weathercoderesult == 66 ||
    weathercoderesult == 67 ||
    weathercoderesult == 80 ||
    weathercoderesult == 81 ||
    weathercoderesult == 82
  ) {
    rain.innerHTML = "Raining";
    mainimg.src = "images/Raining.png";
    dailyforcimg.src = "images/Raining.png";
  } else if (
    weathercoderesult == 51 ||
    weathercoderesult == 53 ||
    weathercoderesult == 55
  ) {
    rain.innerHTML = "Drizzle";
    mainimg.src = "images/cloud-rainny.png";
    dailyforcimg.src = "images/cloud-rainny.png";
  } else if (weathercoderesult == 56 || weathercoderesult == 57) {
    rain.innerHTML = "Freezing Drizzle";
    mainimg.src = "images/drezzeling.png";
    dailyforcimg.src = "images/drezzeling.png";
  } else if (
    weathercoderesult == 71 ||
    weathercoderesult == 73 ||
    weathercoderesult == 75 ||
    weathercoderesult == 77
  ) {
    rain.innerHTML = "Snow fall";
    mainimg.src = "images/drezzeling.png";
    dailyforcimg.src = "images/drezzeling.png";
  } else if (weathercoderesult == 85 || weathercoderesult == 86) {
    rain.innerHTML = "Snow Shower";
    mainimg.src = "images/drezzeling.png";
    dailyforcimg.src = "images/drezzeling.png";
  } else if (
    weathercoderesult == 95 ||
    weathercoderesult == 96 ||
    weathercoderesult == 99
  ) {
    rain.innerHTML = "Thunderstorm";
    mainimg.src = "images/thunder.png";
    dailyforcimg.src = "images/thunder.png";
  }
}

function DailyForcImg(weathercodedaily, dayi) {
  if (weathercodedaily == 0) {
    dailyforcimg[dayi].src = "images/sun.png";
    weathername[dayi].innerHTML = "Sunny";
  } else if (weathercodedaily == 1) {
    dailyforcimg[dayi].src = "images/clear-sky.png";
    weathername[dayi].innerHTML = "Clear Sky";
  } else if (
    weathercodedaily == 2 ||
    weathercodedaily == 3 ||
    weathercodedaily == 45 ||
    weathercodedaily == 48
  ) {
    dailyforcimg[dayi].src = "images/cloud.png";
    weathername[dayi].innerHTML = "Cloud";
  } else if (
    weathercodedaily == 61 ||
    weathercodedaily == 62 ||
    weathercodedaily == 63 ||
    weathercodedaily == 65 ||
    weathercodedaily == 66 ||
    weathercodedaily == 67 ||
    weathercodedaily == 80 ||
    weathercodedaily == 81 ||
    weathercodedaily == 82
  ) {
    dailyforcimg[dayi].src = "images/Raining.png";
    weathername[dayi].innerHTML = "Rainny";
  } else if (
    weathercodedaily == 51 ||
    weathercodedaily == 53 ||
    weathercodedaily == 55
  ) {
    dailyforcimg[dayi].src = "images/cloud-rainny.png";
    weathername[dayi].innerHTML = "Cloud Rainny";
  } else if (weathercodedaily == 56 || weathercodedaily == 57) {
    dailyforcimg[dayi].src = "images/drezzeling.png";
    weathername[dayi].innerHTML = "Drezzeling";
  } else if (
    weathercodedaily == 71 ||
    weathercodedaily == 73 ||
    weathercodedaily == 75 ||
    weathercodedaily == 77
  ) {
    dailyforcimg[dayi].src = "images/drezzeling.png";
    weathername[dayi].innerHTML = "Drezzeling";
  } else if (weathercodedaily == 85 || weathercodedaily == 86) {
    dailyforcimg[dayi].src = "images/drezzeling.png";
    weathername[dayi].innerHTML = "Drezzeling";
  } else if (
    weathercodedaily == 95 ||
    weathercodedaily == 96 ||
    weathercodedaily == 99
  ) {
    dailyforcimg[dayi].src = "images/thunder.png";
    weathername[dayi].innerHTML = "Thunder";
  }
}

function Imglinker(weathercodeWholeday, indexoftemp) {
  if (weathercodeWholeday[indexoftemp] == 0) {
    imagebycode = "images/sun.png";
  } else if (weathercodeWholeday[indexoftemp] == 1) {
    imagebycode = "images/clear-sky.png";
  } else if (
    weathercodeWholeday[indexoftemp] == 2 ||
    weathercodeWholeday[indexoftemp] == 3 ||
    weathercodeWholeday[indexoftemp] == 45 ||
    weathercodeWholeday[indexoftemp] == 48
  ) {
    imagebycode = "images/cloud.png";
  } else if (
    weathercodeWholeday[indexoftemp] == 61 ||
    weathercodeWholeday[indexoftemp] == 62 ||
    weathercodeWholeday[indexoftemp] == 63 ||
    weathercodeWholeday[indexoftemp] == 65 ||
    weathercodeWholeday[indexoftemp] == 66 ||
    weathercodeWholeday[indexoftemp] == 67 ||
    weathercodeWholeday[indexoftemp] == 80 ||
    weathercodeWholeday[indexoftemp] == 81 ||
    weathercodeWholeday[indexoftemp] == 82
  ) {
    imagebycode = "images/Raining.png";
  } else if (
    weathercodeWholeday[indexoftemp] == 51 ||
    weathercodeWholeday[indexoftemp] == 53 ||
    weathercodeWholeday[indexoftemp] == 55
  ) {
    imagebycode = "images/cloud-rainny.png";
  } else if (
    weathercodeWholeday[indexoftemp] == 56 ||
    weathercodeWholeday[indexoftemp] == 57
  ) {
    imagebycode = "images/drezzeling.png";
  } else if (
    weathercodeWholeday[indexoftemp] == 71 ||
    weathercodeWholeday[indexoftemp] == 73 ||
    weathercodeWholeday[indexoftemp] == 75 ||
    weathercodeWholeday[indexoftemp] == 77
  ) {
    imagebycode = "images/drezzeling.png";
  } else if (
    weathercodeWholeday[indexoftemp] == 85 ||
    weathercodeWholeday[indexoftemp] == 86
  ) {
    imagebycode = "images/drezzeling.png";
  } else if (
    weathercodeWholeday[indexoftemp] == 95 ||
    weathercodeWholeday[indexoftemp] == 96 ||
    weathercodeWholeday[i] == 99
  ) {
    imagebycode = "images/thunder.png";
  }
}

function getdayfun(response) {
  daysname = document.getElementsByClassName("daysname");
  mintemp = document.getElementsByClassName("mintemp");
  maxtemp = document.getElementsByClassName("maxtemp");
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let dayi = 0; dayi < 7; dayi++) {
    let dayfetch = new Date(response.daily.time[dayi]);
    let maxfetch = response.daily.temperature_2m_max[dayi];
    let minfetch = response.daily.temperature_2m_min[dayi];
    let weathercodedaily = response.daily.weathercode[dayi];
    let day = weekday[dayfetch.getDay()];
    daysname[dayi].innerHTML = day;
    mintemp[dayi].innerHTML = parseInt(minfetch) + `<span>°</span>`;
    maxtemp[dayi].innerHTML = parseInt(maxfetch) + `<span>°C</span>`;
    DailyForcImg(weathercodedaily, dayi);
  }
}

function fetchWeather(resultLat, resultLong, respo) {
  const options = {
    method: "GET",
  };

  ResultLatitude = resultLat;
  ResultLongitude = resultLong;

  // let urlmain = `https://api.open-meteo.com/v1/forecast?latitude=${ResultLatitude}&longitude=${ResultLongitude}&hourly=temperature_2m,rain&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Asia%2FSingapore`;
  let urlmain = `https://api.open-meteo.com/v1/forecast?latitude=${ResultLatitude}&longitude=${ResultLongitude}&hourly=temperature_2m,visibility,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Asia%2FSingapore`;
  fetch(urlmain, options)
    .then((response) => response.json())
    .then((response) => {
      temperature = response.current_weather;
      feel_Like.innerHTML =
        response.current_weather.temperature + `<span>°C</span>`;
      temp.innerHTML = parseInt(temperature.temperature) + "<span>°C</span>";
      cityvalue = city.value;
      cityvalue2 = city2.value;

      let weathercoderesult = response.current_weather.weathercode;

      weathercheck(weathercoderesult);

      tempWholeday = response.hourly.temperature_2m.slice(0, 25);
      weathercodeWholeday = response.hourly.weathercode.slice(0, 25);
      // tempWholeday.splice(2,2) // inly first value will change not the second for 8 times

      for (let index = 1; index <= 8; index++) {
        tempWholeday.splice(index, 2);
        weathercodeWholeday.splice(index, 2);
      }

      for (
        let indexoftemp = 0;
        indexoftemp < tempWholeday.length;
        indexoftemp++
      ) {
        // const element = con2tempvalue[indexoftemp];
        con2tempvalue[indexoftemp].innerHTML = tempWholeday[indexoftemp] + `°C`;
        const imgcode = document.getElementsByClassName("imgcode");
        Imglinker(weathercodeWholeday, indexoftemp);
        imgcode[indexoftemp].src = imagebycode;
      }

      windspeed.innerHTML = temperature.windspeed + "km/h";
      if (cityvalue.length) {
        temp_name.innerHTML =
          city.value.charAt(0).toUpperCase() + cityvalue.slice(1);
      }
      if (cityvalue2.length) {
        temp_name2.innerHTML =
          city2.value.charAt(0).toUpperCase() + cityvalue2.slice(1);
      }


      let visib = response.hourly.visibility.slice(0,24);
      const gethour = new Date();
      let hour = gethour.getHours();
      vis.innerHTML = parseInt(visib[hour]/1000) + `Km`;


      getdayfun(response);

      city.value = "";
      city2.value = "";
      city.blur();
      city2.blur();
      hideloader();
    })
    .catch((err) => {
      console.error(err);
      hideloader();
    });
}

async function getlocation(city, city2) {
  let locUrl = `https://nominatim.openstreetmap.org/search?format=json&limit=5&country=india&q=${
    city || city2
  }`;

  const locOption = {
    method: "GET",
  };
  showloader();
  await fetch(locUrl, locOption)
    .then((response) => response.json())
    .then((response) => {
      respo = response;
      let resultLat = response[0].lat;
      let resultLong = response[0].lon;
      let display_name = response[0].display_name;
      // if(containsSpecialChars(display_name)){
      //   after_display_cut = display_name.substring(0, display_name.lastIndexOf(','));
      // }
      // else{
      //   after_display_cut = display_name;
      // }

      after_display_cut = display_name;
      country_capital.innerHTML = after_display_cut;

      fetchWeather(resultLat, resultLong, respo);
    })
    .catch(() => {
      alert("Cannot found this address");
      hideloader();
    });
  // .catch(() => alert(`Place not found or check address spelling`));
}

function containsSpecialChars(str) {
  const specialChars = /,/;
  return specialChars.test(str);
}

// start here - on enter search location------------------------------

city.addEventListener("keyup", async (e) => {
  e.preventDefault();
  if (e.keyCode == 13) {
    getlocation(city.value);
  }
});
city2.addEventListener("keyup", async (e) => {
  e.preventDefault();
  if (e.keyCode == 13) {
    getlocation(city2.value);
  }
});

// end here - on enter search location------------------------------

function showloader() {
  loader.classList.add("loader-show");
  loader.classList.remove("hide-show");
}
function hideloader() {
  loader.classList.remove("loader-show");
  loader.classList.add("loader-hide");
}

window.addEventListener("load", () => {
  async function getlocationbyip() {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        country_capital.innerHTML = data.country_name + " " + data.postal;
        temp_name.innerHTML = data.country_capital;
        temp_name2.innerHTML = data.country_capital;
        resultLat = data.latitude;
        resultLong = data.longitude;

        fetchWeather(resultLat, resultLong);
      });
  }
  getlocationbyip();
});

//start here - on page load ------------------------ loader

window.addEventListener("load", () => {
  loader.classList.add("loader-show");
  loader.addEventListener("transitionend", () => {
    // document.body.removeChild(document.body.firstChild);
  });
});

// end here -- on page load loader- -------------------------

const scrollContainer = document.getElementsByClassName("con-2-sub-con-2");

scrollContainer[0].addEventListener(
  "wheel",
  (evt) => {
    scrollContainer[0].scrollLeft += evt.deltaY * 3;
  },
  { passive: true }
);
