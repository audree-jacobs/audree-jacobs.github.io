
//Graphic Design Page Modals 
 // Get the modal
 var modal = document.getElementById('myModal');

 // the function that displays the modal 
 //function displayModal() {
 //   modal.style.display = "block";
 //   modalImg.src = img.src;
 //   modalImg.alt = img.alt;
 //   captionText.innerHTML = img.alt;
//}

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
     modal.style.display = "none";
 }


 // Get the image and insert it inside the modal - use its "alt" text as a caption
 

 //modal 1
 //function modal1() {
//
 //var img = document.getElementById('myImg');
 //var modalImg = document.getElementById("modal-content");
 //var captionText = document.getElementById("caption");
 ////displayModal();
//
 //modal.style.display = "block";
 //   modalImg.src = img.src;
 //   modalImg.alt = img.alt;
 //   captionText.innerHTML = img.alt;
//
 //} 

function  showModal(source) {

    var img = document.getElementById(source);
    var modalImg = document.getElementById("modal-content");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    captionText.innerHTML = img.alt;

}

//showModal("myImg");


 // modal 2

// function modal2() {
//
//    var img = document.getElementById('image1');
//    var modalImg = document.getElementById("img01");
//    var captionText = document.getElementById("caption");
//    displayModal();
//   
//    } 

 // modal 3

 // modal 4

 // modal 5

 // modal 6

 // modal 7

 // modal 8

 // modal 9 


