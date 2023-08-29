let circleSlider, squareSlider;
let squareSize, circleDiameter;

function setup() {
  createCanvas(400, 400);

  circleSlider = createSlider(10, 200, 100); // Slider for circle size
  circleSlider.position(10, height + 190);

  squareSlider = createSlider(10, 200, 100); // Slider for square size
  squareSlider.position(10, height + 220);

  textSize(16);
}

function draw() {
  background(220);

  let circleSize = circleSlider.value();
  squareSize = squareSlider.value();
  circleDiameter = circleSlider.value();

  let squareX = (width - squareSize) / 2;
  let squareY = (height - squareSize) / 2;
  let circleX = width / 2;
  let circleY = height / 2;

  stroke(0);
  noFill();

  // Draw the square
  rect(squareX, squareY, squareSize, squareSize);

  // Draw the circle
  ellipse(circleX, circleY, circleSize, circleSize);

  fill(0);
  noStroke();

  // Display the square length and circle diameter
  let infoText = `Square Length: ${squareSize}\nCircle Diameter: ${circleDiameter.toFixed(
    2
  )}`;
  text(infoText, 10, height - 50);
}
