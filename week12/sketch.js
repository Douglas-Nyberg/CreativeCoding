// Player attributes
let playerX = 100;
let playerY = 100;
const playerSpeed = 10;

// Key codes for movement
const w = 87; 
const s = 83;
const a = 65;
const d = 68;

// Shapes (obstacles) attributes
let shapes = [];
let shapeSpeeds = [];
const numShapes = 5;

// Mouse-clicked shape attributes
let mouseShapeX = -50;
let mouseShapeY = -50;

function setup() {
    createCanvas(500, 600);
    initializeShapes(numShapes);
}

function draw() {
    background(120, 45, 78);
    createBorders(10);
    drawPlayer();
    movePlayer();
    drawAndMoveShapes();
    displayExit();
    drawMouseShape();
    checkExitCondition();
}

function initializeShapes(num) {
    for (let i = 0; i < num; i++) {
        shapes.push(createVector(random(width), random(height)));
        shapeSpeeds.push(createVector(random(-5, 5), random(-5, 5)));
    }
}

function createPlayer(x, y) {
    playerX = x;
    playerY = y;
}

function drawPlayer() {
    fill(23, 40, 123);
    circle(playerX, playerY, 25);
}

function movePlayer() {
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

function drawAndMoveShapes() {
    for (let i = 0; i < shapes.length; i++) {
        fill(random(255), random(255), random(255)); // Random color for each shape
        circle(shapes[i].x, shapes[i].y, random(10, 30)); // Random size for each shape
        shapes[i].add(shapeSpeeds[i]);
        wrapAround(shapes[i]);
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

function displayExit() {
    fill(0);
    textSize(16);
    text("EXIT", width - 50, height - 30);
}

function drawMouseShape() {
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function checkExitCondition() {
    if (playerX > width - 50 && playerY > height - 50) {
        displayWinMessage();
    }
}

function displayWinMessage() {
    fill(0);
    textSize(26);
    text("You Win!", width / 2 - 50, height / 2);
    noLoop(); // Stop the drawing loop
}
