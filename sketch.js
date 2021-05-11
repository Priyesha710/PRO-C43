var hr, min, sec;
var scAngle,hrAngle,minAngle;
function preload() {
   
}

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    
}

function draw() {
    background("lightblue");
    textFont("Brush Script MT",70);
    text("A COLOURFUL CLOCK..",90,100)
    hr = hour();
    min = minute();
    sec = second();
    scAngle = map(sec, 0,60,0,360);
    minAngle = map(min, 0, 60, 0, 360);
    hrAngle = map(hr%12, 0, 12, 0, 360);
    if(hr < 12){  
        text(hr%12 + ":" + min + ":" + sec +" AM", 20,200);
    }else{
        text(hr%12 + ":" + min + ":" + sec+" PM", 20,200);
    }
    translate(400,400);

    // console.log(sec,scAngle);
    push();
    stroke(255,0,0);    
    noFill();
    strokeWeight(10);
    arc(0,0,320,320,270,scAngle-90);
    rotate(scAngle-90);
    strokeWeight(10);
    line(0,0,150,0);
    pop();

    push();
    stroke(0,255,0);
    noFill();
    strokeWeight(10);
    console.log(minAngle);
    arc(0,0,300,300,270,minAngle+270);
    rotate(minAngle+180);
    line(0,140,0,0);
    pop();
    
    push();
    stroke(0,0,255);
    strokeWeight(10);
    noFill();
    arc(0,0,280,280,270,hrAngle+270);
    rotate(hrAngle+180);
    line(0,75,0,0);
    pop();
 
 }

