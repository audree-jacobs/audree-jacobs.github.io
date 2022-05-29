
// render all items in local storage 

let tasksDone = 0;
let numb = 1;

function renderList() {
 
    let item = "item" + numb; 
    let valid = localStorage.getItem(item); 
    console.log(valid);
    
    while (valid !== null) {

        //retrieve item from local storage 
        localStorage.getItem(item); 

        // add list item
        const listItem = document.createElement("div");
        const checkbox = document.createElement("div"); 
        const inputs = document.createElement("p");
        const inputTask = document.createTextNode(valid);
        const deleTe = document.createTextNode("X");
        const P = document.createElement("p");
        inputs.classList.add("inputTask");
        inputs.appendChild(inputTask); 
        P.appendChild(deleTe); 
        checkbox.classList.add("checkbox");
        checkbox.setAttribute('id', `checkbox${numb}`);
        P.setAttribute('id', `exit${numb}`);
        listItem.appendChild(inputs);
        listItem.appendChild(checkbox); 
        listItem.appendChild(P); 
        document.querySelector(".tasks").appendChild(listItem);

        // add number to check for next task
        numb = numb + 1; 
        item = "item" + numb; 
        valid = localStorage.getItem(item); 

        console.log(numb);
        console.log(valid); 
    }

    let itemOne = localStorage.getItem("item1");

    if (valid == null) {
        numb = numb -1; 
    }

    let numberP = document.querySelector(".number");
    numberP.innerHTML = ""; 
    let input3 = document.createTextNode(numb);
    numberP.appendChild(input3); 

}

renderList(); 



/// Add new Item to List  
function addNewItem() { 

    const input = document.querySelector('.input').value;
    const listItem = document.createElement("div");
    const checkbox = document.createElement("div"); 
    const inputs = document.createElement("p");
    const inputTask = document.createTextNode(input);
    const deleTe = document.createTextNode("X");
    const P = document.createElement("p");
    inputs.classList.add("inputTask");
    inputs.appendChild(inputTask); 
    checkbox.classList.add(`checkbox`);
    P.appendChild(deleTe); 
    checkbox.setAttribute('id', `checkbox${numb}`);
    P.setAttribute('id', `exit${numb}`);
    checkbox.setAttribute("onclick", numb);
    listItem.appendChild(inputs);
    listItem.appendChild(checkbox); 
    listItem.appendChild(P); 
    document.querySelector(".tasks").appendChild(listItem);

    numb = numb + 1; 

    let numberP = document.querySelector(".number");
    numberP.innerHTML = "";
    let input3 = document.createTextNode(numb);
    numberP.appendChild(input3);

    //event listener 
    checkbox.addEventListener('onclick', doSomething); 

    // Add the item to local storage
    localStorage.setItem(`item${numb}`, input);
    console.log(numb);
    const data = localStorage.getItem(`item${numb}`);
    console.log(data); 
}

/// Clear all items from local storage 
function clearAll() {
    localStorage.clear();
    location.reload();
}


/// Delete from local storage 
function deleTe(ITEM) {
    localStorage.removeItem(ITEM);
}



// checked tasks 
function checked(numbers){

    let theBox = document.querySelector(`checkbox${numbers}`);
    console.log(theBox);
    let x = document.createTextNode("X");
    //theBox.appendChild(x);
};


//event listers 
const checkbox = document.querySelector("#checkbox1"); 
checkbox.addEventListener('click', doSomething)

const checkbox2 = document.querySelector("#checkbox2"); 
checkbox2.addEventListener('click', doSomething)

const checkbox3 = document.querySelector("#checkbox3"); 
checkbox3.addEventListener('click', doSomething)

const checkbox4 = document.querySelector("#checkbox4"); 
checkbox4.addEventListener('click', doSomething)

const checkbox5 = document.querySelector("#checkbox5"); 
checkbox5.addEventListener('click', doSomething) 

const checkbox6 = document.querySelector("#checkbox5"); 
checkbox6.addEventListener('click', doSomething) 
const checkbox7 = document.querySelector("#checkbox5"); 
checkbox7.addEventListener('click', doSomething) 
const checkbox8 = document.querySelector("#checkbox5"); 
checkbox8.addEventListener('click', doSomething) 
const checkbox9 = document.querySelector("#checkbox5"); 
checkbox9.addEventListener('click', doSomething) 
const checkbox10 = document.querySelector("#checkbox5"); 
checkbox10.addEventListener('click', doSomething) 
const checkbox11 = document.querySelector("#checkbox5"); 
checkbox11.addEventListener('click', doSomething) 


// event listeners for X
const exit1 = document.querySelector("#exit1"); 
exit1.addEventListener('click', deleTe(item1)); 


function doSomething(event){
    console.log(event);
    let id = event.target.getAttribute('id');  
    let theBox = document.querySelector("#"+id); 
    theBox.style.backgroundColor = "green"; 

    tasksDone = tasksDone - 1; 

    let taskCount = numb + tasksDone; 

    let numberP = document.querySelector(".number");
    numberP.innerHTML = "";
    let input3 = document.createTextNode(taskCount);
    numberP.appendChild(input3);
}


// filter for Completed Tasks 
function  done() {

    // var boxes = document.getElementsByClassName(".checkbox");
    // var green = boxes.style.backgroundColor; 

    // if (green == "green") {
    //     boxes.style.display =  "block"; 

    // }   else {
    //     boxes.style.display =  "none";
    // }
}


function Active1() {

    //borders
    document.querySelector(".All").style.border = "1px solid black"; 
    document.querySelector(".complete").style.border = "none";
    document.querySelector(".incomplete").style.border = "none";


}

function Active2() {

    //borders
    document.querySelector(".All").style.border = "none";
    document.querySelector(".complete").style.border = "1px solid black";
    document.querySelector(".incomplete").style.border = "none";


}

function Active3() {

    //borders
    document.querySelector(".All").style.border = "none";
    document.querySelector(".incomplete").style.border = "1px solid black";
    document.querySelector(".complete").style.border = "none";


}