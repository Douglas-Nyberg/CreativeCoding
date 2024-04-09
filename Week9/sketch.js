let x1, y1, x2, y2, xSpeed1, ySpeed1, xSpeed2, ySpeed2, x3, y3, xySpeed3;
let titleSize, titleSizeDir, namePhase, nameX, nameY, headSize, headSizeDir;
let color1, color2, color3;


function setup() {
    createCanvas(800, 800);
    // Initialize positions, speeds, and colors
    x1 = 100; y1 = 50;
    x2 = 400; y2 = 550;
    x3 = width / 2; y3 = height / 2;
    xSpeed1 = random(1, 3); ySpeed1 = random(1, 3);
    xSpeed2 = random(1, 3); ySpeed2 = random(1, 3);
    xySpeed3 = random(1, 3);
    titleSize = 22; titleSizeDir = 1;
    namePhase = 0; nameX = 50; nameY = 750;
    headSize = 150; headSizeDir = 1;
    // Initialize colors
    color1 = [255, 0, 0];
    color2 = [0, 255, 0];
    color3 = [0, 0, 255];
  }

function draw() {
  background(120, 45, 78);

  // Title animation
  textSize(titleSize);
  titleSize += titleSizeDir;
  if (titleSize > 32 || titleSize < 22) titleSizeDir *= -1; // Reverse direction
  text("Hello World!", 10, 30);
  
  // Name moving in a square pattern, adjusted for canvas bounds
  textSize(22);
  text("Douglas Nyberg", nameX, nameY);
  switch (namePhase) {
    case 0: nameX += 2; if (nameX > 700) namePhase = 1; break; // Move right
    case 1: nameY -= 2; if (nameY < 30) namePhase = 2; break; // Move up
    case 2: nameX -= 2; if (nameX < 50) namePhase = 3; break; // Move left
    case 3: nameY += 2; if (nameY > 750) namePhase = 0; break; // Move down
  }

  // Dynamic elements like shapes and head size
  animateShapes();

  // Static self-portrait components
  drawStaticPortraitComponents();
}

function animateShapes() {
  // Head size animation
  fill(255, 204, 0);
  ellipse(250, 150, headSize, headSize * 1.2); // Dynamic head size
  headSize += headSizeDir;
  if (headSize > 180 || headSize < 120) headSizeDir *= -1; // Reverse direction

  // Shape 1 (X-axis movement) with color change
  fill(color1);
  ellipse(x1, y1, 20, 20);
  x1 += xSpeed1;
  if (x1 > width || x1 < 0) {
    xSpeed1 *= -1;
    color1 = [random(255), random(255), random(255)];
  }

  // Shape 2 (Y-axis movement) with color change
  fill(color2);
  ellipse(x2, y2, 20, 20);
  y2 += ySpeed2;
  if (y2 > height || y2 < 0) {
    ySpeed2 *= -1;
    color2 = [random(255), random(255), random(255)];
  }

 // Diagonal movement shape with color change
 fill(color3);
 ellipse(x3, y3, 30, 30);
 x3 += xySpeed3;
 y3 += xySpeed3;
 if (x3 > width || x3 < 0 || y3 > height || y3 < 0) {
   xySpeed3 *= -1;
   color3 = [random(255), random(255), random(255)];
 }
}

function drawStaticPortraitComponents() {
  // Eyes, nose, mouth, and additional details
  fill(255);
  ellipse(220, 140, 30, 40); // Left eye
  ellipse(280, 140, 30, 40); // Right eye
  fill(0);
  ellipse(220, 140, 15, 20); // Left pupil
  ellipse(280, 140, 15, 20); // Right pupil

  fill(255, 204, 0);
  triangle(250, 150, 235, 170, 265, 170); // Nose

  fill(255, 0, 0);
  arc(250, 190, 70, 50, 0, PI); // Smile

  // Hair
  fill(0);
  beginShape();
  vertex(170, 80); // Adjusted for dynamic head movement
  bezierVertex(170, 80, 230, 30, 250, 60);
  bezierVertex(250, 60, 270, 30, 330, 80);
  endShape(CLOSE);

  // Body, arms, legs, feet...
  fill(10, 24, 120);
  rect(190, 230, 120, 200); // Body
  rect(310, 230, 20, 120); // Right arm
  rect(170, 230, 20, 120); // Left arm
  fill(255, 204, 0);
  ellipse(150, 350, 30, 20); // Left hand
  ellipse(350, 350, 30, 20); // Right hand
  fill(10, 24, 120);
  rect(210, 430, 30, 120); // Left leg
  rect(260, 430, 30, 120); // Right leg
  fill(50, 50, 50);
  ellipse(225, 550, 40, 20); // Left foot
  ellipse(275, 550, 40, 20); // Right foot

  // Any additional static elements can be added here
}
