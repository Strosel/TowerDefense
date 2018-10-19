let width = 500;
let height = 500;
let track;

function setup() {
  createCanvas(width+1, height+1); // +1 to have space for all lines
  frameRate(1);
  track = new Track(width, height, 10, 10);
  noLoop();
}

function update() {

}

function draw() {
  update();

  track.Draw();
}
