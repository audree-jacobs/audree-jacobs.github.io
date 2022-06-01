
// task number variable (tracks the overall number of tasks)
let taskNumber = 0; 

// the array for all the tasks
const taskArray = []; 

/// Add a New Task
function addTask() {

    // retrieve user input 
    const input = document.querySelector('.input').value;

    // creating the task in a div including text, checkbox & X with class & IDs 
    // create the task (div)
    const newTask = document.createElement("div");

    // add class to new task
    newTask.classList.add(`allTasks`);

    // add ID to new task
    newTask.setAttribute('id', `task${taskNumber}`);

    // create a checkbox
    const checkbox = document.createElement("div"); 

    // add classname to checkbox
    checkbox.classList.add(`checkbox`);

    // add id to checkbox
    checkbox.setAttribute('id', `${taskNumber}`);

    // create the text of the task
    const taskText = document.createElement("p");

    // add classname to taskText
    taskText.classList.add("inputTask");

    // get the text of the task in a Text Node
    const userInputValue = document.createTextNode(input);

    // create a p tag for the X
    const exitButton = document.createElement("p");

    // create an X in a Text Node
    const Xtext = document.createTextNode("X");

    // add class to X
    exitButton.classList.add("exit");

    // add ID to X
    exitButton.setAttribute('id', `exit${taskNumber}`);

    // insert input to the task p
    taskText.appendChild(userInputValue);

    // insert X into the P
    exitButton.appendChild(Xtext); 

    // adding the text, checkbox and X to the task div in order
    newTask.appendChild(taskText); 
    newTask.appendChild(checkbox);
    newTask.appendChild(exitButton); 

    // add the complete task to the HTML
    document.querySelector(".tasks").appendChild(newTask); 
    
    // set item content in local storage
    localStorage.setItem(`task${taskNumber}`, input);

    // set item name in local storage
    localStorage.setItem(`ID${taskNumber}`, `task${taskNumber}`);

    //set doness in local storage 
    localStorage.setItem(`done${taskNumber}`, "notDone");

    // get the content from local storage
    let content = localStorage.getItem(`task${taskNumber}`);

    // get item name in local storage
    let theName = localStorage.getItem(`ID${taskNumber}`);

    // get the doneness from local storage
    let done = localStorage.getItem(`done${taskNumber}`);

    // push this task's info as an object to the end of the array
    taskArray.push({"content": content, "done": done, "name": theName});

    // add one to the task number
    taskNumber = taskNumber + 1; 

    //add listeners
    addListen(); 
    addXListen();

    // erase input text 
    document.querySelector(".input").value = ""; 
}


/// Write all tasks that are in storage 
function renderStoredTasks() {

    // reset task number to 1
    taskNumber = 1;

    // set variable to loop through tasks
    let task = "task" + taskNumber

    // set variable to test if there are items left
    let itemsThere = localStorage.getItem(task);  
    
    // while item returns an item & not null, add the tasks to the array
    while (itemsThere != null) {

        // get the content from local storage
        let content = localStorage.getItem(`task${taskNumber}`);

        // get the doneness from local storage
        let done = localStorage.getItem(`done${taskNumber}`);

        // get the name from local storage
        // get item name in local storage
        let theName = localStorage.getItem(`ID${taskNumber}`);

        // write these values as an object to the array 
        taskArray.push({"content": content, "done": done, "name": theName});

        // add one to the task number to check the next one 
        taskNumber = taskNumber + 1; 
        task = "task" + taskNumber
        itemsThere = localStorage.getItem(task); 
    } 

    // if there is no next task minus the number it added to the count
    if (itemsThere == null) {
        // return tasknumber to actual number of tasks
        taskNumber = 1; 
    }
 
    // use length of array to run while function
    let length = taskArray.length;
    let x = 1;  
    let arrayNumber = 0; 

    //while there are still items in the array create HTML tasks for them all 
    while (x <= length) {

        // get content for task text
        let text = taskArray[arrayNumber].content; 
        // set counter to one above array number (which starts at 0)
        let counter = arrayNumber + 1; 

        let done = localStorage.getItem(`done${counter}`);

        // creating the task in a div including text, checkbox & X with class & IDs 
        // create the task (div)
        const newTask = document.createElement("div");

        // add class to new task
        newTask.classList.add(`allTasks`);

        // add ID to new task
        newTask.setAttribute('id', `task${counter}`);

        // create a checkbox
        const checkbox = document.createElement("div"); 

        if (done == "done") {
            checkbox.style.backgroundColor = "green"; 
        }

        // add classname to checkbox
        checkbox.classList.add(`checkbox`);

        // add id to checkbox
        checkbox.setAttribute('id', `${counter}`);

        // create the text of the task
        const taskText = document.createElement("p");

        // add classname to taskText
        taskText.classList.add("inputTask");

        // get the text of the task in a Text Node
        const userInputValue = document.createTextNode(text);

        // create a p tag for the X
        const exitButton = document.createElement("p");

        // create an X in a Text Node
        const Xtext = document.createTextNode("X");

        // add class to X
        exitButton.classList.add("exit");

        // add ID to X
        exitButton.setAttribute('id', `exit${counter}`);

        // insert input to the task p
        taskText.appendChild(userInputValue);

        // insert X into the P
        exitButton.appendChild(Xtext); 

        // adding the text, checkbox and X to the task div in order
        newTask.appendChild(taskText); 
        newTask.appendChild(checkbox);
        newTask.appendChild(exitButton); 

        // add the complete task to the HTML
        document.querySelector(".tasks").appendChild(newTask); 


        
        // add one to the array number and the X value
        arrayNumber = arrayNumber + 1; 
        x = x + 1; 
        console.log(taskArray);
    }
 
}

