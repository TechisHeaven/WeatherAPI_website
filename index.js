const submit = document.getElementById('submit');
const temp = document.getElementById('temp');
const city = document.getElementById('city');
const temp_name = document.getElementById('temp_name');
const temp_name2 = document.getElementById('temp_name2');
const result = document.getElementById("results");
const loader = document.getElementById('loader');
const country_capital = document.getElementById("country_capital");
const postalcode = document.getElementById("postalcode");
const windspeed = document.getElementById("windspeed");
const con2tempvalue = document.getElementsByClassName("con-2-items-temp");


function fetchWeather(resultLat, resultLong,respo){
    const options = {
      method: "GET",
    };
  
    ResultLatitude = resultLat;
    ResultLongitude = resultLong;

    let urlmain = `https://api.open-meteo.com/v1/forecast?latitude=${ResultLatitude}&longitude=${ResultLongitude}&hourly=temperature_2m,rain&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Asia%2FSingapore`;
  
    fetch(
      urlmain,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        temperature  = response.current_weather;
        feel_Like.innerHTML  = response.current_weather.temperature + `<span>°C</span>`;
        temp.innerHTML = parseInt( temperature.temperature)+ "<span>°C</span>";
        cityvalue = city.value;
        cityvalue2 = city2.value;
        console.log(response.current_weather.weathercode)
        if (response.current_weather.weathercode == 0){
          rain.innerHTML  = "Clear ";
          mainimg.src = "images/sun.png";
        }
        else if (response.current_weather.weathercode == 1){
          rain.innerHTML  = "Mostly Clear";
          mainimg.src = "images/clear-sky.png" ;
        }
        else if (response.current_weather.weathercode == 2 || 3 || 45 || 48){
          rain.innerHTML  = "Partly cloudy";
          mainimg.src = "images/cloud.png"
        }
        else if (response.current_weather.weathercode == 51 || 53 || 55){
          rain.innerHTML  = "Drizzle";
          mainimg.src = "images/cloud-rainny.png";
        }
        else if (response.current_weather.weathercode == 56 || 57){
          rain.innerHTML  = "Freezing Drizzle";
          mainimg.src = "images/drezzeling.png";
        }
        else if (response.current_weather.weathercode == 61 || 63 || 65 || 66 || 67|| 80|| 81|| 82){
          rain.innerHTML  = "Raining";
          mainimg.src = "images/Rainning.png";
        }
        
        else if (response.current_weather.weathercode == 71||  73||75|| 77 ){
          rain.innerHTML  = "Snow fall";
          mainimg.src = "images/drezzeling.png";
        }
        else if (response.current_weather.weathercode == 85|| 86){
          rain.innerHTML  = "Snow Shower";
          mainimg.src = "images/drezzeling.png";
        }
        else if (response.current_weather.weathercode == 95 || 96 || 99){
          rain.innerHTML  = "Thunderstorm";
          mainimg.src = "images/thunder.png";
        }

        tempWholeday = response.hourly.temperature_2m.slice(0,25);
        // tempWholeday.splice(2,2) // inly first value will change not the second for 8 times
        
        for (let index = 1; index <= 8; index++) {
          tempWholeday.splice(index,2)
        }


        for (let indexoftemp = 0; indexoftemp < tempWholeday.length; indexoftemp++) {
          // const element = con2tempvalue[indexoftemp];
          con2tempvalue[indexoftemp].innerHTML = tempWholeday[indexoftemp] + `°C`;
        }


        windspeed.innerHTML = temperature.windspeed + 'km/h';
        if(cityvalue.length){
          temp_name.innerHTML = city.value.charAt(0).toUpperCase() + cityvalue.slice(1);
        }
        if(cityvalue2.length){
          temp_name2.innerHTML = city2.value.charAt(0).toUpperCase() + cityvalue2.slice(1);
        }
        // console.log(respo[0].display_name);
        city.value = '';
        city2.value = '';
        city.blur();
        city2.blur();
        hideloader();
      })
      .catch((err) => console.error(err));
  }
  
  async function getlocation(city,city2) {
    
    let locUrl = `https://nominatim.openstreetmap.org/search?format=json&limit=5&country=india&q=${city || city2}`;
  
    const locOption = {
      method: "GET",
    };
    showloader();
    await fetch(locUrl, locOption)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
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

        console.log(display_name)
        console.log(resultLat);
        console.log(resultLong);
  
        fetchWeather(resultLat, resultLong,respo);
      })
      .catch(() => {
        alert("Cannot found this address")
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
    // console.log("clicked")
    e.preventDefault();
    // console.log(city)
    if(e.keyCode == 13){
    getlocation(city.value);
    }
   
  });
  city2.addEventListener("keyup", async (e) => {
    // console.log("clicked")
    e.preventDefault();
    // console.log(city)
    if(e.keyCode == 13){
    getlocation(city2.value);
    }
   
  });
  

  
  // end here - on enter search location------------------------------


  
  
function showloader(){
  loader.classList.add("loader-show");
  loader.classList.remove("hide-show");
}
function hideloader(){
  loader.classList.remove("loader-show");
  loader.classList.add('loader-hide');
}


window.addEventListener('load',()=>{
  async function getlocationbyip (){
    fetch("https://ipapi.co/json/")
    .then((response)=> response.json())
    .then((data)=> {
      country_capital.innerHTML = data.country_name +" " + data.postal;
      temp_name.innerHTML = data.country_capital;
      temp_name2.innerHTML = data.country_capital;
      console.log(data.postal)
      console.log(data.latitude);
      console.log(data.longitude);
      resultLat = data.latitude;
      resultLong = data.longitude;
      
      fetchWeather(resultLat,resultLong);
    })
  }
  getlocationbyip();
})



//start here - on page load ------------------------ loader


  window.addEventListener('load',()=>{
    
    loader.classList.add('loader-show');

    loader.addEventListener("transitionend",()=>{
      // document.body.removeChild(document.body.firstChild);
    })
  })


  // end here -- on page load loader- -------------------------






const scrollContainer = document.getElementsByClassName('con-2-sub-con-2');

scrollContainer[0].addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer[0].scrollLeft += evt.deltaY;
});
