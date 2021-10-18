
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisons = [];
var divisonsHeight = 300;
var particles = [];
var plinkos = []; 
function preload()
{
	
}



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);

  
  for (var i = 0; i<=width; i= i+80) {
      divisons.push(new Division(i,height-divisonsHeight/2, 10, divisonsHeight));
  }

  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 // drawSprites();

  
  
  for (var n = 0; n<divisons.length; n++) {
    divisons[n].display();
  }

  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  }
  textSize(21);
  text("PLINKO GAME  ",20,30);
  text("100", 34, 515)
  text("200", 118, 515)
  text("400", 198, 515)
  text("100", 277, 515)
  text("500", 358, 515)
  text("200", 439, 515)
  text("300", 519, 515)
  text("100", 600, 515)
  text("500", 680, 515)
  text("200", 760, 515)

  ground.display();

}
 
 
 




