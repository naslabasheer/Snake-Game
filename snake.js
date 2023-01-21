//1. variable declaration.

var cvs = document.getElementById("canvas").getContext("2d")
var sPosX =80;
var sPosY =80;
var nPosX =0;
var nPosY =0;
var fPosX = 140;
var fPosY = 140;
var snakeTail = [];
var snakeSize = 1;
var Score = 0;
var gameStatus = "Ready";





//2. Onload function
window.onload = function () {
  document.addEventListener("keydown", inputControl);
  game=setInterval(mainGame, 300);
}

//3. Main Game Function
function mainGame() {
  document.getElementById("game-status").innerHTML = gameStatus;
   document.getElementById("Score").innerHTML = Score;
  
  //Move Snake

sPosX += nPosX;
sPosY += nPosY;


//Control Snake Mvement


if (sPosX > 400) {
  sPosX = 0;
}
if (sPosY > 400) {
  sPosY = 0;
}
  if (sPosX < 0) {
  sPosX = 400;
}
if (sPosY < 0) {
  sPosY = 400;
 }



  // Game Area
  // Background Color
  cvs.fillStyle = "black";
  cvs.fillRect(0,0,400,400);
//GridLine
for(cl=0;cl<400;cl+=20){
  cvs.moveTo(cl,0);
  cvs.lineTo(cl,400);}
  cvs.stroke();

for(rl=0;rl<400;rl+=20){
  cvs.moveTo(0,rl);
  cvs.lineTo(400,rl);}
  cvs.strokeStyle = "grey";
  cvs.stroke();

  //Snake
  cvs.fillStyle = "yellow";
  //cvs.fillRect(sPosX,sPosY,20,20);
  for(var i=0; i< snakeTail.length;i++){
    cvs.fillRect(snakeTail[i].x,snakeTail[i].y,20,20);

// if snake touch its tail


    if(sPosX == snakeTail[i].x && sPosY == snakeTail[i].y && snakeSize>1){
      clearInterval(game);
      gameStatus = "Game Over"
      document.getElementById("game-status").innerHTML = gameStatus;
    
    }
  }

  //Fruit
  cvs.fillStyle = "red";
  cvs.fillRect(fPosX,fPosY,20,20);




  // if snake eat fruit
if(sPosX==fPosX && sPosY==fPosY){
  snakeSize++;
  Score += 10;
  fPosX = Math.floor(Math.random() * 20) * 20;
  fPosY = Math.floor(Math.random() * 20) * 20;
}
snakeTail.push({x: sPosX, y:sPosY});
while(snakeTail.length>snakeSize){
  snakeTail.shift();
}
}
// Input Control Function
function inputControl(e){
console.log(e.keyCode);
console.log(e.key);

switch(e.keyCode){
  case 38:
    nPosY -= 20;
    nPosX =0;
    //up
    break;
  case 40:
    nPosY += 20;
    nPosX = 0;
    //down
      break;
  case 39:
    //right
    nPosX += 20;
    nPosY = 0;
    break;
  case 37:
    nPosX -=20;
    nPosY = 0;
    //left
    break;
  }
    if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 ){
      gameStatus = "Game Started"
      document.getElementById("game-Status").innerHTML = gameStatus;
    }
}
