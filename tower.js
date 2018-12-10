class Tower extends Entity {

  constructor(pos, tex, siz) {
    super(pos, tex, siz);
    this.radius = 500;
    this.cost = 10;
    this.firerate = 0;
    this.damage = 1;
    this.color = 'blue';
  }
}
