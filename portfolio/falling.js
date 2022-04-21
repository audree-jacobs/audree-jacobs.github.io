

// register scroll trigger
gsap.registerPlugin(ScrollTrigger); 


// menu animated open function 
function menuOpen() {
    gsap.to(".menu", {duration: 0.5, ease: 'back', x: -200, y: -200});
    gsap.to(".menuIcon", {duration: 0.5, ease: 'power 1', opacity: 0});
}

// menu animated close function
function menuClose() {
    gsap.to(".menu", {duration: 3, ease: 'back', x: 200, y: 200});
    gsap.to(".menuIcon", {duration: 2, ease: 'power 1', opacity: 1});
}

// function to spin the planets 
function spinPlanet(){

        gsap.to(".planet", {duration: 10, ease: "linear", rotation:"360", repeat:-1}); 
        var tl = new TimelineMax({
            yoyo: true,
            repeat: -1,
          });
        tl.from(".saturn", {duration: 1, ease:"linear", rotation: "-10"});  
        tl.to(".saturn", {duration: 1, ease:"linear", rotation: "10"});

};

// call spin planet 
spinPlanet();

// screen height variable for fall calculation
var height = window.innerHeight; 
document.body.style.overflow = 'hidden';

/// platform falling animation
function startFall() {
    gsap.to(".platform", {duration: 0.5, ease: "power 1", rotation:"90", transformOrigin:"left top"});
    gsap.to(".push", {duration: 0.2, ease: "linear", opacity: 0});
    document.querySelector('.avatar').src="/images/space shock white.png";
    gsap.to(".avatar", {duration: 0.5, ease:"power 1", y: height, delay: 0.5});
    gsap.to(".platform", {duration: 0.5, ease: "power 1", rotation:"0", transformOrigin:"left top", delay: 2});
    gsap.to(".push", {duration: 0.2, ease: "linear", opacity: 1, delay: 2.5});
    document.querySelector(".section1").style.position = "relative";
    document.body.style.overflow = 'visible';
    gsap.to(".avatar", {duration: 0.2, ease:"power 1", opacity:0, delay: 1});
    gsap.to(".arrow", {duration: 0.5, ease: "power1", opacity: 1, delay: 4});
    document.querySelector('.fallingAvatar').style.opacity = 1;
    document.querySelector('.topFruits').style.opacity = 1;
}

// let avatar appear 

//var tl1 = gsap.timeline( {
//    scrollTrigger: {  
//        trigger: ".section2",
//        start: 'top bottom-450',
//        end: 'bottom bottom+200', 
//        scrub: true 
//    }
//});
//tl1.to(".fallingAvatar", {duration: 0.1, ease:"linear", opacity: 1});  


/// scroll trigger for falling avatar section 2 
var tl = gsap.timeline( {
    scrollTrigger: {  
        trigger: ".section2",
        start: 'top top-=400',
        end: 'bottom top-=800px', 
        scrub: true 
    }
});
//tl.yoyo( true ); 
tl.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "-10"});  
tl.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "10"});
tl.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "-10"});
tl.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "10"});
tl.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "-10"});
tl.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "10"});

// scroll trigger for falling avatar section 3 
var tl4 = gsap.timeline( {
    scrollTrigger: {  
        trigger: ".section3",
        start: 'top top-=400',
        end: 'bottom top-=800px', 
        scrub: true 
    }
});
//tl.yoyo( true ); 
tl4.to(".fallingAvatar", {duration: 0.5, ease:"linear", x:-50});
tl4.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "-10"});  
tl4.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "10"});
tl4.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "-10"});
tl4.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "10"});
tl4.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "-10"});
tl4.to(".fallingAvatar", {duration: 0.5, ease:"linear", rotation: "10"});



/// scroll trigger for clouds moving 
var tl2 = gsap.timeline( {
    scrollTrigger: {  
        trigger: ".section2",
        start: 'top top-=10',
        end: 'bottom+=500', 
        scrub: true 
    }
});

tl2.to(".cloud1", {duration: 2, ease:"linear", x: -1300});
tl2.to(".cloud2", {duration: 2, ease:"linear", x: -900}, "<"); 
tl2.to(".cloud3", {duration: 2, ease:"linear", x: -3000}, 1);   
tl2.to(".cloud4", {duration: 2, ease:"linear", x: -2000}, "<"); 
tl2.to(".cloud5", {duration: 2, ease:"linear", x: -1500}, "<"); 

// skier timeline 
var tl3 = gsap.timeline( {
    scrollTrigger: {  
        trigger: ".section2",
        start: 'top top-=1500px',
        end: 'bottom top-=800px', 
        scrub: true 
    }
});
tl3.to(".ski", {duration: 8, ease: "power 1", x: -300, y: 200});


