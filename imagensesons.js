let imagemCaminho;
let imagemDeb;
let imagemBarreira;
let imagemBarreira2;
let imagemBarreira3;
let imagemCoracao;

let somDeFundo;
let chegouEmMim;

function preload(){
  imagemCaminho = loadImage("imagens/caminho.jpg");
  imagemDeb = loadImage("imagens/deb.png");
  imagemLuc = loadImage("imagens/luc.png");
  imagemBarreira = loadImage("imagens/barreira.png");
  imagemBarreira2 = loadImage("imagens/barreira.png");
  imagemBarreira3 = loadImage("imagens/barreira.png");
  imagemBarreiras = [imagemBarreira, imagemBarreira2, imagemBarreira3, imagemBarreira, imagemBarreira2, imagemBarreira3];
  
  somDeFundo = loadSound("sons/minhacura.mp3")
  chegouEmMim = loadSound("sons/semsom.mp3")
}