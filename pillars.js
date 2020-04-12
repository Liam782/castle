class Pillar{
    constructor(x,y,width,height){
        var pillar_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,pillar_options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        strokeWeight(2);
        stroke("black");
        fill("grey");
        rect(pos.x,pos.y,this.width,this.height);
    }
}