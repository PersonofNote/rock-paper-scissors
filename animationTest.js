var coinImage = new Image(); //Create new image
coinImage.src = "coin-test.png"; //Set that image's source

var canvas = document.getElementById("coinAnimation"); //Set the desired canvas to a var, and also set its size while you're at it.
canvas.width = 42;
canvas.height = 42;


//Note that "options" is an unspecified number of parameters, all of which are optional.
function sprite (options) {
  //create an empty object set to the var "that."
	var that = {},
      frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;

    //This is where the options are, but, like...?    
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

that.render = function () {
        // Draw the animation
        that.context.drawImage(
           that.image,
           frameIndex * that.width / numberOfFrames,
           0,
           that.width/numberOfFrames,
           that.height,
           0,
           0,
           that.width/numberOfFrames,
           that.height)
        console.log("Render has run.")
    };

       that.update = function () {

        tickCount += 1;
        console.log("Updated.")
      
        if (tickCount > ticksPerFrame) {
        
          tickCount = 0;
          
            if (frameIndex < numberOfFrames - 1) {
            // Go to the next frame
            frameIndex += 1; 
          }
        }
    }; 
    console.log(that + " is being called now."); 
    console.log(that.context + " is the context.");
    console.log("Image = " + that.image);
    return that;
       
}

//make a coin by calling the sprite function and passing it the context, width, height and src as arguments.
var coin = sprite ({
  context: canvas.getContext("2d"),
  width: 42,
  height: 42,
  image: coinImage
})



console.log("AnimationTest has loaded.");

coin.render();
//coin.update();
//Is it just rendering once? What's happening here?