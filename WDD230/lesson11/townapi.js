

// Town information API
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// HomePage Town Info
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    //preston
    const towns = jsonObject['towns'];
    const year = towns[6].yearFounded;
    const pop = towns[6].currentPopulation;
    const rain = towns[6].averageRainfall;
    document.getElementById('Pyear').innerHTML = "Year Founded: " + year;
    document.getElementById("Ppop").innerHTML = "Current Population: " + pop;
    document.getElementById("Prain").innerHTML = "Annual Rainfall: " + rain; 

    // Fish Haven
    const year2 = towns[2].yearFounded;
    const pop2 = towns[2].currentPopulation;
    const rain2 = towns[2].averageRainfall;
    document.getElementById('Fyear').innerHTML = "Year Founded: " + year2;
    document.getElementById('Fpop').innerHTML = "Current Population: " + pop2;
    document.getElementById('Frain').innerHTML = "Annual Rainfall: " + rain2; 

    //Soda Springs
    const year3 = towns[0].yearFounded;
    const pop3 = towns[0].currentPopulation;
    const rain3 = towns[0].averageRainfall;
    document.getElementById('Syear').innerHTML = "Year Founded: " + year3;
    document.getElementById('Spop').innerHTML = "Current Population: " + pop3;
    document.getElementById('Srain').innerHTML = "Annual Rainfall: " + rain3;


    // mottos 
    const motto1 = towns[0].motto;
    const motto2 = towns[2].motto;
    const motto3 = towns[6].motto;
    document.getElementById('headP').innerHTML = motto3; 
    document.getElementById('headF').innerHTML = motto2;
    document.getElementById('headS').innerHTML = motto1;  

});




//Events Information 

//Preston 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject['towns'];
    const ev1 = towns[6].events[0];
    const ev2 = towns[6].events[1];
    const ev3 = towns[6].events[2];

    document.getElementById("event1P").innerHTML = ev1;
    document.getElementById("event2P").innerHTML = ev2;
    document.getElementById("event3P").innerHTML = ev3;

  });

//Fish Haven 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject['towns'];
    const Fev1 = towns[2].events[0];
    const Fev2 = towns[2].events[1];
    const Fev3 = towns[2].events[2];

    document.getElementById("event1F").innerHTML = Fev1;
    document.getElementById("event2F").innerHTML = Fev2;
    document.getElementById("event3F").innerHTML = Fev3;

  });


//Soda Springs
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject['towns'];
    const Sev1 = towns[0].events[0];
    const Sev2 = towns[0].events[1];
    const Sev3 = towns[0].events[2];

    document.getElementById("event1S").innerHTML = Sev1;
    document.getElementById("event2S").innerHTML = Sev2;
    document.getElementById("event3S").innerHTML = Sev3;

  });
