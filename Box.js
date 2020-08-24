class BOX {
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 30,50);
        this.width = 30;
        this.height = 50;
        this.visibility = 255; 
        World.add(world,this.body);   
    }
    display (){
        if(this.body.speed < 3){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("green");
            rect(0,0, this.width, this.height);
            pop();
        }
           else{
             World.remove(world, this.body);
             push();
             this.visiblity = this.visiblity - 5;
             tint(255,this.visiblity);
             rect(0,0, this.width, this.height);
             pop();
           }
    }
}