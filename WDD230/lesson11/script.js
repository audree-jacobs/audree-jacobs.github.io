/// normal site functions 

function button() {
    document.querySelector('#menu').style.display = "block";
}

function please() {
    document.getElementById("menu").style.display = "none";
}


//funciton to retrieve current year (for the footer)
function currentYear() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById('footerYear').textContent = "| " + today;
}
currentYear();

//function to retrieve the date and time of the last website edit (for the footer)
//function lastUpdated() {
//
//    var x = new Date();
//    var x = x.getDate();
//    document.getElementById("lastM").innerHTML = x; 
//}
//
//lastUpdated();
//
//
//var day = new Date(); 
//var weekDay;
//weekDay = day.getDay();
//
//function pancakes() {
//    if (weekDay == 5) {
//    document.getElementById('pancake').style.display = "block";
//    } 
//}
//
//pancakes();
//
//
//
