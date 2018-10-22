class Enemy extends MovEntity {
  constructor (pos, tex, speed, health) {
    super(pos, tex, speed);
    this.health = health;
  }

  move() {
    this.position = position.add(speed);
  }
}
