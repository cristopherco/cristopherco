// Simulación de calor usando ondas en canvas
const canvas = document.getElementById("heatEffect");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let t = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibuja líneas onduladas simulando calor
  for (let y = 0; y < canvas.height; y += 8) {
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x += 20) {
      let offset = Math.sin((x + t) * 0.02) * 3; 
      ctx.lineTo(x, y + offset);
    }
    ctx.strokeStyle = "rgba(255, 180, 80, 0.05)"; 
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  t += 1.5;
  requestAnimationFrame(draw);
}

draw();
