function Entity(pos, tex) {
  this.position = pos;
  this.texture = tex;

  this.draw = (bw, bh) => {
    try {
      image(this.texture, this.position.x, this.position.y, bw, bh)
    } catch (e) {
      fill('red');
      rect(this.position.x, this.position.y, bw, bh);
    }
  }
}

function MovEntity(pos, tex, speed) {
  Entity.call(this, pos, tex);

  this.speed = speed;
}
