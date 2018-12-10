let width = 500;
let height = 500;
let track;
let map;
let textures = {
  roads: {}
};
let button;
let placeTower = false;
let sprite;
let mouseState = false;
let prevMouseState = false;
let towers = [];


function preload() {
  map = loadStrings("./assets/track.txt");
  textures.roads.horizontal = loadImage("./assets/horizontal.png");
  textures.roads.vertical = loadImage("./assets/vertical.png");
  textures.roads.lt = loadImage("./assets/lt.png");
  textures.roads.lb = loadImage("./assets/lb.");
  textures.roads.rt = loadImage("./assets/rt.png");
  textures.roads.rb = loadImage("./assets/rb.");
  textures.towers.spritesheet = loadImage('tower.png');
}

function setup() {
  createCanvas(width+1, height+1); // +1 to have space for all lines
  frameRate(30);
  track = new Track(width, height, map);
  track.setRoadTextures();
  
  button = createButton('test');
  button.mousePressed(()=>{placeTower = true;});

  sprite = textures.towers.spritesheet.get(0, 68, 68, 68)
}
function drawTower() {
  image(sprite, mouseX - 34, mouseY - 34, 68 , 68);
}

function addTower(){
  if (mouseIsPressed && placeTower){
    towers.push(new Tower(createVector(mouseX -34, mouseY-34), sprite, createVector(68,68)))
  }
}


function update() {
  addTower();
}

function draw() {
  update();

  track.draw()
  for (t of towers) {
    t.draw()
  }
  if (placeTower){drawTower()}
}
