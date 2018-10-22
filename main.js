let width = 500;
let height = 500;
let track;
let map;

function preload() {
  map = loadStrings("./assets/track.txt");
}

function setup() {
  createCanvas(width+1, height+1); // +1 to have space for all lines
  frameRate(1);
  track = new Track(width, height, map);
  noLoop();
}

function update() {

}

function draw() {
  update();

  track.draw();
}
