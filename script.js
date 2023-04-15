function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Define the colors for the gradient
  let c1 = color(0, 128, 255);
  let c2 = color(255, 255, 255);

  // Set the number of steps in the gradient
  let steps = 100;

  // Draw the gradient background
  for (let i = 0; i < steps; i++) {
    let c = lerpColor(c1, c2, i / steps);
    noStroke();
    fill(c);
    rect(0, i * height / steps, width, height / steps);
  }

  // Draw the red circle in the middle
  fill(255, 0, 0);
  noStroke();
  ellipse(width / 2, height / 2, 50);
}
