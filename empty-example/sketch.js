function setup() {
	createCanvas(400,400);
  // put setup code here
}

function draw() {
	var cx = map(mouseX,0,width,0,255);
	var cy = map(mouseY,0,height,0,255);
	var nsize = width/8+cos(mouseY*PI/180)*width/16;
    noStroke();
	fill(cx,cy,150,50);
	circle(mouseX,mouseY,nsize);
  // put drawing code here
}