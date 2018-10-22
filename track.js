function Track (w, h, map) {
  this.width = w;
  this.height = h;

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

  this.grid = map;
  this.x = map.length;
  this.y = map[0].length;
  this.blockWidth = w / this.x;
  this.blockHeight = h / this.y;

  for (let x = 0; x < this.grid.length; x++) {
    for (let y = 0; y < this.grid[0].length; y++) {
      if (this.grid[x][y] === "X"){
        this.grid[x][y] = new Entity(createVector(this.blockWidth*x,this.blockHeight*y), "space");
      }
      if (this.grid[x][y] === "S" || this.grid[x][y] === "<" || this.grid[x][y] === ">" || this.grid[x][y] === "V" || this.grid[x][y] === "^"){
        this.grid[x][y] = new Entity(createVector(this.blockWidth*x,this.blockHeight*y), "road");
      }
    }
  }

  this.draw = function() {
    for (let x = 0; x < this.grid.length; x++) {
      for (let y = 0; y < this.grid[0].length; y++) {
        this.grid[x][y].draw(this.blockWidth, this.blockHeight);
      }
    }
  }
}
