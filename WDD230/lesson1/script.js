
//  index.html javascript


//funciton to retrieve current year (for the footer)
function currentYear() {

    document.getElementById("currentYear").innerHTML = new Date().getFullYear();
}

currentYear();


//function to retrieve the date and time of the last website edit (for the footer)
function lastUpdated() {

    var x = new Date();
    var x = document.lastModified;
    document.getElementById("lastM").innerHTML = x; 
}

lastUpdated();







// ignore this 

//window.onload = (event) => {
//  console.log('page is fully loaded');
//};

/*function addItem() {

    var list = document.getElementById('list');
    var content = document.getElementById('input').value;
    var entry = document.createElement('li'); // important
    entry.appendChild(document.createTextNode(content));
    list.appendChild(entry);

} */


