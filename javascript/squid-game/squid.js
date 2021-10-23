

/// function to draw a line 
function drawLine(ctx, begin, end, stroke = 'black', width = 1) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }
    if (width) {
        ctx.lineWidth = width;
    }
    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}


//define canvas
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');


// draw the initial star

/// top of star going down the left slope
drawLine(ctx, [150, 10], [137.5, 35], '#b0883c', 1);   //[-25, +50]  
drawLine(ctx, [137.5, 35], [125, 60], '#b0883c', 1);  


//top of star going down right slope 
drawLine(ctx, [150, 10], [162.5, 35], '#b0883c', 1); // [+25, +50]
drawLine(ctx, [162.5, 35], [175, 60], '#b0883c', 1);

//left arm top 
drawLine(ctx, [125, 60], [75, 60], '#b0883c', 1); // [ -100, 0]
drawLine(ctx, [75, 60], [25, 60], '#b0883c', 1);

//left arm bottom 
drawLine(ctx, [25, 60], [65, 72.5], '#b0883c', 1); // [ +80, +25]
drawLine(ctx, [65, 72.5], [105, 85], '#b0883c', 1);

//right arm top
drawLine(ctx, [175, 60], [225, 60], '#b0883c', 1); // [ +100, 0]
drawLine(ctx, [225, 60], [275, 60], '#b0883c', 1);

//right art bottom 
drawLine(ctx, [275, 60], [235, 72.5], '#b0883c', 1); // [ -80, +25]
drawLine(ctx, [235, 72.5], [195, 85], '#b0883c', 1); 

// bottom left arm outside  
drawLine(ctx, [105, 85], [90, 110], '#b0883c', 1); // [ -30, +50]
drawLine(ctx, [90, 110], [75, 135], '#b0883c', 1);

// bottom left arm inside
drawLine(ctx, [75, 135], [112.5, 117.5], '#b0883c', 1); // [ +75, -35]
drawLine(ctx, [112.5, 117.5], [150, 100], '#b0883c', 1);

// bottom right arm outside  
drawLine(ctx, [195, 85], [212.5, 110], '#b0883c', 1); // [ +35, +50]
drawLine(ctx, [212.5, 110], [230, 135], '#b0883c', 1);

// bottom right arm inside
drawLine(ctx, [230, 135], [190, 117.5], '#b0883c', 1); // [ -80, -35]
drawLine(ctx, [190, 117.5], [150, 100], '#b0883c', 1);

// what to do when you lose the game
function endGame() {

    document.getElementById('winner').style.display = "none";
    setTimeout(function(){ location.reload(); return false; }, 2000);
}

// what to do when you win the game
function gameWon() {

    document.getElementById('winner').style.display = "block";
    document.getElementById('canvas').style.display = "none";
    document.getElementById('intro').style.display = "none";

}

