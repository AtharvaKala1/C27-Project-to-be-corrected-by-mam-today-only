const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create a Roof
	roof = new Roof(400,50,450,50);

	bobDiameter=75;

	bobObject1 = new Bob(400,550,bobDiameter);
	bobObject2 = new Bob(325,550,bobDiameter);
	bobObject3 = new Bob(250,550,bobDiameter);
	bobObject4 = new Bob(475,550,bobDiameter);
	bobObject5 = new Bob(550,550,bobDiameter);

	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options:{
			width: 1200,
			height: 700,
			wireframes: false
		}
	});*/

	//creating the ropes
	rope1 = new Rope(bobObject1.body,roof.body,bobDiameter-75,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter,0);
	rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);
  
}


function draw() {
  rectMode(CENTER);
  background("coral");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}


function drawLine(constraint)
{
  bobBodyPosition=constraint.bodyA.position
  roofBodyPosition=constraint.bodyB.position

  roofBodyOffset=constraint.pointB;
  
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}

