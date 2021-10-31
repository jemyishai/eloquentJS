class Vec {
  	constructor(x,y){
    this.x = x;
    this.y = y;
    }

  get length (){
  	return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }
}

Vec.prototype.plus = function (newVec) { return new Vec(this.x+newVec.x,this.y+newVec.y)}

Vec.prototype.minus = function (newVec) { return new Vec(this.x-newVec.x,this.y-newVec.y)}
