let width = 500;
let height = 500;
let track;
let map;
let textures = {
  roads: {}
};

function preload() {
  map = loadStrings("./assets/track.txt");
  textures.roads.horizontal = loadImage("./assets/horizontal.png");
  textures.roads.vertical = loadImage("./assets/vertical.png");
  textures.roads.lt = loadImage("./assets/lt.png");
  textures.roads.lb = loadImage("./assets/lb.");
  textures.roads.rt = loadImage("./assets/rt.png");
  textures.roads.rb = loadImage("./assets/rb.");
}

function setup() {
  createCanvas(width+1, height+1); // +1 to have space for all lines
  frameRate(1);
  track = new Track(width, height, map);
  track.setRoadTextures();
  noLoop();
}

function update() {

}

function draw() {
  update();

  track.draw();
}
