let catX = 100; // Initial x position of the cat
let catY = 100; // Initial y position of the cat
let ballX;     // Initial x position of the ball
let ballY;     // Initial y position of the ball
let ballSpeedX = 2; // Speed of the ball on the x-axis
let ballSpeedY = 2; // Speed of the ball on the y-axis

function setup() {
  createCanvas(750, 500); // Set the canvas
  ballX = width / 2; // Start the ball at the center of the canvas
  ballY = height / 2;
}

function draw() {
  background(220);
  
  // Draw the ball
  fill(255, 0, 0);
  ellipse(ballX, ballY, 20, 20);
  
  // Draw the cat face
  fill(255, 255, 0);       // Yellow color for the head
  ellipse(catX, catY - 10, 40, 40); // Cat head
  fill(0);
  triangle(catX - 15, catY - 20, catX - 20, catY - 15, catX - 12, catY - 15); // Left ear
  triangle(catX + 25, catY - 20, catX + 30, catY - 15, catX + 22, catY - 15); // Right ear
  
  // Update the ball's position based on mouse movement
  ballX = mouseX;
  ballY = mouseY;
  
  // Make the cat chase the ball
  let dx = ballX - catX;
  let dy = ballY - catY;
  
  // Normalize the vector to get the direction
  let distance = sqrt(dx * dx + dy * dy);
  
  if (distance > 0) {
    catX += dx / distance * 2;
    catY += dy / distance * 2;
  }
  
  // Keep the cat within the canvas
  catX = constrain(catX, 0, width - 40);
  catY = constrain(catY, 0, height - 40);
}

function mouseMoved() {
  // Update the ball's position when the mouse moves
  ballX = mouseX;
  ballY = mouseY;
}