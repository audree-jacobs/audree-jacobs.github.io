

// create array
let eventsArray = [];   
var event_Number = 1;

// get info from local storage
var storedEvents = localStorage.getItem('eventsArray'); 
console.log("Stored Events", JSON.parse(storedEvents));

if (JSON.parse(storedEvents) == null) {
eventsArray = [];
console.log("no stored events"); 
} else {
    eventsArray = (JSON.parse(storedEvents)); 
    console.log(eventsArray); 
}

var lengthofArray = eventsArray.length; 
console.log("length of array", lengthofArray); 
console.log("the events array", eventsArray); 

if (lengthofArray == 0) {
    lengthofArray = 1;
    event_Number = 1;
    console.log("length of array", lengthofArray);  
} else {
    event_Number = lengthofArray + 1; 
}

console.log("adjusted event number", event_Number); 

localStorage.clear(); 


// function to get the day of the week 

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const date = new Date();
let day = weekday[date.getDay()];
document.querySelector(".date").innerHTML = day; 


// function to get the current time 

let timE = new Date(); 
let hor =  timE.getHours(); 
let minn =  timE.getMinutes();

// format time correctly 
if (hor > 12) {
    hor = hor - 12; 
}
if (minn < 10) {
    minn = "0" + minn;  
}
let fullTime = hor + ":" + minn; 
document.querySelector(".time").innerHTML = fullTime; 


// submit function 
function submit() {

    clearEvents()
    createEvents()

    document.querySelector(".opening_screen").style.display = "none"; 
    document.querySelector(".alert").style.display = "none"; 
    document.querySelector(".home_screen").style.display = "block";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".edit_screen").style.display = "none";
    document.querySelector(".add_screen").style.display = "none";
}

//clear events in order to replace them 

function clearEvents() {

    const Edivs = document.querySelectorAll('.event');
    Edivs.forEach(event => {
    event.remove();
    });

}


// function to go to the home screen 
function goHome() {{
    document.querySelector(".opening_screen").style.display = "none"; 
    document.querySelector(".alert").style.display = "none"; 
    document.querySelector(".home_screen").style.display = "block";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".edit_screen").style.display = "none";
    document.querySelector(".add_screen").style.display = "none";
}}; 

// function to go to the editing screen 
function goEdit() { 
    document.querySelector(".opening_screen").style.display = "none"; 
    document.querySelector(".alert").style.display = "none"; 
    document.querySelector(".home_screen").style.display = "none";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".edit_screen").style.display = "block";
    document.querySelector(".add_screen").style.display = "none";
};

// function to go to the adding screen 
function goAdd() { 
    document.querySelector(".opening_screen").style.display = "none"; 
    document.querySelector(".alert").style.display = "none"; 
    document.querySelector(".home_screen").style.display = "none";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".edit_screen").style.display = "none";
    document.querySelector(".add_screen").style.display = "block";
};

//function to collect an event from the add event form 

function collectEvent() {

    // get Event Title 
    const input_Title = document.querySelector('.title_input').value;

    //get Event Time 
    const input_Time = document.querySelector('.time_input').value;

    //get Event Length 
    const input_Length = document.querySelector('.length_input').value;
    let true_length = Math.round(input_Length / 10); 

    // check 
    console.log(true_length, input_Time, input_Title); 

    // clear inputs
    document.querySelector('.title_input').value = "";
    document.querySelector('.time_input').value = ""; 
    document.querySelector('.length_input').value = "";

    let num = `event${event_Number}`;
    console.log(num);  

    // save event to the array 
    eventsArray.push({ [num] : [true_length, input_Time, input_Title]});
    console.log(eventsArray); 

    // add one to event number 
    event_Number = event_Number + 1; 

    updateStorage();

    //return user to edit screen 
    submit(); 
}


// Add the events array to local storage 
function updateStorage() {

    localStorage.setItem('eventsArray', JSON.stringify(eventsArray));

    var storedEvents = localStorage.getItem('eventsArray'); 
    console.log("Stored Events", JSON.parse(storedEvents));

}

var arrayNumber = 0; 
var eventsThere = 1; 
var totalEvent = "event" + eventsThere;

// function to create dom elements for the stored events 
function createEvents() {

    var arrayNumber = 0; 
    var eventsThere = 1; 
    var totalEvent = "event" + eventsThere;

    console.log("array length", eventsArray.length); 
    console.log("events there", eventsThere); 

    //loop through array to create div for each event in the array
    while (eventsThere <= eventsArray.length) {
    let totalEvent = "event" + eventsThere;

    console.log("Inside While", eventsArray[arrayNumber][`${totalEvent}`][2]);
   
    const eventColumns = document.querySelector('.event_columns');
    const editColumns = document.querySelector('#edit_events');

    // create the event div
    const eventDiv = document.createElement("div"); 

    //create event title 
    const eventTi = document.createElement("h3");

    // access event title from local storage
    var text = eventsArray[arrayNumber][`${totalEvent}`][2]; 
    //add title as a text content
    const eventContent = document.createTextNode(text);

    //append text content to the h3 
    eventTi.appendChild(eventContent); 

    //append h3 to the div
    eventDiv.appendChild(eventTi);

    //add a class to the event div
    eventDiv.classList.add("event");  
    let eventDiv2 = eventDiv.cloneNode(true); 

    // add ID's
    eventDiv.setAttribute('id', `e${totalEvent}`);
    eventDiv2.setAttribute('id', `e2${totalEvent}`);

    //append the div to the schedule pages 
    eventColumns.appendChild(eventDiv); 
    editColumns.appendChild(eventDiv2); 

    //add margin to the event (using an ID)
    var startTime = eventsArray[arrayNumber][`${totalEvent}`][1];

    //convert time to a number 
    const num = startTime;
    const first2Str = String(num).slice(0, 2); 
    const first2Num = Number(first2Str);

    var margin = (first2Num - 5) * 55; 
    if (margin < 0) {
        margin = margin * -1; 
    }

    console.log("time converting", margin)
    var margin2 = margin + 55; 


    // add to the variables
    eventsThere = eventsThere + 1; 
    totalEvents = "event" + eventsThere; 
    arrayNumber = arrayNumber + 1; 
    
    document.getElementById(`e${totalEvent}`).style.marginTop = `${margin}px`;
    document.getElementById(`e2${totalEvent}`).style.marginTop = `${margin}px`;

    margin = margin + 55; 
    }
}

createEvents(); 

