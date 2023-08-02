let xBarreiras = [805, 805, 805, 805, 805, 805];
let yBarreiras = [54, 144, 234, 324, 414, 504];
let velocidadeBarreiras = [5.5, 7, 6.5, 4.5, 3.5, 5];
let comprimentoBarreiras = 45;
let alturaBarreiras = 30;


function mostraBarreiras(){
  for (let i = 0; i < imagemBarreiras.length; i++){
    image(imagemBarreiras[i], xBarreiras[i], yBarreiras[i], comprimentoBarreiras, alturaBarreiras)
  }
}

function movimentaBarreiras(){
  for(let i = 0; i < imagemBarreiras.length; i++){
    xBarreiras[i] -= velocidadeBarreiras[i];
  }
}

function posicaoInicialBarreiras(){
  for(let i = 0; i < imagemBarreiras.length; i++){
    if (passouDaTela(xBarreiras[i])){
      xBarreiras[i] = 805;
    }
  }
}

function passouDaTela(xBarreiras){
   return xBarreiras < -30;
}