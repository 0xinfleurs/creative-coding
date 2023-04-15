function setup() {
  createCanvas(400, 400);
  background(0, 71, 171); // Set the background color to black
  noStroke();

  // Generate a random number of stars between 5 and 15
  let numStars = floor(random(10, 400));

  // Draw each star at a random position on the canvas
  for (let i = 0; i < numStars; i++) {
    let x = random(width);
    let y = random(height);
    let radius = random(5, 12);
    let opacity = random(20, 255);
    fill(228, opacity, 10); // Set a random shade of blue
    drawStar(x, y, radius, radius * 2, 7); // Draw a five-pointed star
  }
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
