let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function Can(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

let x = 10;
let y = 10;
let width = 200;
let height = 750;
let color = 'red';



Can(x, y, width, height, color);