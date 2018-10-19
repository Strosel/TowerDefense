function Entity(pos, tex) {
  this.Position = pos;
  this.Texture = tex;
}

function MovEntity(pos, tex, speed) {
  Entity.call(this, pos, tex);

  this.Speed = speed;
}
