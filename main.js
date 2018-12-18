let width = 500;
let height = 500;
let track;
let map;
let textures = {
  roads: {},
  towers: {}
};
let placeTower = {
  drawTmp: false,
  cost: 0,
  sprite: null,
  radius: 0,
  firerate: 0,
  damage: 0
};
let t1button;
let t2button;
let t3button;
let mouseState = false;
let prevMouseState = false;
let towers = [];
let enemies = [];
let enemy;
let health, healthP;
let money, moneyP;
let startBttn;
let gameState = 0;

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

  startBttn = createButton('Start game');
  startBttn.mousePressed(() => {
    frameCount = 0;

    t1button = createButton('Tower ;100$');
    t1button.mousePressed(function () {
      placeTower = {
        drawTmp: true,
        cost: 100,
        sprite: textures.towers.spritesheet.get(0, 0, 68, 68),
        radius: 400,
        firerate: 15,
        damage: 1
      }
    });

    t2button = createButton('Tower ;250$');
    t2button.mousePressed(function () {
      placeTower = {
        drawTmp: true,
        cost: 250,
        sprite: textures.towers.spritesheet.get(0, 68, 68, 68),
        radius: 150,
        firerate: 60,
        damage: 3
      }
    });

    t3button = createButton('Tower ;500$');
    t3button.mousePressed(function () {
      placeTower = {
        drawTmp: true,
        cost: 500,
        sprite: textures.towers.spritesheet.get(136, 136, 68, 68),
        radius: 800,
        firerate: 10,
        damage: 0.5
      }
    });

    health = 100;
    money = 5000;

    gameState = 1;
    startBttn.hide();
  });

  healthP = createP("<i class='fas fa-heart' style='color: red;'></i> " + health);
  moneyP = createP("<i class='fas fa-dollar-sign' style='color: green;'></i> " + money);
}



function drawTower() {
  push();
  if (money >= placeTower.cost) {
    fill(204, 101, 192, 25);
    stroke(127, 63, 120);
  }
  else {
    fill(255, 0, 0, 25);
    stroke(255, 0, 0);
  }
  ellipse(mouseX, mouseY, placeTower.radius, placeTower.radius);
  pop();
  image(placeTower.sprite, mouseX - 34, mouseY - 34, 68, 68);
}

function addTower() {
  if (money >= placeTower.cost) {
    track.placeTower(mouseX, mouseY, placeTower.sprite, placeTower.radius, placeTower.firerate, placeTower.damage);
    money -= placeTower.cost
  }
}


function update() {
  mouseState = mouseIsPressed;
  if (mouseState == true && prevMouseState == false && mouseX < 500 && placeTower.drawTmp == true) {
    addTower();
    placeTower.drawTmp = false;
  }

  if (frameCount % 85 == 0) {
    enemy = new Enemy(track.getStart().position.copy(), null, track.entitySize, 5, 3);
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
  if (gameState == 0) {
    background(125, 200, 125);
    textSize(32);
    textAlign(CENTER);
    text('TE4', width / 2, height / 3);
    text('Tower defense', width / 2, height / 3 + 32);
  }
  else if (gameState == 1) {
    update();

    background(255, 0, 0);
    track.draw();
    for (x of track.grid) {
      for (e of x) {
        if (e instanceof Tower) {
          for (enemy of enemies) {
            var d = dist(e.position.x, e.position.y, enemy.position.x, enemy.position.y);
            if (d < 34 + e.radius * 0.5) {
              e.fire(enemy);
              break;
            }
          }
        }
      }
      if (placeTower.drawTmp) { drawTower() }
      for (e of enemies) {
        if (e.health > 0) {
          e.draw();
        }
      }
    }

    healthP.html("<i class='fas fa-heart' style='color: red;'></i> " + health);
    moneyP.html("<i class='fas fa-dollar-sign' style='color: green;'></i> " + money);

    if (health <= 0) {
      gameState = 2;
      startBttn.show();
    }
  }
  else if (gameState == 2) {
    fill(0);
    background(250, 100, 100);
    textSize(32);
    textAlign(CENTER);
    text('You Lost', width / 2, height / 3);
    text('Play Again?', width / 2, height / 3 + 32);
  }

}
