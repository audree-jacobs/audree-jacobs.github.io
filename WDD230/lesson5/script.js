
function button() {
    document.querySelector('#menu').style.display = "block";
}

function please() {
    document.getElementById("menu").style.display = "none";
}


//funciton to retrieve current year (for the footer)
function currentYear() {

    document.getElementById("currentYear").innerHTML = new Date();
}

currentYear();


//function to retrieve the date and time of the last website edit (for the footer)
function lastUpdated() {

    var x = new Date();
    var x = getDate();
    document.getElementById("lastM").innerHTML = x; 
}

lastUpdated();


var day = new Date(); 
var weekDay;
weekDay = day.getDay();

function pancakes() {
    if (weekDay === 6) {
    document.querySelector('pancake').style.display = "block";
    } 
}

pancakes();


