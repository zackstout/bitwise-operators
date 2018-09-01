
var in1, in2, btn;


function setup() {
  console.log('hi there you');
  in1 = createInput();
  in2 = createInput();

  btn_left = createButton('>>');
  btn_right = createButton('<<');
  btn_not = createButton('~');
  btn_and = createButton('&');
  btn_or = createButton('|');
  btn_xor = createButton('*');

  btn_left.mousePressed(op_left);
  btn_right.mousePressed(op_right);
  btn_not.mousePressed(op_not);
  btn_and.mousePressed(op_and);
  btn_or.mousePressed(op_or);
  btn_xor.mousePressed(op_xor);
}

function op_left() {
  console.log(in1.value());
}

function op_right() {
  console.log(in1.value());
}

function op_not() {
  console.log(in1.value());
}

function op_and() {
  console.log(in1.value());
  console.log(in2.value());
}

function op_or() {
  console.log(in1.value());
  console.log(in2.value());
}

function op_xor() {
  console.log(in1.value());
  console.log(in2.value());
}


function draw() {

}
