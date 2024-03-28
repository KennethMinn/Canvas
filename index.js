const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

const drawCircle = () => {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
  ctx.fill();
};

canvas.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  //   drawCircle();
});

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  drawCircle();
});

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height); clear all rect
//   drawCircle();
//   requestAnimationFrame(animate); // looping this function,
// }

// animate();
