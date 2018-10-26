class Enemy extends MovEntity {
  constructor (pos, tex, siz, speed, health) {
    super(pos, tex, siz, speed);
    this.health = health;
  }

  move() {
    this.position = position.add(speed);
  }
}
