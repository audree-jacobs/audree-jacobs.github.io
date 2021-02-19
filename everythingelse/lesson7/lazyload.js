
window.addEventLister('load',(event)=>{
  lazyLoad();
  
});

function lazyLoad(){
  
  const images = document.querySelectorAll("[data]");
  for(const image of images){
    image.src = image.getAttribute("data");
  }
  console.log(images);

}