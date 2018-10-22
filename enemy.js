function Enemy (pos, tex, speed, health) {
  MovEntity.call(this, pos, tex, speed);
  this.health = health;

  this.move = function(){
    pos = pos.add(speed);
  }
}
