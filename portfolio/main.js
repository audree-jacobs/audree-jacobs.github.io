
//Graphic Design Page Modals 
 // Get the modal
 var modal = document.getElementById('myModal');

 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.getElementById('myImg');
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");

 img.onclick = function () {
     modal.style.display = "block";
     modalImg.src = img.src;
     modalImg.alt = img.alt;
     captionText.innerHTML = img.alt;
 }

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
     modal.style.display = "none";
 }







//var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


//<div class="thismess">
//<!-- Slideshow container -->
// {/* <div class="slideshow-container">

//     <!-- Full-width images with number and caption text -->
//     <div class="mySlides fade">
//       <div class="numbertext">1 / 3</div>
//       <img src="/portfolio/slideshow1.jpg" style="width:100%">
//       <div class="text"> Poster for Romeo and Juliet</div>
//     </div>
  
//     <div class="mySlides fade">
//       <div class="numbertext">2 / 3</div>
//       <img src="/portfolio/slideshow1.jpg" style="width:100%">
//       <div class="text">Caption Two</div>
//     </div>
  
//     <div class="mySlides fade">
//       <div class="numbertext">3 / 3</div>
//       <img src="/portfolio/slideshow1.jpg" style="width:100%">
//       <div class="text">Caption Three</div>
//     </div>
  
//     <!-- Next and previous buttons -->
//     <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
//     <a class="next" onclick="plusSlides(1)">&#10095;</a>
//   </div>
//   <br>
  
//   <!-- The dots/circles -->
//   <div style="text-align:center">
//     <span class="dot" onclick="currentSlide(1)"></span>
//     <span class="dot" onclick="currentSlide(2)"></span>
//     <span class="dot" onclick="currentSlide(3)"></span>
//   </div>
//   </div> */}

//

