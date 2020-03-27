var fixedRect, movingRect;

var collisionDistanceX, actualDistanceX , collisionDistanceY , actualDistanceY;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 100, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  

  stroke ("white");
  fill ("white");
  collisionDistanceX = fixedRect.width/2 + movingRect.width /2;
  actualDistanceX = Math.abs ( movingRect.x - fixedRect.x );
  text (collisionDistanceX, 100, 100);
  text (actualDistanceX, 100, 200);

  collisionDistanceY = fixedRect.height/2 + movingRect.height/2;
  actualDistanceY= Math.abs ( movingRect.y - fixedRect.y );

  if( actualDistanceX <= collisionDistanceX  && actualDistanceY <= collisionDistanceY) { 
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }



  movingRect.x = mouseX;
  movingRect.y = mouseY;
  drawSprites();
}