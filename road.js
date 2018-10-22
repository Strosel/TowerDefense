class Road extends Entity {
  constructor(pos, tex, dir) {
    super(pos, tex);

    this.direction = dir;
  }

  draw(bw, bh) {
    try {
      if (this.direction.x === 1 && this.direction.y === 0) {
        fill('green');
        rect(this.position.x, this.position.y, bw, bh);
      }else if (this.direction.x === -1 && this.direction.y === 0) {
        fill('yellow');
        rect(this.position.x, this.position.y, bw, bh);
      }else if (this.direction.x === 0 && this.direction.y === 1) {
        fill('orange');
        rect(this.position.x, this.position.y, bw, bh);
      }else if (this.direction.x === 0 && this.direction.y === -1) {
        fill('pink');
        rect(this.position.x, this.position.y, bw, bh);
      }
      // image(this.texture, this.position.x, this.position.y, bw, bh)
    } catch (e) {
      fill('red');
      rect(this.position.x, this.position.y, bw, bh);
    }
  }
}

class StartPoint extends Road {
  constructor(pos, tex, dir) {
    super(pos, tex, dir);
  }

  draw(bw, bh) {
    try {
      fill('brown');
      rect(this.position.x, this.position.y, bw, bh);
      // image(this.texture, this.position.x, this.position.y, bw, bh)
    } catch (e) {
      fill('red');
      rect(this.position.x, this.position.y, bw, bh);
    }
  }
}
