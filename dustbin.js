class Dustbin extends Base{

    constructor(x,y,width,height){
        super(x,y,width,height)
        var gopt={
            restitution:0.6,
            density:0.5,
            isStatic:0.3
            
        }

        this.body=Bodies.rectangle(x,y,width,height,gopt);
        this.width=width;
        this.height=height;
        this.image = loadImage("sprites/dustbingreen.png")
        World.add(world,this.body);
    }


}