

function chill() {

    var temp = document.getElementById('temp').textContent;
    var wind = document.getElementById('wind').textContent;

    var windchill;

    windchill = 35.74 + 0.6215*(temp) - 35.75*(Math.pow(wind, 0.16)) + 0.4275*(temp)*(Math.pow(wind, 0.16));

    let n = windchill.toFixed(2);

    document.getElementById('windchill').innerHTML = n; 

}

chill();