
function preload(){
 
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png")
  //shipImg = loadImage("ship-1.png")


}

function setup(){
  createCanvas(2000,900);
  sea = createSprite(200,180,400,20)
sea.addImage(seaImg);
sea.velocityX = -4;


boat = createSprite(900, 450,)
 boat.addAnimation("boat",shipImg1);
boat.scale = .6
}

function draw() {
  background("blue");
 
if(sea.x < 0){
sea.x = sea.width/2;
}

  drawSprites()
}



// function preload() {

//   trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
//   trex_collided = loadImage("trex_collided.png");
//   groundImage = loadImage("ground2.png")
//   }
  
  
//   function setup() {
//   createCanvas(600, 200);
  
//   //create a trex sprite
//   trex = createSprite(50,180,20,50);
//   trex.addAnimation("running", trex_running);
//   trex.scale = 0.5;
  
//   invisibleGround = createSprite(200, 190, 400, 10)
//   invisibleGround.visible = false;
  
  
  
//   //create a ground sprite
//   ground = createSprite(200,180,400,20);
//   ground.addImage("ground",groundImage);
//   ground.x = ground.width /2;
//   ground.velocityX = -4;
  
//   }
  
  
  
//   function draw() {
//   background(220);
  
//   console.log(trex.y);
//   //jump when the space button is pressed
//   if (keyDown("space") && (trex.y> 160)) {
//   trex.velocityY = -10;
//   }
  
//   trex.velocityY = trex.velocityY + 0.8
//   if (ground.x < 0) {
//   ground.x = ground.width / 2;
//   }
  
//   trex.collide(invisibleGround);
//   drawSprites();
//   }
  