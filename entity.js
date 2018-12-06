class Entity {
  constructor(pos, tex, siz) {
    this.position = pos;
    this.texture = tex;
    this.size = siz;

    this.color = 'red';
  }

  draw() {
    try {
      image(this.texture, this.position.x, this.position.y, this.size.x, this.size.y)
    } catch (e) {
      fill(this.color);
      rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
  }
}

class MovEntity extends Entity {
  constructor(pos, tex, siz, speed) {
    super(pos, tex, siz);

    this.speed = speed;
  }
}
