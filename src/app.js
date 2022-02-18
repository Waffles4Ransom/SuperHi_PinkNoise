function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  circle(50, 50, 10)
}

function mouseDragged() {
  circle(mouseX, mouseY, 20)
}