
var trex ,trex_img;
var ground,g_img;
function preload(){
  trex_img= loadAnimation("trex1.png","trex3.png","trex4.png")
 g_img= loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex= createSprite(50,160,20,50)
  trex.addAnimation("trex1",trex_img)
  trex.scale=0.5
  ground=createSprite(200,180,600,10)
  ground.addImage("ground1",g_img)
  ground.velocityX=-10
  //create a trex sprite

}

function draw(){
  background("white")
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    trex.velocityY=-10

  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(ground)
drawSprites()
}
