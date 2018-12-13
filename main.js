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
let enemies = [];
let enemy;
let health, healthP;
let money, moneyP;

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
  button.mousePressed(() => { placeTower = true; });

  health = 100;
  healthP = createP("<i class='fas fa-heart' style='color: red;'></i> " + health);
  money = 100;
  moneyP = createP("<i class='fas fa-dollar-sign' style='color: green;'></i> " + money);



  sprite = textures.towers.spritesheet.get(0, 68, 68, 68)
}

function drawTower() {
  push();
  fill(204, 101, 192, 25);
  stroke(127, 63, 120);
  ellipse(mouseX, mouseY, 400, 400);
  pop();
  image(sprite, mouseX - 34, mouseY - 34, 68, 68);
}

function addTower() {
  track.placeTower(mouseX, mouseY, sprite);
}

function update() {
  mouseState = mouseIsPressed;
  if (mouseState == true && prevMouseState == false && mouseX < 500 && placeTower == true) {
    addTower();
    placeTower = false;
  }
  if (frameCount % 85 == 0) {
    enemy = new Enemy(track.getStart().position.copy(), null, track.entitySize, 10, 1);
    enemies.push(enemy);
  }


  for (var i = 0; i < enemies.length; i++) {
    if (enemies[i].health <= 0) {
      enemies.splice(i, i + 1);
    }
    else {
      enemies[i].move();
    }
  }
  prevMouseState = mouseState;
}

function draw() {
  update();

  background(255, 0, 0);
  track.draw();
  for (x of track.grid) {
    for (e of x) {
      if (e instanceof Tower) {
        for (enemy of enemies) {
          var d = dist(e.position.x, e.position.y, enemy.position.x, enemy.position.y);
          if (d < 34 + 200) {
            e.fire(enemy);
            break;
          }
        }
      }
    }
    if (placeTower) { drawTower() }
    for (e of enemies) {
      if (e.health > 0) {
        e.draw();
      }
    }
  }

  healthP.html("<i class='fas fa-heart' style='color: red;'></i> " + health);
  moneyP.html("<i class='fas fa-dollar-sign' style='color: green;'></i> " + money);
}
