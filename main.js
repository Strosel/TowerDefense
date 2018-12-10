let width = 500;
let height = 500;
let track;
let map;
let button;
let placeTower = false;
let spritesheet;
let sprite;
let mouseState = false;
let prevMouseState = false;
let towers = [];


function preload() {
  map = loadStrings("./assets/track.txt");
  spritesheet = loadImage('tower.png');
}

function setup() {
  createCanvas(width+1, height+1); // +1 to have space for all lines
  frameRate(30);
  track = new Track(width, height, map);
  button = createButton('test');
  button.mousePressed(()=>{placeTower = true;});

  sprite = spritesheet.get(0, 68, 68, 68)

  //noLoop();
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
