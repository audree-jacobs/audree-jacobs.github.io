


document.getElementById("mobile_nav").style.display = "none";


function mobile() {
    var x = document.getElementById("mobile_nav");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
