
var box1;
var box2;

function setup() {
  createCanvas(600, 400);
  box1=new Boxx()
  box2=new Boxx()
  box1.set_width(5)
box2.set_width(15)
}

function draw() {
  background(220);
box1.show()
box2.show()
}

