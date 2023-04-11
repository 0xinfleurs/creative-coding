function setup() {
  createCanvas(600, 600);
  background(10);
  fill(250,250,210);
  noStroke();

  // Draw a random number of stars
  const numStars = random(50, 1000);
  for (let i = 0; i < numStars; i++) {
    // Generate a random position for each star
    const x = random(width);
    const y = random(height);

    // Draw the star
    ellipse(x, y, 3, 2);
    fill(250,250,250);
    ellipse(x*0.01/2, y*0.01/2,3,2)
  }
}
