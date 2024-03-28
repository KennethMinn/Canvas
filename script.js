const canvas = document.getElementById("canvas1");

const ctx1 = canvas.getContext("2d");
const ctx2 = canvas.getContext("2d");
console.log(ctx1);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //drawing rectangle
  ctx1.fillStyle = "white"; // background color
  ctx1.fillRect(10, 20, 100, 50); // x,y,w,h

  //drawing circle
  ctx2.fillStyle = "red";
  ctx2.strokeStyle = "red";
  ctx2.beginPath();
  ctx2.arc(200, 300, 50, 0, Math.PI * 2);
  // ctx2.fill();
  ctx2.stroke();
});

//drawing rectangle
ctx1.fillStyle = "white"; // background color
ctx1.fillRect(10, 20, 100, 100); // x,y,w,h

//drawing circle
ctx2.fillStyle = "red";
ctx2.strokeStyle = "blue";
ctx2.lineWidth = 10;
ctx2.beginPath();
ctx2.arc(200, 300, 50, 0, Math.PI * 2);
ctx2.fill();
ctx2.stroke();
