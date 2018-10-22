class Track { 
  constructor(w, h, x, y) {
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y
    this.blockWidth = w / x;
    this.blockHeight = h / y;
    this.grid = [];

    for (let xx = 0; xx < x; xx++) {
      this.grid.push([]);
      for (let yy = 0; yy < y; yy++) {
        this.grid[xx].push(new Entity(createVector(this.blockWidth*xx,this.blockHeight*yy), 0));
      }
    }
  }

  draw() {
    for (let x = 0; x < this.x; x++) {
      for (let y = 0; y < this.y; y++) {
        currEntity = this.grid[x][y];
        rect(currEntity.position.x, currEntity.position.y, this.blockWidth, this.blockHeight);
      }
    }
  }
}
