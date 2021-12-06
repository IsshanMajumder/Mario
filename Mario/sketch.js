var bg;
var score=0;
var marioimage;
var mariosprite;



function preload(){
 bg=loadImage("backg.jpg");
 marioimage=loadAnimation("Capture1.png","Capture3.png","Capture4.png");
}

function setup() {
  createCanvas(600, 200);
  mariosprite=createSprite(50,130);
  mariosprite.addAnimation("running",marioimage);
  mariosprite.scale=0.5
  score = 0;
}

function draw() {
  background(bg);
  textSize(20);
  fill(255);
  text("Score: "+ score, 500,40);
  drawSprites();
  
}

