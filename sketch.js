var wall,bullet;
var speed1, weight;



function setup() {
  createCanvas(1600,400);
  speed1 = random(223,321);
  weight = random(400,1500);
  thickness = random(30,53);

  bullet=createSprite(400, 200,100,20);
  bullet.shapeColor="white";
  bullet.velocityX = speed1;

  wall=createSprite(1200,200,thickness,height/2);
  
  wall.shapeColor=rgb(80,80,80);

  
 
}

function draw() {
  background("yellow"); 

 damage =0.5*weight*speed1*speed1/(thickness*thickness*thickness)  ;

 if(wall.x- bullet.x<wall.width/2+bullet.width/2
  ){
   
   bullet.velocityX = 0;

   if(damage>10){
    bullet.shapeColor="red";
  }    
  if(damage<10){
    bullet.shapeColor="green";
  }

  
}

  drawSprites();

  text("Speed:="+Math.round(speed1),1000,20);
  text("Weight="+Math.round(weight),1000,50);
  text("damage="+Math.round(damage),1000,80);


}




