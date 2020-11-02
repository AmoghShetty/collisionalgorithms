var fixedrect;
var movingrect;
var recta;
var rectb;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(600,200,50,50);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect.debug=true;
  recta=createSprite(400,200,50,50);
  rectb=createSprite(400,300,50,50);
  recta.velocityY=1;
  rectb.velocityY=-1;
}

function draw() {
  background(255,255,255); 
  movingrect.x=mouseX;
  movingrect.y=mouseY
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2) {

      fixedrect.shapeColor="orange";
      movingrect.shapeColor="orange";

    }
    else{

      fixedrect.shapeColor="green";
      movingrect.shapeColor="green";

    }
    if(recta.x-rectb.x<recta.width/2+rectb.width/2 &&
      rectb.x-recta.x<rectb.width/2+recta.width/2){
    recta.velocityX=recta.velocityX*(-1);
    rectb.velocityX=rectb.velocityX*(-1);
    

      }
      if(recta.y-rectb.y<recta.height/2+rectb.height/2 &&
        rectb.y-recta.y<rectb.height/2+recta.height/2){

          recta.velocityY=recta.velocityY*(-1);
          rectb.velocityY=rectb.velocityY*(-1);

        }
  drawSprites();
}