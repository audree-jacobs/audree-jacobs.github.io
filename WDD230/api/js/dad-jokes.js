

var input = document.getElementById("dad-joke");

function getJoke() {

    fetch('https://icanhazdadjoke.com/')
        .then(response => response.json())
        .then(data => input.innerHTML = data);

}



