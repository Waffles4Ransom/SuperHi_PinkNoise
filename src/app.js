function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background('#00000011')
  circle(50, 50, 10)
}

function mouseDragged() {
  let n = random()
  let size = 20 + n * 20
  let c1 = color('#2727e6')
  let c2 = color('#ffffff')
  let finalColor = lerpColor(c1, c2, n)

  noStroke()
  fill(finalColor)
  circle(mouseX, mouseY, size)
}