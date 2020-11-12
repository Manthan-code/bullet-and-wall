var wall,bullet;
var speed1, weight;



function setup() {
  createCanvas(1600,400);
  speed1 = random(223,321);
  weight = random(33,52);
  thickness = random(30,53);

  bullet=createSprite(400, 200,100,20);
  bullet.shapeColor="white";
  bullet.velocityX = speed1;

  wall=createSprite(1200,200,thickness,200);
  
  wall.shapeColor=rgb(80,80,80);
}

function draw() {
  background("yellow"); 

 damage =(0.5*weight*speed1*speed1)/(thickness*thickness*thickness)  ;

if(collided(wall,bullet)){
  bullet.velocityX = 0;

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<=10){
    wall.shapeColor=color(0,255,0);
  }

} 
else{
  wall.shapeColor=rgb(80,80,80);
}

  drawSprites() ;

  text("Speed:="+Math.round(speed1),1000,20);
  text("Weight="+Math.round(weight),1000,50);
  text("damage="+Math.round(damage),1000,80);


}

function collided(object1,object2){

  if(object1.x- object2.x<object1.width/2+object2.width/2
    ){
     return true
  }
else{
  return false
}
}




