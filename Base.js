class Base{
    constructor(x, y, width, height, angle){
        
       var opt={
           'restitution':0.6,
           'density':0.5

       }
       this.body=Bodies.rectangle(x,y,width,height,opt)
        this.width=width
        this.height=height
        this.image=loadImage("sprites/base.png")
        World.add(world,this.body)
        
    }
    display(){
        var angle=this.body.angle;
          push();
          translate(this.body.position.x,this.body.position.y)
          rotate(angle)
          imageMode(CENTER)
          image(this.image,0,0,this.width,this.height)
          pop();
    }
}