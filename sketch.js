
var canvas;
var playerCount, database, quiz, question, player;
var gameState = 0;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
   start();
}


function draw(){
  background("pink");
 
}
