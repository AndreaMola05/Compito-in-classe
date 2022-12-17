let x = 0
let y = 0
let l = 40
let w = 400
let h = 400

function setup() {

  createCanvas(w,h);
  background(220);
}
function draw() {
  
    square(x,y,l)
  
    circle(x+l/2,y+l/2,l/2)
  
  x=x+l
    if(x>=400){
    x=0
    y=y+l
    }
}