/// flashing elements in About section
/// cabin flash
var cabin = gsap.timeline( {
    scrollTrigger: {  
        trigger: ".section2",
        start: 'top top-=1500px',
        end: 'bottom top-=800px', 
        scrub: true 
    }
});
cabin.to(".glowCabin", {duration: 0.5, ease: "power 1", });



// shadow moving 
var tl = gsap.timeline( {
    scrollTrigger: {  
        trigger: ".section3",
        start: 'top top-=800',
        end: 'bottom top-=800px', 
        scrub: true 
    }
});
tl.to(".shadow", {duration: 1, ease:"linear", x:150});

var x = 0; 

// hand icon flashes 

    var t = new TimelineMax({
        yoyo: true,
        repeat: -1,
      });

    t.from(".hand1", {duration: 0.2, ease:"linear", opacity: 0.7});
    t.to(".hand1", {duration: 0.2, ease:"linear", opacity: 0.2});

    var l = new TimelineMax({
        yoyo: true,
        repeat: -1,
      });

    l.from(".hand2", {duration: 0.2, ease:"linear", opacity: 0.2}, "<");
    l.to(".hand2", {duration: 0.2, ease:"linear", opacity: 0.7});


    var v = new TimelineMax({
        yoyo: true,
        repeat: -1,
      });

    v.from(".hand3", {duration: 0.2, ease:"linear", opacity: 0.7}, "<");
    v.to(".hand3", {duration: 0.2, ease:"linear", opacity: 0.2});

// cabin flashes 

var cabin = new TimelineMax({
    yoyo: true,
    repeat: -1,
  });

cabin.from(".yellowGlow", {duration: 0.2, ease:"linear", opacity: 1});
cabin.to(".yellowGlow", {duration: 0.2, ease:"linear", opacity: 0});


// glow function for cabin 

function glow() {
    document.querySelector(".cabin").src = "/images/cabin glow.png";
    document.querySelector(".cabin").style.cursor = "pointer";
}

function noGlow() {
    document.querySelector(".cabin").src = "/images/cabin 2.png";
}


// cabin text appears when you click on cabin 
function cabinText() {
    document.querySelector(".cabinBox").style.display = "block"; 
    cabin.to(".yellowGlow", {duration: 0.2, ease:"linear", opacity: 0});
    cabin.pause(); 
}

// cabin text disappears 
function cabinText2() {
    document.querySelector(".cabinBox").style.display = "none";
}

// glow function for skiier 

function glow2() {
    document.querySelector(".ski").src = "/images/skier glow.png";
    document.querySelector(".ski").style.cursor = "pointer";
}

function noGlow2() {
    document.querySelector(".ski").src = "/images/skier.png";
}

// ski text appears when you click on skier 
function skiText() {
    document.querySelector(".skiBox").style.display = "block";
}

// ski text disappears 
function skiText2() {
    document.querySelector(".skiBox").style.display = "none";
}


// functions for blinds raising and text moving in City section 

function raise() {
    gsap.to(".cover1", {duration: 1, ease:"power 1", height: "0vw"}); 
    gsap.to(".hand1", {duration: 1, ease:"power 1", opacity: 0})
    setTimeout(() => {document.querySelector(".webText1").style.display = "block";}, 700); 
    t.pause(); 

}

function lower() {
    window.open("https://addterra.github.io/preview/home.html", '_blank').focus();
}
function lower2() {
    window.open("https://audree-jacobs.github.io/WDD230/lesson10/preston-10.html", '_blank').focus();
}
function lower3() {
    window.open("https://tote-bags-by.audreynicolejacobs.com", '_blank').focus();
}

function contact() {
    window.open("https://www.linkedin.com/in/audrey-jacobs-byui2022/", '_blank').focus();
}

function text1gone() {
    document.querySelector(".webText1").style.display = "none";
}

function raise2() {
    gsap.to(".cover2", {duration: 1, ease:"power 1", height: "0vw"}); 
    gsap.to(".hand2", {duration: 1, ease:"power 1", opacity: 0})
    setTimeout(() => {document.querySelector(".webText2").style.display = "block";}, 700);
    l.pause(); 

}

function text2gone() {
    document.querySelector(".webText2").style.display = "none";
}

function raise3() {
    gsap.to(".cover3", {duration: 1, ease:"power 1", height: "0vw"}); 
    gsap.to(".hand3", {duration: 1, ease:"power 1", opacity: 0})
    setTimeout(() => {document.querySelector(".webText3").style.display = "block";}, 700);
    v.pause(); 
}

function text3gone() {
    document.querySelector(".webText3").style.display = "none";
}

