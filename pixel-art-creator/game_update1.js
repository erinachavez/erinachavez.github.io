// Global variables
var cnv,gridX,gridY,posX,posY;
var gridLength,squareSize,gridSize;
var shiftY,shiftX,mGridX,mGridY;
var r,g,b;

function changeColor(red,green,blue){
	// Will be user inputted values
	r = red;
	b = blue;
	g = green;

	$('#currentColor').css('background-color','rgb(' + r + ',' + g + ',' + b + ')');
};

function gridReset(){ // Resets grid to white
	for (var i=0; i<gridLength; i++){
		for (var j=0; j<gridLength; j++){
			gridY[i][j].squareReset();
		}
	}
};

function setup(){
	// Will be user inputted values
	gridLength = 40;
	squareSize = 16;
	gridSize = gridLength*squareSize + 1;

	// Create canvas according to user inputted grid length and square size
	cnv = createCanvas(gridSize,gridSize);
	cnv.position(((windowWidth - width)/2), ((windowHeight - height)/2));

	// Fill array with grid squares
	gridY = [];
	for (var i=0; i<gridLength; i++){
		gridX = [];
		var shiftY = (squareSize*i);

		for (var j=0; j<gridLength; j++){
			var shiftX = (squareSize*j);
			gridX[j] = new GridSquare(shiftY,shiftX);
		};

		gridY[i] = gridX;
	};

	r = 255;
	g = 255;
	b = 255;

	gridReset();

	// cursor = new Cursor;
};

function draw(){
	// Calculate user's position, grid by grid
	mGridX = int(mouseX/squareSize);
	mGridY = int(mouseY/squareSize);

	// Draw all squares in grid to screen
	for (var i=0; i<gridLength; i++){
		for (var j=0; j<gridLength; j++){
			gridY[i][j].display();
		}
	}
};

function windowResized(){ // Keep canvas centered
	cnv.position(((windowWidth - width)/2), ((windowHeight - height)/2));
};

class GridSquare{ // Individual grid squares
	constructor(posX,posY){
		this.posX = posX;
		this.posY = posY;
	}
	display(){
		if (mouseIsPressed && mGridX*squareSize == this.posX && mGridY*squareSize == this.posY){
			fill(color(r,g,b));
			rect(this.posX,this.posY,squareSize,squareSize);
		}
	}
	squareReset(){ // Resets one square back to white with black borders
		strokeWeight(1);
		stroke(0);
		fill(255);
		rect(this.posX,this.posY,squareSize,squareSize);
	}
};

// class Cursor{
// 	constructor(){

// 	}
// 	display(){
// 		fill(r,g,b);
// 		ellipse(mouseX+10,mouseY+10,10,10);
// 	}
// }
