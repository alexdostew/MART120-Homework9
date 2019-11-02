function setup() {
  createCanvas(400,400);
}

function draw() {
  background('darkgreen');
  fill('rgba(0,255,0, 1)');
  ellipse(80,450,80,260);
  ellipse(320,450,80,260);
  ellipse(200,400,250,260);
  fill('tan');
  ellipse(200,200,150,180);
  fill('white');
  rect(140,175,40,20);
  rect(220,175,40,20);
  line(180,185,220,185);
  strokeWeight(10);
  point(160,185);
  point(240,185);
  strokeWeight(1);
  fill('red');
  triangle(150,240,200,260,250,240);
  fill('brown');
  ellipse(200,130,150,50);
  fill('white');
  textSize(32);
  text('Myself in a Hat',100,50);
  textSize(12);
  text('Alexander Stewart',280,260);
}
