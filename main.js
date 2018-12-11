let width = 500;
let height = 500;
let track;
let map;
let textures = {
  roads: {},
  towers: {}
};
let button;
let placeTower = false;
let sprite;
let mouseState = false;
let prevMouseState = false;
let towers = [];
let enemy;

function preload() {
  map = loadStrings("./assets/track.txt");
  textures.roads.horizontal = loadImage("./assets/horizontal.png");
  textures.roads.vertical = loadImage("./assets/vertical.png");
  textures.roads.lt = loadImage("./assets/lt.png");
  textures.roads.lb = loadImage("./assets/lb.png");
  textures.roads.rt = loadImage("./assets/rt.png");
  textures.roads.rb = loadImage("./assets/rb.png");
  textures.towers.spritesheet = loadImage('./assets/tower.png');
}

function setup() {
  createCanvas(width, height);
  frameRate(30);
  angleMode(DEGREES);
  track = new Track(width, height, map);
  track.setRoadTextures();

  button = createButton('test');
  button.mousePressed(()=>{placeTower = true;});

  sprite = textures.towers.spritesheet.get(0, 68, 68, 68)

  enemy = new Enemy(track.getStart().position.copy(), null, track.entitySize, 3, 1);

}
function drawTower() {
  image(sprite, mouseX - 34, mouseY - 34, 68 , 68);
}

function addTower(){
  track.placeTower(mouseX, mouseY, sprite);
}


function update() {
  mouseState = mouseIsPressed;
  if (mouseState == true && prevMouseState == false && mouseX < 500 && placeTower == true){
      addTower();
      placeTower = false;
  }

  enemy.move()
  prevMouseState = mouseState;
}

function draw() {
  update();

  background(255,0,0);
  track.draw();
  for (x of track.grid) {
    for (e of x) {
      if (e instanceof Tower) {
          e.fire(enemy);
      }
    }
  }
  if (placeTower){drawTower()}
  enemy.draw();
}
