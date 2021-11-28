

////// Preston 10 edits 

const requesURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.0369&lon=-111.3963&units=imperial&appid=9ac42a2309a096035cbf30410beb348b';


// current temp 
fetch(requesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const main = jsonObject['main'];
    const please = main.temp;
    document.getElementById("currentTemp").innerHTML = please; 
});


// high temp 

fetch(requesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const main = jsonObject['main'];
    const please = main.temp_max;
    document.getElementById("high").innerHTML = please;
});

fetch(requesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const main = jsonObject['main'];
    const please = main.temp_min;
    document.getElementById("low").innerHTML = please;
});


fetch(requesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const wind = jsonObject['wind'];
    const please = wind.speed;
    document.getElementById("wind").innerHTML = please;
});

fetch(requesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const main = jsonObject['main'];
    const please = main.humidity;
    document.getElementById("humidity").innerHTML = please;
});



/// five day forecast 


const fiveDay = "https://api.openweathermap.org/data/2.5/onecall?lat=42.0369&lon=-111.3963&exclude=minutely,hourly&units=imperial&appid=9ac42a2309a096035cbf30410beb348b";

fetch(fiveDay)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const daily = jsonObject['daily'];
    const please = daily[0].temp.day;
    document.getElementById("temp1").textContent = please + "°F";
});

fetch(fiveDay)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const daily = jsonObject['daily'];
    const please = daily[1].temp.day;
    document.getElementById("temp2").textContent = please + "°F";
});

fetch(fiveDay)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const daily = jsonObject['daily'];
    const please = daily[2].temp.day;
    document.getElementById("temp3").textContent = please + "°F";
});

fetch(fiveDay)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const daily = jsonObject['daily'];
    const please = daily[3].temp.day;
    document.getElementById("temp4").textContent = please + "°F";
});

fetch(fiveDay)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const daily = jsonObject['daily'];
    const please = daily[4].temp.day;
    document.getElementById("temp5").textContent = please + "°F";
});


// icons 

fetch(fiveDay)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const daily = jsonObject['daily'];
    const imagesrc = 'https://openweathermap.org/img/w/' + daily[0].weather[0].icon + '.png';
    document.getElementById('icon1').setAttribute('src', imagesrc);
    const imagesrc2 = 'https://openweathermap.org/img/w/' + daily[1].weather[0].icon + '.png';
    document.getElementById('icon2').setAttribute('src', imagesrc2);
    const imagesrc3 = 'https://openweathermap.org/img/w/' + daily[2].weather[0].icon + '.png';
    document.getElementById('icon3').setAttribute('src', imagesrc3);
    const imagesrc4 = 'https://openweathermap.org/img/w/' + daily[3].weather[0].icon + '.png';
    document.getElementById('icon4').setAttribute('src', imagesrc4);
    const imagesrc5 = 'https://openweathermap.org/img/w/' + daily[4].weather[0].icon + '.png';
    document.getElementById('icon5').setAttribute('src', imagesrc5);

});



/// windchill calculator 
function chill() {

    fetch(requesURL)
        .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const main = jsonObject['main'];
        const tempp = main.temp;
        const wind = jsonObject['wind'];
        const windd = wind.speed;
        let windchill;
        windchill = 35.74 + 0.6215*(tempp) - 35.75*(Math.pow(windd, 0.16)) + 0.4275*(tempp)*(Math.pow(windd, 0.16));
        let n = windchill.toFixed(2);
        document.getElementById('windchill').innerHTML = n; 
         
    });
}

chill();