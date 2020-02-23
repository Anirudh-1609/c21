function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  moverect=createSprite(100,100,50,50);
 rect1=createSprite(100,200,50,50);
 rect2=createSprite(600,200,50,50);
 
}

function draw() {
  background(255,255,255);
  moverect.x=World.mouseX;
  moverect.y= World.mouseY;
  if(isTouching(rect1,moverect)){
    rect1.shapeColor="red";
    moverect.shapeColor="red";
  }
  else{
    rect1.shapeColor="blue";
    moverect.shapeColor="blue"; 
  } 
 drawSprites();
}



















