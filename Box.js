class BOX {
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 30,50);
        this.width = 30;
        this.height = 50;
        this.visibility = 255; 
        this.image = loadImage("download.png");
        World.add(world,this.body);   
    }
    display (){
        if(this.body.speed < 3){
            var pos =this.body.position;
            imageMode(CENTER);
            fill("green");
            image(this.image,pos.x,pos.y, this.width, this.height);
            pop();
        }
           else{
             World.remove(world, this.body);
             push();
             this.visiblity = this.visiblity - 5;
             tint(255,this.visiblity);
             image(this.image,pos.x,pos.y,this.width, this.height);
             pop();
           }
    }
}