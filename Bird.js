class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.path =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var pos=[this.body.position.x,this.body.position.y];
      this.path.push(pos);
    }
    for(var A=0;A<this.path.length;A++){
      image(this.smoke,this.path[A][0],this.path[A][1])
    }
  }
}