/// call render tasks (always want locally stored tasks to show up)
renderStoredTasks();  


/// Checkbox checked function

function addListen() {
// get list of all checkboxes
var elem = document.getElementsByClassName("checkbox");

// go through list of checkboxes and add event listener that also uses ID value
for (var i = 0; i < elem.length; i += 1) {
    (function () {

        console.log("touched!"); 

        // get the target ID
        var id = elem[i].id;
        console.log("checkbox id" + id);  

        // add the event listener & add id as a parameter in the function
        elem[i].addEventListener("click", function() { done(id); }, false);
    }()); 
}
}; 

addListen(); 

// function called by the checkbox event listener
function done(ID) {

    // use the id to find it in the array 
    let id = parseInt(ID); 
    let arrayPlace = id - 1;  

    // mark array as done instead of notDone
    taskArray[arrayPlace].done = "done"; 
    console.log(taskArray); 

    // make the checkbox green
    document.getElementById(ID).style.backgroundColor = "green"; 

    // use the id to rewrite local storage
    localStorage.setItem(`done${ID}`, "done");
}

/// Filter for complete 
function filterForComplete() {

    // filter list by those marked as "notDone"
    const notDoneList = taskArray.filter(task => task.done === 'notDone');

    for (var i = 0; i < notDoneList.length; i += 1) {
        let theID = notDoneList[i].name;
        console.log(theID); 
        document.getElementById(`${theID}`).style.display = "none"; 
    } 

    // filter list by those marked as "done"
    const DoneList = taskArray.filter(task => task.done === 'done');

    // loop through filtered list and do display those that are done
    for (var i = 0; i < DoneList.length; i += 1) {
        let theID = DoneList[i].name;
        console.log(theID); 
        document.getElementById(`${theID}`).style.display = "flex"; 
    } 
}


/// Filter for Not Complete
function filterForIncomplete() {

    // filter list by those marked as "done"
    const DoneList = taskArray.filter(task => task.done === 'done');

    // loop through filtered list and don't display those that are done
    for (var i = 0; i < DoneList.length; i += 1) {
        let theID = DoneList[i].name;
        console.log(theID); 
        document.getElementById(`${theID}`).style.display = "none"; 
    } 

    // filter list by those marked as "notDone"
    const notDoneList = taskArray.filter(task => task.done === 'notDone');

    //loop through filtered list and DO display those that aren't done
    for (var i = 0; i < notDoneList.length; i += 1) {
        let theID = notDoneList[i].name;
        console.log(theID); 
        document.getElementById(`${theID}`).style.display = "flex"; 
    } 
}

///  Filter All 
function displayAll() {
    for (var i = 0; i < taskArray.length; i += 1) {
        let theID = taskArray[i].name;
        console.log(theID); 
        document.getElementById(`${theID}`).style.display = "flex"; 
    }  
}

/// Delete a single item function 
// add listeners to the X buttons
function addXListen() {

// get list of all X's
var exits = document.getElementsByClassName("exit");

// go through list of checkboxes and add event listener that also uses ID value
for (var i = 0; i < exits.length; i += 1) {
    (function () {

        // get the target ID
        var id = exits[i].parentElement.id;  

        // add the event listener & add id as a parameter in the function
        exits[i].addEventListener("click", function() { erase(id); }, false);
    }()); 
}
}

addXListen(); 


// function to delete the item
function erase(ID) {
    console.log("hi :)"); 

    // delete the HTML element
    document.getElementById(`${ID}`).style.display = "none"; 

    //delete it from local storage 
    // delete the name
    localStorage.removeItem(`${ID}`); 
    let item = localStorage.getItem(`${ID}`);
    console.log(item);
    console.log(localStorage); 

    // delete the done value
    let numbers = ID.slice(-1); 
    let DONE = "done" + numbers; 
    localStorage.removeItem(`${DONE}`); 
    console.log(DONE); 

    // delete the ID
    let Id = "ID" + numbers;
    localStorage.removeItem(`${Id}`); 
    console.log(Id);
    
    // delete it from the array
    //let arraynumber = numbers - 1; 
    //taskArray.splice(arraynumber, 1);  
    //console.log(taskArray); 
}

/// Clear all
function clearAll() {
    localStorage.clear(); 
    location.reload(); 
}


/*Project Steps:

Steps:

1. Function activated when user adds a new task 
     Create all new elements 
     Assign them classes 
     Assign the task a number  
     Create a new object with properties of the input & done/undone 
     Add the object to a local storage array 
     Run add event listener function again? 
     Up the task number

2. Write all local storage items function 
     Create a loop to loop until there are no more items
     Create elements for each task 
     If the element is done make the box green
     Up the task number 

 3.Add event listener 
    Add event listener to all the checkboxes 

 4.Event listener function 
    Retrieve target information 
    Use information to edit the item’s done property in local storage 
    Change box color

 5.Filter Done Function 
    Filter array for done properties 
    If not done set to display none (DO NOT delete)

 6.Filter Not Done Function 
    Filter array for done properties 
    If done set to display none 

 7.Filter All Function 
    Set all items to display block

 8. Delete single item function 
    On event click call this function 
    Get target click’s info 
    Delete that entry from the array */
