let servo1 = document.getElementsByClassName("servo1")[0];
let servo2 = document.getElementsByClassName("servo2")[0];

// FUNKCII

function postaviServo1Agol(agol){
  if(agol < 0) agol = 0;
  if(agol > 90) agol = 90;

  servo1.style.transform = "rotate(" +(90 - agol)+ "deg)";
}
function postaviServo2Agol(agol){
  if(agol < 0) agol = 0;
  if(agol > 180) agol = 180;

  servo2.style.transform = "rotate(-" + agol + "deg)";
}

// SERVO 1 AGOL MANUAL

let slider1 = document.getElementById("servo1Agol");
let output1 = document.getElementById("agol1");
output1.value = slider1.value;

slider1.oninput = function() {
  output1.value = this.value;
  postaviServo1Agol(this.value);
}
output1.oninput = function() {
  slider1.value = this.value;
  postaviServo1Agol(this.value);
}

// SERVO 2 AGOL MANUAL

let slider2 = document.getElementById("servo2Agol");
let output2 = document.getElementById("agol2");
output2.value = slider2.value;

slider2.oninput = function() {
  output2.value = this.value;
  postaviServo2Agol(this.value);
}
output2.oninput = function() {
  slider2.value = this.value;
  postaviServo2Agol(this.value);
}

// SERVO 1 I 2 AGOL AUTO

let horizontalnoDvizenjeSlider = document.getElementById("horizontalnoDvizenjeSlider");
let horizontalnoDvizenjeNumber = document.getElementById("horizontalnoDvizenjeNumber");

horizontalnoDvizenjeSlider.oninput = function(){
  horizontalnoDvizenjeNumber.value = this.value;
  zadviziHoriznotalno(Number(this.value));
}
horizontalnoDvizenjeNumber.oninput = function(){
  if(this.value < 0) this.value = 0;
  if(this.value > 90) this.value = 90;

  horizontalnoDvizenjeSlider.value = this.value;
  zadviziHoriznotalno(Number(this.value));
}

function zadviziHoriznotalno(rastojanie){
  postaviServo1Agol(90 - rastojanie);

  let agol2 = Math.abs(180 - (90 + rastojanie) * 2);

  postaviServo2Agol(agol2);

  rastojanie = 90 - rastojanie;

  slider1.value = rastojanie;
  output1.value = rastojanie;
  slider2.value = agol2;
  output2.value = agol2;
}