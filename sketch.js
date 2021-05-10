const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2
var block1, block2, block3, block4, block5, block6, block7, block8, block9
var PolygonImage, Polygon
var SlingShot
var backgroundImg;
var score = 0;
var bg;


function preload() {
  PolygonImage = loadImage("polygon.png")
  
  backgroundImg = loadImage("pictures/LightBlue.png")
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
    stand1 = new Ground(390, 260, 200, 10);
    //stand2 = new Ground();

    block1 = new Box(330, 235, 30, 40);
    block2 = new Box(360, 235, 30, 40);
    block3 = new Box(390, 235, 30, 40);
    block4 = new Box(420, 235, 30, 40);
    block5 = new Box(450, 235, 30, 40);  

    block6 = new Box(360, 195, 30, 40);
    block7 = new Box(390, 195, 30, 40);
    block8 = new Box(420, 195, 30, 40);

    block9 = new Box(390, 155, 30, 40);

    Polygon = Bodies.circle(50, 200, 20);
    World.add(world, Polygon);

    SlingShot = new slingShot(this.Polygon, {x:100, y:200});
}


function draw() {
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine)

    fill("Yellow");
    stroke(0)
    text("Score :- " + score, 750, 40);

    image(PolygonImage, Polygon.position.x, Polygon.position.y, 40, 40);

    block1.display();
    block1.score();

    block2.display();
    block2.score();

    block3.display();
    block3.score();

    block4.display();
    block4.score();

    block5.display();
    block5.score();

    block6.display();
    block6.score();

    block7.display();
    block7.score();

    block8.display();
    block8.score();

    block9.display();
    block9.score();

    stand1.display();

    SlingShot.display();

}

function keyPressed() {
    if(keyCode === 32) {
        SlingShot.attach(this.Polygon);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(this.Polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    SlingShot.fly();
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1800){
        bg = "pictures/LightBlue.png";
    }
    else{
        bg = "pictures/Black.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
