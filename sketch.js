
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.constraint

var stand,block,slingshot,stand2,blocks,polygon,slingshot
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	stand= new Stand(500,500,400,20)
    stand2= new Stand(950,300,260,20)

    block= new Block(500,470,40,40)
     block2= new Block(540,470,40,40)
     block3= new Block(580,470,40,40)
     block4= new Block(620,470,40,40)
     block5= new Block(460,470,40,40)
     block6= new Block(420,470,40,40)
     block7= new Block(380,470,40,40)
     block8= new Block(340,470,40,40) 
     block9= new Block(500,430,40,40)
     block10= new Block(460,430,40,40)
     block11= new Block(420,430,40,40)
     block12= new Block(380,430,40,40)
     block13= new Block(540,430,40,40)
     block14= new Block(580,430,40,40)
     block15= new Block(460,390,40,40)
     block16= new Block(500,390,40,40)
     block17= new Block(480,350,40,40)


     blocks1= new Blocks(1000,270,40,40)
     blocks2= new Blocks(960,270,40,40)
     blocks3= new Blocks(920,270,40,40)
     blocks4= new Blocks(880,270,40,40)
     blocks5= new Blocks(1040,270,40,40)
    blocks6=new Blocks(1000,230,40,40)
     blocks7=new Blocks(960,230,40,40)
     blocks8=new Blocks(920,230,40,40)
    blocks9=new Blocks(960,190,40,40)

   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  textSize(25);
  text("drag the hexagonal and release it,to launch it towords the blocks",50 ,50);
  
  stand.display()
  stand2.display()
  block.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()

  blocks1.display()
  blocks2.display()
  blocks3.display()
  blocks4.display()
  blocks5.display()
  blocks6.display()
  blocks7.display()
  blocks8.display()
  blocks9.display()

polygon.display()

polygon = bodies.circle(50,200,50)
    world.add(world,polygon)

slingshot.display()

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

  drawSprites();
 
}

