var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas (400,400);
  
 
  
  
  monkey=createSprite(100,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
 ground=createSprite(400,350,900,10);
 
  obstacleGroup=createGroup();
  foodGroup=createGroup();
  
  
}


function draw() {

   background("white");
  
  ground.velocityX=-4;
  
 ground.x=ground.width/2;
 console.log(ground.x);
  
   if (keyDown("space")&&monkey.y>=200){
     monkey.velocityY=-12;
   }
  
 monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
spawnObstacle();
spawnFood();
  
  drawSprites();

stroke("white");
textSize(20);
fill("white");
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: "+survivalTime, 100,50);
  
}
function spawnObstacle(){
  if (World.frameCount%300===0){
  var obstacle=createSprite(400,320,30,30);
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.15;
      obstacle.velocityX=-4;
      obstacle.lifetime=120;
    obstacleGroup.add(obstacle);
}
}
function spawnFood(){
  if (World.frameCount%80===0){
  var food=createSprite(400,Math.round(random(120,200)),10,10);
      food.addImage(bananaImage);
      food.scale=0.12;
      food.velocityX=-4;
      food.lifetime=120;
    foodGroup.add(food);
  }
}




