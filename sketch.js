let array = [];
let strokeWidth = 5;
let noiseOffset = 0.0;
let colorPicker;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(500, 150);
}

function draw() {
  strokeWeight(10);
  stroke(colorPicker.color());
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  function keyTyped(){

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    //clear image
    clear();

    beginShape();
    for(let i = 0; i < array.length; i++){

      curveVertex(array[i][0], array [i][1]);
        }
  endShape();
}
  return false;
    }
}
