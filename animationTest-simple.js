var canvas = document.querySelector("#playField");
var context = canvas.getContext("2d");
var coin = img_create("coin-test.png", "coin", "coin");
var witch = img_create("spr_witchPoof.png", "witchPoof", "witch")
//var coin = new Image();
//coin.src = "coin-test.png";
//const coin = img_create("coin-test.png", "coin", "coin");
function img_create(src, alt, id) {
    var img = new Image();
    document.createElement('img');
    img.src = src;
    //console.log("Image = " + img)
    img.id = id;
    console.log("img = " + img);
    return img;
}

console.log(coin);


var shift = 0;
var frameWidth = 44;
var frameHeight = 50;
var totalFrames = 10;
var currentFrame = 0;
//Added a variable to manually control FPS.
var animThrottle = 0;
 
function animate() {
  context.clearRect(120, 25, 300, 300);
 
  //draw each frame + place them in the middle
  context.drawImage(coin, shift, 0, frameWidth, frameHeight,
                   150, 25, frameWidth, frameHeight);


  animThrottle++
  if (animThrottle%2 == 0) {
  	shift += frameWidth;
  	currentFrame++;
  }
  
  //shift += frameWidth;
  
  /*
    Start at the beginning once you've reached the
    end of your sprite!
  */
  if (currentFrame == totalFrames) {
    shift = 0;
    currentFrame = 0;
  }
 
  requestAnimationFrame(animate);
}

animate();


/* Ok why are these two separate functions working together. It seems like you're declaring variables
and everything in the first one, but then in the second one you're actually creating the image.
Except that shoudn't be the case! The second one should work fine, shouldn't it?*/

/*
var coin = new Image();
coin.src = "coin-test.png";

document.getElementById("playField").getContext("2d").drawImage(coin,0,0,50,50,150,50,50,50);
*/
//ctx.drawImage(image, sourcex, sourcey, sourceWidth, sourceHeight, destinationx, destinationy, destinationWidth, destinationHeight);