var bg, bgimg;
var iss, issimg;
var spaceCraft, spaceCraftimg;
var spaceLeft, spaceRight, spaceDown;
var hasDocked;

function preload() {
  bgimg = loadImage("spacebg.jpg");
  issimg = loadImage("iss.png");
  spaceCraftimg = loadImage("spacecraft1.png");
  spaceLeft = loadImage("spacecraft3.png");
  spaceRight = loadImage("spacecraft4.png");
  spaceDown = loadImage("spacecraft2.png");
}

function setup() {
  createCanvas(600, 400);

  hasDocked = false;
  
  bg = createSprite(400, 200, 800, 800);
  bg.addImage(bgimg);
  bg.scale = 3;

  spaceCraft = createSprite(285, 360);
  spaceCraft.addImage(spaceCraftimg);
  spaceCraft.scale = 0.15;

  iss = createSprite(300, 150, 50, 50);
  iss.addImage(issimg);
  iss.scale = 0.6;
}

function draw() {
  background(255, 255, 255);
  
  if (!hasDocked) {
    if (keyDown("LEFT_ARROW")) {
      spaceCraft.addImage(spaceLeft);
      spaceCraft.x = spaceCraft.x - 5;
    }

    if (keyDown("RIGHT_ARROW")) {
      spaceCraft.addImage(spaceRight);
      spaceCraft.x = spaceCraft.x + 5;
    }

    if (keyDown("DOWN_ARROW")) {
      spaceCraft.addImage(spaceDown);
    }

    if (keyDown("UP_ARROW")) {
      spaceCraft.y = spaceCraft.y - 5;
    }
  }

  if (spaceCraft.y <= iss.y + 70 && spaceCraft.x <= iss.x - 10) {
    hasDocked = true;
    fill(255);
    stroke(20);
    text("Docking Successful!!",400,150);
  }
  
  drawSprites();
}