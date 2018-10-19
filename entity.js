function Entity(pos, tex) {
  this.position = pos;
  this.texture = tex;
}

function MovEntity(pos, tex, speed) {
  Entity.call(this, pos, tex);

  this.speed = speed;
}
