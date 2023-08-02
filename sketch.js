function setup() {
  createCanvas(800, 600);
  somDeFundo.loop();
}

function draw() {
  background(imagemCaminho);
  mostraNos();
  mostraBarreiras();
  movimentaBarreiras();
  movimentaDeb();
  posicaoInicialBarreiras();
  verificaColisao();
  texto();
  mostraMsg();
  tiraMsg();
}