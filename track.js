class Track {
  constructor(w, h, map) {
    this.width = w;
    this.height = h;
    this.grid = Track.parseMap(map, w, h);
    this.x = this.grid.length;
    this.y = this.grid[0].length;
    this.blockWidth = w / this.x;
    this.blockHeight = h / this.y;

    this.entitySize = createVector(this.blockWidth, this.blockHeight);
  }

  draw() {
    for (let x = 0; x < this.x; x++) {
      for (let y = 0; y < this.y; y++) {
        this.grid[x][y].draw(this.blockWidth, this.blockHeight);
      }
    }
  }

  static parseMap(map, w, h) {
    for (let i = 0; i < map.length; i++) {
      if (map[i].length <= 1) {
        map.pop(i);
        continue;
      }
      map[i] = map[i].split(" ");
      if (i > 0) {
        if (map[i].length > map[0].length) {
          for (let q = 0; q < map[i].length - map[0].length + 2; q++) {
            map[i].pop();
          }
        }else if (map[i].length < map[0].length) {
          for (let q = 0; q < map[0].length - map[i].length + 1; q++) {
            map[i].push("X");
          }
        }
      }
    }
    map = transpose(map)

    let blockWidth = w / map.length;
    let blockHeight = h / map[0].length;
    let entitySize = createVector(blockWidth, blockHeight);

    for (let x = 0; x < map.length; x++) {
      for (let y = 0; y < map[0].length; y++) {
        if (map[x][y] === "L"){
          map[x][y] = new StartPoint(createVector(blockWidth*x,blockHeight*y), "StartRoad", entitySize, createVector(-1, 0));
        }else if (map[x][y] === "R"){
          map[x][y] = new StartPoint(createVector(blockWidth*x,blockHeight*y), "StartRoad", entitySize, createVector(1, 0));
        }else if (map[x][y] === "D"){
          map[x][y] = new StartPoint(createVector(blockWidth*x,blockHeight*y), "StartRoad", entitySize, createVector(0, 1));
        }else if (map[x][y] === "U"){
          map[x][y] = new StartPoint(createVector(blockWidth*x,blockHeight*y), "StartRoad", entitySize, createVector(0, -1));
        }
      }
    }

    for (let x = 0; x < map.length; x++) {
      for (let y = 0; y < map[0].length; y++) {
        if (map[x][y] === "X"){
          map[x][y] = new Entity(createVector(blockWidth*x,blockHeight*y), "space");
        }else if (map[x][y] === "<"){
          map[x][y] = new Road(createVector(blockWidth*x,blockHeight*y), "road", createVector(-1, 0));
        }else if (map[x][y] === ">"){
          map[x][y] = new Road(createVector(blockWidth*x,blockHeight*y), "road", createVector(1, 0));
        }else if (map[x][y] === "V"){
          map[x][y] = new Road(createVector(blockWidth*x,blockHeight*y), "road", createVector(0, 1));
        }else if (map[x][y] === "^"){
          map[x][y] = new Road(createVector(blockWidth*x,blockHeight*y), "road", createVector(0, -1));
        }else if (typeof map[x][y] === 'string') {
          map[x][y] = new Entity(createVector(blockWidth*x,blockHeight*y), "undefined");
          console.warn(`undefined entity in map at (${x};${y})`);
        }
      }
    }

    return map;
  }

  gridPos(x, y) {
    if (x instanceof p5.Vector){
      return createVector(Math.floor(x.x / this.blockWidth), Math.floor(x.y / this.blockHeight));
    }
    return createVector(Math.floor(x / this.blockWidth), Math.floor(y / this.blockHeight));
  }

  getEntity(x, y) {
    let pos = this.gridPos(x, y);
    return this.grid[pos.x][pos.y]
  }

  getStart() {
    for (let x = 0; x < this.grid.length; x++) {
      for (let y = 0; y < this.grid[0].length; y++) {
        if (this.grid[x][y] instanceof StartPoint){
          return this.grid[x][y];
        }
      }
    }
  }
}

function transpose(a) {
  // https://stackoverflow.com/a/13241545
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}
