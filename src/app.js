let t 
let nl


function setup() {
  createCanvas(windowWidth, windowHeight)
  background('#000000')
   t = 0 
   nl = 0.02
}

function draw() {
  // background('#00000011')
}

function mouseDragged() {
  // let n = noise(t * nl)
  let n = noise(mouseX * nl, mouseY * nl)
  let size = 5 + n * 20
  // let c1 = color('#2727e6')
  // let c2 = color('#ffffff')
  // let finalColor = lerpColor(c1, c2, n)

  colorMode(HSL, 100)
  let finalColor = color(n * 100, 100, 50)

  noStroke()
  fill(finalColor)
  circle(mouseX, mouseY, size)
  t += 1
}