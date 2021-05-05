
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer1;
var planeObj;
var stoneObj;
var rubberObj;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer1= new Hammer(10,100);
planeObj= new Plane(600,height,1200,20);
stoneObj=new Stone(720,300,100,100);
rubberObj=new Rubber(680,200,70);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
hammer1.display();
planeObj.display();
stoneObj.display();
rubberObj.display();


  drawSprites();
 
}



