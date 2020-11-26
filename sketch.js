var car,wall;
var speed,weight;

function setup() {
  createCanvas(1000,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(50,200,50,50);
  wall = createSprite(900,200,60, height/2);
  wall.shapeColor = (80,80,80);
  car.velocityX = 0;
  car.velocityX = speed;
 
}

function draw() {
  background(0); 
  
  if (wall.x- car.x < (car.width+wall.width)/2){
    
    car.Y = car.Y-100;
    
    car.velocity =0;
    
    var deformation = 0.5* weight * speed/22509;
    
    if(deformation>180){
      car.shapeColor = "green";
    }
    
  if(deformation<180 && deformation>100 ){
      car.shapeColor = "blue";
    }
    
    if(deformation <100){
      car.shapeColor = "red"
    }
    
    
  
  
  }
    
  
  
  drawSprites();
}