class Road extends Entity {
  constructor(pos, tex, siz, dir) {
    super(pos, tex, siz);

    this.direction = dir;
  }

  draw() {
    try {
      if (this.direction.x === 1 && this.direction.y === 0) {
        fill('green');
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
      }else if (this.direction.x === -1 && this.direction.y === 0) {
        fill('yellow');
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
      }else if (this.direction.x === 0 && this.direction.y === 1) {
        fill('orange');
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
      }else if (this.direction.x === 0 && this.direction.y === -1) {
        fill('pink');
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
      }
      // image(this.texture, this.position.x, this.position.y, this.size.x, this.size.y)
    } catch (e) {
      fill('red');
      rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
  }
}

class StartPoint extends Road {
  constructor(pos, tex, siz, dir) {
    super(pos, tex, siz, dir);
  }

  draw(bw, bh) {
    try {
      fill('brown');
      rect(this.position.x, this.position.y, this.size.x, this.size.y);
      // image(this.texture, this.position.x, this.position.y, bw, bh)
    } catch (e) {
      fill('red');
      rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
  }
}
