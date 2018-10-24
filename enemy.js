class Enemy extends MovEntity {
  constructor (pos, tex, siz, speed, health) {
    super(pos, tex, siz, speed);
    this.health = health;

    this.origin = createVector(pos.x + size.x / 2, pos.y + size.y / 2);
    this.top = createVector(pos.x + size.x / 2, pos.y);
    this.right = createVector(pos.x + size.x, pos.y + size.y / 2);
    this.bottom = createVector(pos.x + size.x / 2, pos.y + size.y);
    this.left = createVector(pos.x, pos.y + size.y / 2);
  }

  move() {
    var currentRoad = track.getEntity(this.position);
    this.position.x += this.speed * currentRoad.direction.x;
    this.position.y += this.speed * currentRoad.direction.y;
  }
}
