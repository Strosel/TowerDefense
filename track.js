class Track {
  constructor(w, h, map) {
    this.width = w;
    this.height = h;
    this.grid = Track.parseMap(map, w, h);
    this.x = this.grid.length;
    this.y = this.grid[0].length;
    this.blockWidth = w / this.x;
    this.blockHeight = h / this.y;
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

    for (let x = 0; x < map.length; x++) {
      for (let y = 0; y < map[0].length; y++) {
        if (map[x][y] === "X"){
          map[x][y] = new Entity(createVector(blockWidth*x,blockHeight*y), "space");
        }
        if (map[x][y] === "S" || map[x][y] === "<" || map[x][y] === ">" || map[x][y] === "V" || map[x][y] === "^"){
          map[x][y] = new Entity(createVector(blockWidth*x,blockHeight*y), "road");
        }
      }
    }

    return map;
  }
}
