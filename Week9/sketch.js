function setup() {
    createCanvas(500, 600);
}

function draw() {
    background(120, 45, 78);
    textSize(22);
    text("Hello World!", 10, 80);

    // Improved head with more human proportions
    fill(255, 204, 0);
    ellipse(250, 150, 150, 180); // Slightly less elongated

    // More expressive eyes
    fill(255);
    ellipse(220, 140, 30, 40); // Bigger and more oval
    ellipse(280, 140, 30, 40);
    fill(0);
    ellipse(220, 140, 15, 20); // Larger pupils for expression
    ellipse(280, 140, 15, 20);

    // Refined nose
    fill(255, 204, 0);
    triangle(250, 150, 235, 170, 265, 170); // Adjusted for a more natural size

    // Smiling mouth
    fill(255, 0, 0);
    arc(250, 190, 70, 50, 0, PI); // Wider smile

    // Textured hair
    fill(0);
    beginShape();
    vertex(170, 100);
    bezierVertex(170, 100, 230, 50, 250, 80);
    bezierVertex(250, 80, 270, 50, 330, 100);
    endShape();

    // Textured hair moved up
    fill(0);
    beginShape();
    vertex(170, 80); // Moved up by 20 pixels
    bezierVertex(170, 80, 230, 30, 250, 60); // Adjusted control points up
    bezierVertex(250, 60, 270, 30, 330, 80); // Adjusted control points up
    endShape();


    // Body with improved proportions
    fill(10, 24, 120);
    rect(190, 230, 120, 200); // Slightly wider for natural proportion

    // Decorative belt
    fill(255, 100, 0);
    rect(190, 320, 120, 10);

    // Arms with hands
    fill(10, 24, 120);
    // Right arm
    rect(310, 230, 20, 120);
    // Left arm
    rect(170, 230, 20, 120);
    // Hands
    fill(255, 204, 0);
    ellipse(150, 350, 30, 20);
    ellipse(350, 350, 30, 20);

    // Legs with improved proportions
    fill(10, 24, 120);
    // Left leg
    rect(210, 430, 30, 120);
    // Right leg
    rect(260, 430, 30, 120);

    // Feet
    fill(50, 50, 50);
    ellipse(225, 550, 40, 20); // Left foot
    ellipse(275, 550, 40, 20); // Right foot

    // Name
    fill(120);
    textSize(22);
    text("Douglas Nyberg", 270, 580); // Adjusted position
}
