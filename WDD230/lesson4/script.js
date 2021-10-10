
//funciton to retrieve current year (for the footer)
function currentYear() {

    document.getElementById("currentYear").innerHTML = new Date();
}

currentYear();


//function to retrieve the date and time of the last website edit (for the footer)
function lastUpdated() {

    var x = new Date();
    var x = document.lastModified;
    document.getElementById("lastM").innerHTML = x; 
}

lastUpdated();


