
var spaceImg, space;
var astroidImg, astroid, astroidsGroup;
var starImg, star, starsGroup;
var spaceship, spaceshipImg;
 
var score = 0;

var gameState = "play"

function preload(){
  spaceImg = loadImage("space.png");
  astroidImg = loadImage("astroid.png");
  starImg = loadImage("star.jpg");
  spaceshipImg = loadImage("spaceship.png");
  
}

function setup() {
  createCanvas(600, 600);
  space = createSprite(300,300);
  space.addImage("space",spaceImg);
  space.velocityY = 1;

  spaceship = createSprite(200,200,50,50);
  spaceship.addImage("ship",spaceshipImg)
  spaceship.scale =0.08;

astroidsGroup = new Group();
starsGroup = new Group();

score = 0 ;
}

function draw() {
  background(0);

  text("Score :" + score,540,60)

  if(gameState === "play"){
if(keyDown("left_arrow")){
spaceship.x = spaceship.x-3;

}
if(keyDown("right_arrow")){
  spaceship.x = spaceship.x+3;
  
  }
  if(keyDown("space")){
    spaceship.velocityY = -10;
    
    }
    spaceship.velocityY = spaceship.velocityY+0.8;
  
    if(starsGroup.isTouching(spaceship)){
      starsGroup.destroyEach();
      score = score +1;
    }
  
  if(space.y > 400){
      space.y = 300
    }
   
    if(astroidsGroup.isTouching(spaceship) || spaceship.y > 600){
      spaceship.destroy();
       starsGroup.destroyEach();
       
       astroidsGroup.destroyEach();
       space.velocityY = 0;
       fill("red")
       text("game Over");
       gameState = "end"
       }
if(gameState)
  spawnStars();
 spawnAstroids();

  } 

drawSprites();
}

function spawnStars(){
if (frameCount % 240 ===0){
var star = createSprite(200,10);

star.addImage(starImg);

star.velocityY = 1;

star.scale = 0.08;

 star.lifetime =800;

starsGroup.add(star);
  


}





}
function spawnAstroids(){
  if (frameCount % 240 ===0){
    var astroid = createSprite(200,-50);

    astroid.x = Math.round(random(120,400));
    astroid.addImage(astroidImg);

    astroid.velocityY = 1;

    astroid.scale = 0.08;

    astroid.lifetime =800;

    astroidsGroup.add(astroid);

  }
}