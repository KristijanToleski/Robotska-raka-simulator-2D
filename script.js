let servo1 = document.getElementsByClassName("servo1")[0];
let servo2 = document.getElementsByClassName("servo2")[0];

// SERVO 1 AGOL MANUAL

let slider1 = document.getElementById("servo1Agol");
let output1 = document.getElementById("agol1");
output1.value = slider1.value;

slider1.oninput = function() {
  output1.value = this.value;

  servo1.style.transform = "rotate(" + (90 - this.value) + "deg)";
}
output1.oninput = function() {
  if(this.value < 0) this.value = 0;
  if(this.value > 90) this.value = 90;

  slider1.value = this.value;
  
  servo1.style.transform = "rotate(" + (90 - this.value) + "deg)";
}

// SERVO 2 AGOL MANUAL

let slider2 = document.getElementById("servo2Agol");
let output2 = document.getElementById("agol2");
output2.value = slider2.value;

slider2.oninput = function() {
  output2.value = this.value;

  servo2.style.transform = "rotate(" + (180 - this.value) + "deg)";
}
output2.oninput = function() {
  if(this.value < 0) this.value = 0;
  if(this.value > 180) this.value = 180;

  slider2.value = this.value;
  
  servo2.style.transform = "rotate(" + (180 - this.value) + "deg)";
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
  servo1.style.transform = "rotate(" + rastojanie + "deg)";

  let agol2 = (180 - (90 + rastojanie)) * 2;

  servo2.style.transform = "rotate(" + agol2 + "deg)";

  slider1.value = rastojanie;
  output1.value = rastojanie;
  slider2.value = agol2;
  output2.value = agol2;
}