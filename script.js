let servo1 = document.getElementsByClassName("servo1")[0];
let servo2 = document.getElementsByClassName("servo2")[0];
let greskaY = 0, greskaZ = 0;
let maxHorizontalno = 60;

// SERVO 1 AGOL MANUAL

let slider1 = document.getElementById("servo1Agol");
let output1 = document.getElementById("agol1");
output1.value = slider1.value;

slider1.oninput = function() {
  postaviServo1Agol(this.value);
}
output1.oninput = function() {
  postaviServo1Agol(this.value);
}

// SERVO 2 AGOL MANUAL

let slider2 = document.getElementById("servo2Agol");
let output2 = document.getElementById("agol2");
output2.value = slider2.value;

slider2.oninput = function() {
  postaviServo2Agol(this.value);
}
output2.oninput = function() {
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
  if(this.value > maxHorizontalno) this.value = maxHorizontalno;

  horizontalnoDvizenjeSlider.value = this.value;
  zadviziHoriznotalno(Number(this.value));
}

// STRANA a DOLZINA

let dolzinaStranaBSlider = document.getElementById("dolzinaStranaBSlider");
let dolzinaStranaBNumber = document.getElementById("dolzinaStranaBNumber");

dolzinaStranaBSlider.oninput = function(){
  dolzinaStranaBNumber.value = this.value;
  
  servo2.style.height = this.value + "vh";

  maxHorizontalno = 30 + Number(this.value);

  horizontalnoDvizenjeSlider.max = 30 + Number(this.value);

  horizontalnoDvizenjeNumber.max = 30 + Number(this.value);
  horizontalnoDvizenjeNumber.value = maxHorizontalno;
}
dolzinaStranaBNumber.oninput = function(){
  if(this.value < 10) this.value = 10;
  if(this.value > 100) this.value = 100;

  dolzinaStranaBSlider.value = this.value;
  
  servo2.style.height = this.value + "vh";

  maxHorizontalno = 30 + Number(this.value);

  horizontalnoDvizenjeSlider.max = 30 + Number(this.value);

  horizontalnoDvizenjeNumber.max = 30 + Number(this.value);
  horizontalnoDvizenjeNumber.value = maxHorizontalno;
}

// GRESKA

let greskaYNumber = document.getElementById("greskaYNumber");
let greskaZNumber = document.getElementById("greskaZNumber");

greskaYNumber.oninput = function(){
  greskaY = greskaYNumber.value;
  zadviziHoriznotalno(Number(horizontalnoDvizenjeNumber.value));
}
greskaZNumber.oninput = function(){
  greskaZ = greskaZNumber.value;
  zadviziHoriznotalno(Number(horizontalnoDvizenjeNumber.value));
}

// FUNKCII

function postaviServo1Agol(agol){
  if(agol < 0) agol = 0;
  if(agol > 180) agol = 180;

  servo1.style.transform = "rotate(" +(90 - agol)+ "deg)";

  slider1.value = agol;
  output1.value = agol;
}
function postaviServo2Agol(agol){
  if(agol < 0) agol = 0;
  if(agol > 180) agol = 180;

  servo2.style.transform = "rotate(-" + agol + "deg)";

  slider2.value = agol;
  output2.value = agol;
}

function zadviziHoriznotalno(dolzina){
  dolzina += Number(greskaY);

  odiNaTocka(dolzina, greskaZ);
}

function odiNaTocka(y, z){
  let a1 = dolzinaStranaBNumber.value, b1 = 30, a2 = z, b2 = y, c;
  let alfa1, alfa2, alfa, beta;

  c = Math.sqrt(a2*a2 + b2*b2);
  alfa1 = Math.acos((a1*a1 - b1*b1 - c*c) / (-2 * b1 * c));
  beta = Math.acos((c*c - a1*a1 - b1*b1) / (-2 * a1 * b1));
  alfa2 = Math.atan(a2 / b2);
  alfa = alfa1 + alfa2;

  alfa *= 180 / Math.PI;
  beta *= 180 / Math.PI;
  alfa = Math.floor(alfa);
  beta = Math.floor(beta);

  if(isNaN(alfa)) alfa = greskaZ;
  if(isNaN(beta)) beta = 180;

  postaviServo1Agol(alfa);
  postaviServo2Agol(beta);
}