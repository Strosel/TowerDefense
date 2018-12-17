class Tower extends Entity {

  constructor(pos, tex, siz, rad, firerate, damage) {
    super(pos, tex, siz);
    this.radius = rad;
    //this.cost = 10;
    this.firerate = firerate;
    this.damage = damage;
    this.color = 'blue';
    this.target = createVector(0,0);
    }



    fire(enemy){
      this.target = enemy.position.copy();
      if (frameCount % this.firerate == 0){
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

        enemy.health -= this.damage;
        money += 10;
      }

  //  me: pls dont fire if enemy is not in radius
  //  p5: wierd flex but ok
    }
    draw(){
      push();
      imageMode(CENTER)
      translate(this.position.copy().add(this.size.copy().mult(0.5)));
      var a = atan2(this.target.y - this.position.y, this.target.x - this.position.x);
      rotate(a+90);
      image(this.texture, 0, 0, this.size.x, this.size.y);
      pop();
    }
}
