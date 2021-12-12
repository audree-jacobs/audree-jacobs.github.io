


document.getElementById("mobile_nav").style.display = "none";


function mobile() {
    var x = document.getElementById("mobile_nav");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function currentYear() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById('footerYear').textContent = "| " + today;
}
currentYear();