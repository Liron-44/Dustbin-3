class Dustbin{
  constructor(x,y,width, height){
  var options={
    isStatic:true,
    friction:0
  }
  
  this.dustbin = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.dustbin);
  }
  display(){
    fill("red");
    rectMode(CENTER);
    
rect(this.dustbin.position.x, this.dustbin.position.y, this.width, this.height);

  }
}