// get the coordinates of the mouse when the user clicks
// use the coordinates to cut out the shape or create a crack using an if statement

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x, 
                "Coordinate y: " + y);
    //document.getElementById("info").innerHTML = x;
    //document.getElementById("y").innerHTML = y; 
     ///begin drawing lines for a star 
     const ctx = canvas.getContext('2d');
     var c = 0; 

    if ((x > 221) && (x < 248) && (y > 24) && (y < 130)) {
    drawLine(ctx, [150, 10], [137.5, 35], 'black', 1);   //[-25, +50]
    k = true;
    
    } else if  ((x > 202) && (x < 230) && (y > 117) && (y < 199)) {
    drawLine(ctx, [137.5, 35], [125, 60], 'black', 1);  
    k = true;
 
    } else if  ((x > 124) && (x < 216) && (y > 197) && (y < 200)) {
    drawLine(ctx, [125, 60], [75, 60], 'black', 1);
    k = true;
   
    } else if  ((x > 41) && (x < 124) && (y > 197) && (y < 202)) {
    drawLine(ctx, [75, 60], [25, 60], 'black', 1);
    k = true;
      
    } else if  ((x > 45) && (x < 109) && (y > 203) && (y < 240)) {
    drawLine(ctx, [25, 60], [65, 72.5], 'black', 1);
    k = true;
    
    } else if  ((x > 108) && (x < 176) && (y > 240) && (y < 280)) {
    drawLine(ctx, [65, 72.5], [105, 85], 'black', 1);
    k = true;
   
    } else if  ((x > 150) && (x < 175) && (y > 280) && (y < 357)) {
    drawLine(ctx, [105, 85], [90, 110], 'black', 1);
    k = true;
   
    } else if  ((x > 125) && (x < 150) && (y > 365) && (y < 450)) {
    drawLine(ctx, [90, 110], [75, 135], 'black', 1);
    k = true;
   
    } else if  ((x > 125) && (x < 193) && (y > 380) && (y < 450)) {
    drawLine(ctx, [75, 135], [112.5, 117.5], 'black', 1);
    k = true;
    
    } else if  ((x > 190) && (x < 250) && (y > 330) && (y < 390)) {
    drawLine(ctx, [112.5, 117.5], [150, 100], 'black', 1); 
    k = true;
  
    } else if  ((x > 250) && (x < 310) && (y > 313) && (y < 387)) {
    drawLine(ctx, [190, 117.5], [150, 100], 'black', 1);
    k = true;
    
    } else if  ((x > 320) && (x < 355) && (y > 390) && (y < 438)) {
    drawLine(ctx, [230, 135], [190, 117.5], 'black', 1);
    k = true;
 
    } else if  ((x > 350) && (x < 382) && (y > 350) && (y < 412)) {
    drawLine(ctx, [212.5, 110], [230, 135], 'black', 1);
    k = true;
    
    } else if  ((x > 325) && (x < 350) && (y > 280) && (y < 360)) {
    drawLine(ctx, [195, 85], [212.5, 110], 'black', 1);
    k = true;
    
    } else if  ((x > 325) && (x < 388) && (y > 240) && (y < 278)) {
    drawLine(ctx, [235, 72.5], [195, 85], 'black', 1); 
    k = true;
   
    } else if  ((x > 393) && (x < 454) && (y > 203) && (y < 235)) {
    drawLine(ctx, [275, 60], [235, 72.5], 'black', 1);
    k = true;
  
    } else if  ((x > 369) && (x < 444) && (y > 195) && (y < 201)) {
    drawLine(ctx, [225, 60], [275, 60], 'black', 1);
    k = true;
    
    } else if  ((x > 290) && (x < 372) && (y > 195) && (y < 201)) {
    drawLine(ctx, [175, 60], [225, 60], 'black', 1);  
    k = true;
 
    } else if  ((x > 271) && (x < 289) && (y > 127) && (y < 189)) {
    drawLine(ctx, [162.5, 35], [175, 60], 'black', 1);
    k = true;

    } else if  ((x > 252) && (x < 272) && (y > 43) && (y < 117)) {
    drawLine(ctx, [150, 10], [162.5, 35], 'black', 1);
    } else if  ((x > 1) && (x < 240) && (y > 1) && (y < 219)){
    drawLine(ctx, [105, 60], [30, 30], 'black', 1);
    drawLine(ctx, [68, 45], [40, 45], 'black', 1);
    drawLine(ctx, [94, 55], [95, 40], 'black', 2);
    setTimeout(function(){ alert("be more careful!"); }, 500);
    k = false; 

    } else if  ((x > 1) && (x < 240) && (y > 220) && (y < 310)){
        drawLine(ctx, [65, 72.5], [85, 70], 'black', 1);
        setTimeout(function(){ alert("you lost this game"); }, 500);
        endGame();
        k = false; 
    } else if  ((x > 1) && (x < 240) && (y > 280) && (y < 485)){
        
        drawLine(ctx, [150, 100], [140, 70], 'black', 2);
        drawLine(ctx, [148, 90], [120, 80], 'black', 1);
        setTimeout(function(){ alert("you lost this game"); }, 500);
        endGame();
        k = false; 
    } else if  ((x > 250) && (x < 490) && (y > 1) && (y < 219)){
        
        drawLine(ctx, [175, 60], [200, 0], 'black', 2);
        setTimeout(function(){ alert("be more careful!"); }, 500);
        k = false; 
       
    } else if  ((x > 250) && (x < 490) && (y > 280) && (y < 485)){
    
        drawLine(ctx, [212.5, 110], [200, 122], 'black', 2);
        setTimeout(function(){ alert("you lost this game"); }, 500);
        endGame();
        k = false; 
    }
    
}

var k = true; 
var c = 0;

// on click function 
canvas.addEventListener("click", function(e)
{
    getMousePosition(canvas, e);

    if (k === true) {
    c = c + 1;
    }

    if (c > 19) {
        gameWon();
    }

});
