
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var balls;
var l1,l2,l3,dimage;
var ground;
var paper,pimage;


/*function preload(){
  dimage=loadImage("d.png")
  pimage=loadImage("cp.png")
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
    ground = new Ground(width/2, 670, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

    l1=new Dustbin(650,570,200,200);
  /*  l2=new Dustbin(550,610,20,100);
    l3=new Dustbin(750,610,20,100);*/
    paper=new Paper(100,640,80);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);


 l1.display();
 //l2.display();
 //l3.display();

 paper.display();
 ground.display();

 
 //drawSprites();

    
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:285,y:-210})
  }

}


