class Entity {
  constructor(pos, tex) {
    this.position = pos;
    this.texture = tex;
  }

  draw(bw, bh) {
    try {
      image(this.texture, this.position.x, this.position.y, bw, bh)
    } catch (e) {
      fill('red');
      rect(this.position.x, this.position.y, bw, bh);
    }
  }
}

class MovEntity extends Entity {
  constructor(pos, tex, speed) {
    super(pos, tex);

    this.speed = speed;
  }
}
