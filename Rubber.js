class Rubber{
    constructor(x,y,radius){
     var options={
      restitution:0.3,
      friction:5,
      density:1

     }
     this.body = Bodies.circle(x, y, radius-20/2, options);
     this.radius = radius;
     World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        strokeWeight(3);
        stroke("green");
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);        
        pop();

    }
}