class Enemy extends MovEntity
{
  constructor (pos, tex, siz, speed, health)
  {
    super(pos, tex, siz, speed);

    this.health = health;

    this.currentRoad;
    this.newOrigin;
    this.direction;
    this.prevDirection;

    this.direction = track.getEntity(this.position).direction;
    this.newOrigin = this.position;
  }

  move()
  {
    this.position.x += this.speed * this.direction.x;
    this.position.y += this.speed * this.direction.y;
    this.prevDirection = createVector(this.direction.x, this.direction.y);
    this.direction = track.getEntity(this.newOrigin).direction;

    if (this.prevDirection.x != this.direction.x || this.prevDirection.y != this.direction.y) {
      this.position.x = Math.round(this.position.x / this.size.x) * this.size.x;
      this.position.y = Math.round(this.position.y / this.size.y) * this.size.y;
    }

    if(this.direction.x === -1) { //<
      this.newOrigin = createVector(this.position.x + this.size.x - 1, this.position.y)
    }
    else if (this.direction.x === 1) {//>
      this.newOrigin = createVector(this.position.x, this.position.y)
    }
    else if (this.direction.y === 1) {//v
      this.newOrigin = createVector(this.position.x , this.position.y)
    }
    else if (this.direction.y === -1) {//^
      this.newOrigin = createVector(this.position.x , this.position.y + this.size.y - 1)
    }
  }
}
