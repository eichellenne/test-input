var input, button, saveImg, c, index;

let phraseCanv;
let myCode = [];
let x = 0;
let y = 0;
let xC = 0;
let x2C = 3
let yC = 0;
let cellSize = 3;
let x2 = cellSize;
let colrect;

function preload() {
  for (let i = 0; i < 26; i++) {
    console.log("loading images" + i);
    myCode[i] = loadImage("images/" + i + ".png");
  }
}

function setup() {
  c = createCanvas(700, 400);
  phraseCanv = createGraphics (30, 30);
  background(0);
  phraseCanv.background(255);

  // myCode = new Array(maps.length)
  input = createInput();
  input.position(width / 2 - input.width / 2, 330);

  button = createButton("submit");
  button.position(input.x, input.y + input.height);
  button.mousePressed(greet);

  saveImg = createButton("save");
  saveImg.position(input.x + button.width, input.y + input.height);
  saveImg.mousePressed(saveMyImg);
}

function draw() {
  if (x >= width) {
    y += 3;
    x = 0;
    x2 = 3;
  }
  if (y >= height) {
    x = width;
    y = height;
  }
  
    if (x2C >= phraseCanv.width) {
    yC += 3;
    xC = 0;
   x2C = 3
  }
  if (yC >=  phraseCanv.height) {
    xC =  phraseCanv.width;
    yC =  phraseCanv.height;
  }

  console.log(input.value());
  image(phraseCanv, input.x + input.width,input.y,25,25)
}

function greet() {
  colrect = color(random(255), random(255), random(255))
  //var name = input.value();
  //text(name, 200, 300);
  letters();
  //input.value("");
  noStroke()
  fill(colrect);
  rect(x2, y, cellSize, cellSize);
  x += 6;
  x2 += 6;
  
  phraseCanv.noStroke();
  phraseCanv.fill(colrect);
  phraseCanv.rect(x2C, yC, cellSize, cellSize);
  xC += 6;
  x2C += 6;

  
  
}

function letters() {
  if (key == "a") {
    image(myCode[0], x, y);
    phraseCanv.image(myCode[0], xC, yC);
  }
  if (key == "b") {
    image(myCode[1], x, y);
    phraseCanv.image(myCode[1], xC, yC);
  }
  if (key == "c") {
    image(myCode[2], x, y);
    phraseCanv.image(myCode[2], xC, yC);
  }
  if (key == "d") {
    image(myCode[3], x, y);
    phraseCanv.image(myCode[3], xC, yC);
  }
  if (key == "e") {
    image(myCode[4], x, y);
    phraseCanv.image(myCode[4], xC, yC);
  }
  if (key == "f") {
    image(myCode[5], x, y);
    phraseCanv.image(myCode[5], xC, yC);
  }
  if (key == "g") {
    image(myCode[6], x, y);
    phraseCanv.image(myCode[6], xC, yC);
  }
  if (key == "h") {
    image(myCode[7], x, y);
    phraseCanv.image(myCode[7], xC, yC);
  }
  if (key == "i") {
    image(myCode[8], x, y);
    phraseCanv.image(myCode[8], xC, yC);
  }
  if (key == "j") {
    image(myCode[9], x, y);
    phraseCanv.image(myCode[9], xC, yC);
  }
  if (key == "k") {
    image(myCode[10], x, y);
    phraseCanv.image(myCode[10], xC, yC);
  }
  if (key == "l") {
    image(myCode[11], x, y);
    phraseCanv.image(myCode[11], xC, yC);
  }
  if (key == "m") {
    image(myCode[12], x, y);
    phraseCanv.image(myCode[12], xC, yC);
  }
  if (key == "n") {
    image(myCode[13], x, y);
    phraseCanv.image(myCode[13], xC, yC);
  }
  if (key == "o") {
    image(myCode[14], x, y);
    phraseCanv.image(myCode[14], xC, yC);
  }
  if (key == "p") {
    image(myCode[15], x, y);
    phraseCanv.image(myCode[15], xC, yC);
  }
  if (key == "q") {
    image(myCode[16], x, y);
    phraseCanv.image(myCode[16], xC, yC);
  }
  if (key == "r") {
    image(myCode[17], x, y);
    phraseCanv.image(myCode[17], xC, yC);
  }
  if (key == "s") {
    image(myCode[18], x, y);
    phraseCanv.image(myCode[18], xC, yC);
  }
  if (key == "t") {
    image(myCode[19], x, y);
    phraseCanv.image(myCode[19], xC, yC);
  }
  if (key == "u") {
    image(myCode[20], x, y);
    phraseCanv.image(myCode[20], xC, yC);
  }
  if (key == "v") {
    image(myCode[21], x, y);
    phraseCanv.image(myCode[21], xC, yC);
  }
  if (key == "w") {
    image(myCode[22], x, y);
    phraseCanv.image(myCode[22], xC, yC);
  }
  if (key == "x") {
    image(myCode[23], x, y);
    phraseCanv.image(myCode[23], xC, yC);
  }
  if (key == "y") {
    image(myCode[24], x, y);
    phraseCanv.image(myCode[24], xC, yC);
  }
  if (key == "z") {
    image(myCode[25], x, y);
    phraseCanv.image(myCode[25], xC, yC);
  }
}

function saveMyImg() {
  saveCanvas(phraseCanv, "myPhrase", "png");
}
