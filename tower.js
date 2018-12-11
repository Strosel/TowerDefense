class Tower extends Entity {

  constructor(pos, tex, siz) {
    super(pos, tex, siz);
    this.radius = 500;
    this.cost = 10;
    this.firerate = 0;
    this.damage = 1;
    this.color = 'blue';
    this.enemy = createVector(0,0);
    }

    fire(enemy){
      this.enemy = enemy.position.copy();
      if (frameCount % 15 == 0){
        push();

        strokeWeight(7)
        stroke(255,255,255);
        line(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2, enemy.position.x + enemy.size.x / 2, enemy.position.y + enemy.size.y / 2);

        strokeWeight(5)
        stroke(255, 0, 0);
        line(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2, enemy.position.x + enemy.size.x / 2, enemy.position.y + enemy.size.y / 2);

        strokeWeight(1)
        stroke(240, 240, 240);
        line(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2, enemy.position.x + enemy.size.x / 2, enemy.position.y + enemy.size.y / 2);

        pop();
      }

    }
    draw(){
      push();
      imageMode(CENTER)
      translate(this.position.copy().add(this.size.copy().mult(0.5)));
      var a = atan2(this.enemy.y - this.position.y, this.enemy.x - this.position.x);
      rotate(a+90);
      image(this.texture, 0, 0, this.size.x, this.size.y);
      pop();
    }
}
