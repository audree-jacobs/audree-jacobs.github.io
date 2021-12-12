

const requestURL = "https://taylorswiftapi.herokuapp.com/get";

function getMoods(){

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    let quote = jsonObject['quote'];
    let song = jsonObject['song'];
    let album = jsonObject['album'];

    let lyric = quote;
    let TSsong = song;
    let albums = album;
   
    document.getElementById('lyric').innerHTML =  lyric;
    document.getElementById('song').innerHTML = '"' + TSsong + '"' + " /";
    document.getElementById('album').innerHTML =  albums; 

    let purple = "images/purple ring.png";
    let blue = "images/dark blue ring.png";
    let lightBlue = "images/light blue ring.png";
    let green = "images/green ring.png";
    let emerald = "images/emerald ring.png";
    let gold = "images/golden ring.png";
    let brown = "images/brown ring.png";
    let red = "images/red ring regular.png";
    let pink = "images/hot pink ring.png";

    if (albums == "Taylor Swift") {
        document.getElementById('mood').innerHTML =  "Nostalgic";
        document.getElementById('moodRing').setAttribute('src', purple);
        document.getElementById("mood").style.color = "purple";
    } else if (albums == "Fearless") {
        document.getElementById('mood').innerHTML =  "Betrayed";
        document.getElementById('moodRing').setAttribute('src', brown);
        document.getElementById("mood").style.color = "brown";
    } else if (albums == "Speak Now") {
        document.getElementById('mood').innerHTML =  "Longing";
        document.getElementById('moodRing').setAttribute('src', lightBlue);
        document.getElementById("mood").style.color = "#01879B";
    } else if (albums == "Red") {
        document.getElementById('mood').innerHTML =  "Devestated";
        document.getElementById('moodRing').setAttribute('src', red);
        document.getElementById("mood").style.color = "#570c0c";
    } else if (albums == "1989") {
        document.getElementById('mood').innerHTML =  "Powerful";
        document.getElementById('moodRing').setAttribute('src', emerald);
        document.getElementById("mood").style.color = "green";
    } else if (albums == "Reputation") {
        document.getElementById('mood').innerHTML =  "Dangerous";
        document.getElementById('moodRing').setAttribute('src', green);
        document.getElementById("mood").style.color = "green";
    } else if (albums == "Lover") {
        document.getElementById('mood').innerHTML =  "Vunerable";
        document.getElementById('moodRing').setAttribute('src', pink);
        document.getElementById("mood").style.color = "#852473";
    } else if (albums == "Folklore") {
        document.getElementById('mood').innerHTML =  "Lost";
        document.getElementById('moodRing').setAttribute('src', blue);
        document.getElementById("mood").style.color = "#162c66";
    } else if (albums == "Evermore") {
        document.getElementById('mood').innerHTML =  "Regretful";
        document.getElementById('moodRing').setAttribute('src', gold);
        document.getElementById("mood").style.color = "#73480d";
    }

  });

};

getMoods();