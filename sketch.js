const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground;

var pillar1,pillar2,pillar3;

var box1,box2,box3,box4;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = createSprite(200,390,400,20);
  ground.shapeColor = "brown";

  pillar1 = new Pillar(200,305,200,150);
  pillar2 = new Pillar(70,260,70,240);
  pillar3 = new Pillar(330,260,70,240);

  box1 = new Box(130,220);
  box2 = new Box(175,220);
  box3 = new Box(220,220);
  box4 = new Box(260,220);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  drawSprites();

  pillar1.display();
  pillar2.display();
  pillar3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
}