let t 
let nl
let density
let totalX
let totalY


function setup() {
  createCanvas(windowWidth, windowHeight)
  background('#000000')
  t = 0 
  nl = 0.02
  density = 5
  totalX = 200
  totalY = 200
  let c1 = color('#efd7e6')
  let c2 = color('#f4450f')

  for (let x = 0; x < totalX; x++) {
    for (let y = 0; y < totalY; y++) {
      let n = noise(x * nl, y * nl)
      let rn = n * density - floor(n * density)
      let d = map(rn, 0, 0.5, 0, 1)
      if (rn > 0.5) {
        d = map(rn, 0.5, 1, 1, 0)
      }
      let finalColor = lerpColor(c2, c1, d)
      setup(x, y, finalColor)
    } 
  }
  updatePixels()
}

// function draw() {
  // background('#00000011')
// }

// function mouseDragged() {
//   // let n = noise(t * nl)
//   let n = noise(mouseX * nl, mouseY * nl)
//   let size = 5 + n * 20
//   // let c1 = color('#2727e6')
//   // let c2 = color('#ffffff')
//   // let finalColor = lerpColor(c1, c2, n)

//   colorMode(HSL, 100)
//   let finalColor = color(n * 100, 100, 50)

//   noStroke()
//   fill(finalColor)
//   circle(mouseX, mouseY, size)
//   t += 1
// }