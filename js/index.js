let roadImage;
let actor;
// variáveis dos canvas
var screen = document.getElementById('screen');
var brush = screen.getContext('2d');

var background = function(key) {
  return key.onload = function () {
    brush.drawImage(key, 0, 0);
  };
}

var createActor = function () {
  actor = new Image();
  actor.src = './images/ator-1.png';
}

var createCanvas = function (xInitial, yInitial, width, height, image) {
  brush.fillStyle = background(image);
  brush.beginPath();
  brush.fillRect(xInitial, yInitial, width, height);
}

var preload = function () {
  roadImage = new Image(800, 400);
  roadImage.src = "../images/estrada.png";
  createCanvas(0, 0, 800, 400, roadImage);
};

preload();
