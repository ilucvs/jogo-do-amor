let xDeb = 130;
let yDeb = 552;
let xLuc = 547; 
let yLuc = 2;
let colisao = false;
let msg;

function mostraNos(){
  image(imagemDeb, xDeb, yDeb, 40, 40);
  image(imagemLuc, xLuc, yLuc, 40, 40);
}

function movimentaDeb(){
  if (keyIsDown(UP_ARROW)){
    yDeb -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeMover()){
       yDeb += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xDeb -= 3
  }
  if (keyIsDown(RIGHT_ARROW)){
    xDeb += 3
  }
}

function podeMover(){
  return yDeb < 552;
}

function verificaColisao(){
  for (let i = 0; i < imagemBarreiras.length; i++){
    colisao = collideRectCircle(xBarreiras[i], yBarreiras[i], comprimentoBarreiras, alturaBarreiras, xDeb, yDeb, 15);
    if (colisao){
      voltaAtorPosicaoInicial();
    if (mostraMsg2()){
      msg = ("Tudo bem, EU TE AMO!");
    }
    }
  } 
}

function mostraMsg2(){
  return msg = ("Tudo bem, EU TE AMO!");
}

function voltaAtorPosicaoInicial(){
  yDeb = 552;
  xDeb = 130;
}

function texto(){
  stroke(255);
  textAlign(CENTER);
  textSize(22);
  fill(255, 0, 0);
  text(msg, width / 5, 25);
}

function mostraMsg(){
  if (yDeb < 15){
    chegouEmMim.play();
    msg = ("EU TE AMO!"); 
    voltaAtorPosicaoInicial();
  }
}

function tiraMsg(){
  if (yDeb < 450){
    msg = ("");
  }
}