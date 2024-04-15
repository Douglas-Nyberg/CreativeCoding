// Define player and movement keys
let playerX = 100;
let playerY = 100;
const playerSpeed = 10;
const w = 87; 
const s = 83;
const a = 65;
const d = 68;

// Define shapes (obstacles)
let shapes = [];
let shapeSpeeds = [];
const numShapes = 5;

// Define mouse-clicked shape
let mouseShapeX = -50;
let mouseShapeY = -50;

function setup() {
    createCanvas(500, 600);
    for (let i = 0; i < numShapes; i++) {
        shapes.push(createVector(random(width), random(height)));
        shapeSpeeds.push(createVector(random(-5, 5), random(-5, 5)));
    }
}

function draw() {
    background(120, 45, 78);
    createBorders(10);

    // Display and move player
    fill(23, 40, 123);
    circle(playerX, playerY, 25);
    handlePlayerMovement();

    // Move and display shapes
    fill(13, 145, 14);
    for (let i = 0; i < shapes.length; i++) {
        circle(shapes[i].x, shapes[i].y, 20);
        shapes[i].add(shapeSpeeds[i]);
        wrapAround(shapes[i]);
    }

    // Display exit
    fill(0);
    textSize(16);
    text("EXIT", width - 50, height - 30);

    // Check if player reaches exit
    if (playerX > width - 50 && playerY > height - 50) {
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2);
        noLoop(); // Stop drawing
    }

    // Draw mouse-clicked shape
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function handlePlayerMovement() {
    if (keyIsDown(w)) {
        playerY -= playerSpeed;
    }
    if (keyIsDown(s)) {
        playerY += playerSpeed;
    }
    if (keyIsDown(a)) {
        playerX -= playerSpeed;
    }
    if (keyIsDown(d)) {
        playerX += playerSpeed;
    }
}

function wrapAround(shape) {
    if (shape.x > width) {
        shape.x = 0;
    } else if (shape.x < 0) {
        shape.x = width;
    }
    if (shape.y > height) {
        shape.y = 0;
    } else if (shape.y < 0) {
        shape.y = height;
    }
}

function createBorders(thickness) {
    noFill();
    stroke(0);
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
