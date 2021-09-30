

document.getElementById("one").style.display = "none";
document.getElementById("two").style.display = "none";
document.getElementById("three").style.display = "none";

window.setTimeout(cardOne, 1000);
window.setTimeout(cardTwo, 2000);
window.setTimeout(cardThree, 3000);

function cardOne() {

    document.getElementById("one").style.display = "initial";

}

function cardTwo() {

    document.getElementById("two").style.display = "initial";

}

function cardThree() {

    document.getElementById("three").style.display = "initial";

}





// call JS function to display a popup

