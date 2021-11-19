

//  API Key: 
//  9ac42a2309a096035cbf30410beb348b

// City ID:
// 5605242

// api.openweathermap.org/data/2.5/weather?id=5605242&appid=9ac42a2309a096035cbf30410beb348b

// farenheight:
// https://api.openweathermap.org/data/2.5/weather?id=5605242&units=imperial&appid=9ac42a2309a096035cbf30410beb348b


// practice 
//const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5605242&units=imperial&appid=9ac42a2309a096035cbf30410beb348b';
//
//fetch(requestURL)
//  .then(function (response) {
//    return response.json();
//  })
//  .then(function (jsonObject) {
//    const weather = jsonObject['main'];
//    const please = weather.temp;
//    document.getElementById("testing").innerHTML = please; 
//
//  });

// ok lets get down to business 

const requesURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.826&lon=-111.7897&exclude=minutely,hourly&units=imperial&appid=9ac42a2309a096035cbf30410beb348b';


// current day 
fetch(requesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const current = jsonObject['current'];
    const please = current.temp;
    document.getElementById("today").innerHTML = please; 
  });

// day 1
fetch(requesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const daily = jsonObject['daily'];
    const please = daily[0].temp.day;
    document.getElementById("Day1").innerHTML = please; 
  });

// day 2
fetch(requesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const daily = jsonObject['daily'];
    const please = daily[1].temp.day;
    document.getElementById("Day2").innerHTML = please; 
  });

// day 3
fetch(requesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const daily = jsonObject['daily'];
    const please = daily[2].temp.day;
    document.getElementById("Day3").innerHTML = please; 
  });

// day 4 
fetch(requesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const daily = jsonObject['daily'];
    const please = daily[3].temp.day;
    document.getElementById("Day4").innerHTML = please; 
  });


