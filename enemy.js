function Enemy (pos, tex, speed, health) {
  MovEntity.call(pos, tex, speed);
  this.health = health;

  this.move = function(){
    pos = pos.add(speed);
  }
}
