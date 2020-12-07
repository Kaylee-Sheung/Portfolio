let myFont;
let size=15;
let rows;
let cols;
let bcolor;

function preload() {
  myFont = loadFont('Grotesk_Bold.otf');
}

function setup() {
  createCanvas(600, 600);
  textFont(myFont);
  size=width/10;
}

function draw() {

  bcolor = map(mouseY, 0, 255, 255, 0);
  background(bcolor);
  // for(let i=0; i<cols;i++){
  // for(let j=0;j<rows;j++){
  // let r=int(map(i,0,10,0,0));
  // let b=int(map(j,255,10,0,255));
  // }
     
      
  fill(0);
  textSize(20);
  text('"Sexism is a huge issue"', width / 2 - 110, height / 2 - 100);
  text("She always walk", width / 2 - 260, height / 2 - 20);
  text("DARK", width / 2 + 120, height / 2 - 20);

  textSize(80);
  text("IN", width / 2 - 20, height / 2);

  fill(255);
  textSize(80);
  text("SH      E", width / 2 - 120, height / 2);

  textSize(20);
  text("We can be her lights and SHINE", width / 2 - 130, height / 2 + 100);
}