class Paper extends Base{

    constructor(x,y,radius){
        super(x,y,radius,radius)
        var opt={
            restitution:0.6,
            density:0.5,
            friction:0.6,
            isStatic :false
        }

        this.body=Bodies.circle(x,y,radius,opt)
        this.radius=radius
       this.image = loadImage("sprites/paper.png")
        World.add(world,this.body)
    }

}