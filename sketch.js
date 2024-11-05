let xy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 20, 120);
  xy = { x: width / 2, y: height / 2, d: 50 };
}

function draw() {
  background(255, 20, 120);
  ellipse(mouseX + xy.x, mouseY + xy.y, xy.d);
  xy = {
    x: 200 * noise(frameCount / 200) - 100,
    y: 200 * noise(frameCount / 200 + 1000) - 100,
    d: 50,
    // d: 80 * noise(frameCount/100 + 20202) + 10
  };
}
