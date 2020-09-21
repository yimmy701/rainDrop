// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, triangle, sqrt, resize
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let drop1, drop2, drop3, drop4, img, a, b, h;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  img = loadImage(
    "https://lh3.googleusercontent.com/proxy/sM9LMevqcKlOh-OtlCu653OicXTzhyOKcQZGmbobD3SgqlmCDjCjVxtP2A9FEVx-CEuwBq4MKmTCwOm8GQg2Nt7K"
  );
  //RainDrop arguments are x, y, d, fallSpeed
  drop1 = new RainDrop();
  drop2 = new RainDrop();
  drop3 = new RainDrop();
  drop4 = new RainDrop();
  a = 50;
  b = 100;
  h = height * 0.8
}

function draw() {
  background(0, 0, 95);

  drop1.dropAndShow();
  drop2.dropAndShow();
  drop3.dropAndShow();
  drop4.dropAndShow();
  img.resize(a, b);
  image(img, 0, h);
  image(img, width * 0.05, h);
  image(img, width * 0.1, h);
  image(img, width * 0.15, h);
  image(img, width * 0.2, h);
  image(img, width * 0.25, h);
  image(img, width * 0.3, h);
  image(img, width * 0.35, h);
  image(img, width * 0.4, h);
  image(img, width * 0.45, h);
  image(img, width * 0.5, h);
  image(img, width * 0.55, h);
  image(img, width * 0.6, h);
  image(img, width * 0.65, h);
  image(img, width * 0.7, h);
  image(img, width * 0.75, h);
  image(img, width * 0.8, h);
  image(img, width * 0.85, h);
  image(img, width * 0.9, h);
  image(img, width * 0.95, h);
  
  grow(drop1);
  grow(drop2);
}

class RainDrop {
  //
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.d = random(10, 20);
    this.fallSpeed = random(5, 15);
  }

  show() {
    noStroke();
    fill(60, 80, 80);
    ellipse(this.x, this.y, this.d);
    
    triangle(
      this.x - this.d / (2 * sqrt(2)),
      this.y - this.d / (2 * sqrt(2)),
      this.x,
      this.y - this.d / sqrt(6) - this.d / 2,
      this.x + this.d / (2 * sqrt(2)),
      this.y - this.d / (2 * sqrt(2))
    );
  }

  drip() {
    this.y += this.fallSpeed;
    // If it goes off the screen...
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }

  dropAndShow() {
    this.drip();
    this.show();
  }
  
}

  function grow(drop){
    if (drop.y > height * 0.8 ){
      b += 1.5;
      h -= 1.5;
      if (h < height * 0.2){
        h = height * 0.8;
      }
      
    }
}

