class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.0
        
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity = 255;

      }
      score() {
        if (this.Visiblity < 0 && this.Visiblity > -105){
          score++;
      }
    }

      display(){
        console.log(this.body.speed);
        if(this.body.speed < 3){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
     //     tint(255,this.Visiblity);
    //      rect(this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
        
      }
}


