const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane;
var rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,590,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(500,580,50);
    rubber1 = new Rubber(100,580,70)
    iron = new Iron(350,580);
    stone1 = new Stone(700,580);
    stone2 = new Stone(800,580);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    rubber1.display();
    iron.display();
    stone1.display();
    stone2.display();
    
 
}