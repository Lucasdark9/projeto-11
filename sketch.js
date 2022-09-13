var ship,shipimg;

var sea,seaimg;





function preload(){
shipimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

seaimg=loadImage("sea.png");


}

function setup(){
  createCanvas(400,400);

  sea =createSprite(0,0,400,400);
  sea.addImage(seaimg)
  sea.velocityX=-5    
 ship=createSprite(200,200,50,50);  
 ship.addAnimation("ship",shipimg)
 ship.scale= 0.3









}

function draw() {
  background("blue");

  if(sea.x<0){
  sea.x=200


  }

    drawSprites();
   
 
}
