
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x=ground.width/2;
console.log(ground.x) ;

FoodGroup = createGroup;
obstacleGroup = createGroup;
  
servivalTime = 0;
  
}


function draw() {
background = "white";

if (ground.x<0){
  ground.x = ground.width/2;
}
if (keyDown("space")) {
  monkey.velocityY = -12;
}
monkey.velocityY = monkey.velocityY + 0.8;
  
monkey.collide(ground);
  
stroke("white");
textSize(20);
fill("white");
text("score:" + score,500,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.round(random(1,200));
text("survival Time:" + survivalTime, 100,50);
  
drawSprites();
}

function obstacles(){
if (frameCount%200===0){
obstacle = creatSprites(600,350,20,20);
obstacle.addAnimation(obstacleImage);
obstacle.x = Math.round(random(100,300));
obstacle.velocityX = -5;
obstacle.lifetime = 200;
obstacle.scale = 0.5;
  } 
}
function Food(){
if (frameCount%80===0){
banana = createSprite(400,300,10,10);
banana.addAnimation(bananaImage);
banana.y = Math.round(random(100,300));
banana.velocityX = -5;
banana.lifetime = 200;
banana.scale = 0.5;
  
  }
}




