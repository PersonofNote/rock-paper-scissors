var coinImage = new Image();
coinImage.src = "coin-test.png";

function sprite (options) {
	var that = {};

	that.context = options.context;
	that.width = options.width;
	that.height = options.height;
	that.image = options.image;

that.render = function () {

        // Draw the animation
        that.context.drawImage(
           that.image,
           0,
           0,
           that.width,
           that.height,
           0,
           0,
           that.width,
           that.height);
        console.log("render has run")
    };

    return that;    
}



var canvas = document.getElementById("coinAnimation");
canvas.width = 42;
canvas.height = 42;

var coin = sprite ({
	context: canvas.getContext("2d"),
	width: 42,
	height: 42,
	image: coinImage
})


console.log("AnimationTest has loaded.");

coin.render();
//Is it just rendering once? What's happening here?