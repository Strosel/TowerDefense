let width = 500;
let height = 500;
let track;
let map;


//temporary lets
let enemy;
function preload() {
  map = loadStrings("./assets/track.txt");
}

function setup() {
  createCanvas(width+1, height+1); // +1 to have space for all lines
  frameRate(60);
  track = new Track(width, height, map);

  enemy = new Enemy(track.getStart(), null, track.entitySize, 7, 1)
  // noLoop();
}

function update() {
  enemy.move();
}

function draw() {
  update();
  track.draw();
  enemy.draw();
}
