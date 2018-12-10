class Road extends Entity {
  constructor(pos, tex, siz, dir) {
    super(pos, tex, siz);

    this.direction = dir;

    if (this.direction.x === 1 && this.direction.y === 0) {
      this.color = 'green';
    } else if (this.direction.x === -1 && this.direction.y === 0) {
      this.color = 'yellow';
    } else if (this.direction.x === 0 && this.direction.y === 1) {
      this.color = 'orange';
    } else if (this.direction.x === 0 && this.direction.y === -1) {
      this.color = 'pink';
    }
  }
}

class StartPoint extends Road {
  constructor(pos, tex, siz, dir) {
    super(pos, tex, siz, dir);

    this.color = 'brown';
  }
}
