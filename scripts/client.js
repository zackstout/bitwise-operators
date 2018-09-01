
var in1, in2, out;
var outlist = [];


function setup() {
  console.log('hi there you');
  in1 = createInput();
  in2 = createInput();

  btn_left = createButton('<<');
  btn_right = createButton('>>');
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

  out = createDiv();
}

// NOTE: All of these functions should accept strings as values

// Oh, or maybe I was totally wrong, and they all take 2 inputs? Or maybe the shifters implicitly take 1 as input?

// These are the 3 operators that take 1 input:
function op_left() {
  var val1 = in1.value();
  var output = val1 << 1;
  in1.value(output);
  outlist.push(`${val1} << 1 = ${output}`);
  createP(outlist[outlist.length - 1]);
}

function op_right() {
  var val1 = in1.value();
  var output = val1 >> 1;
  in1.value(output);
  outlist.push(`${val1} >> 1 = ${output}`);
  createP(outlist[outlist.length - 1]);
}


// Not sure this is right: should x return -(x+1)? How do bits give rise to negative numbers?
function op_not() {
  var val1 = in1.value();
  var output = ~val1;
  in1.value(output);
  outlist.push(`~ ${val1} = ${output}`);
  createP(outlist[outlist.length - 1]);

}

// These are the 3 operators that take 2 inputs:
function op_and() {
  var val1 = in1.value();
  var val2 = in2.value();
  var output = val1 & val2;
  in1.value(output);
  outlist.push(`${val1} & ${val2} = ${output}`);
  createP(outlist[outlist.length - 1]);
}

function op_or() {
  var val1 = in1.value();
  var val2 = in2.value();
  var output = val1 | val2;
  in1.value(output);
  outlist.push(`${val1} | ${val2} = ${output}`);
  createP(outlist[outlist.length - 1]);
}

function op_xor() {
  var val1 = in1.value();
  var val2 = in2.value();
  var output = val1 ^ val2;
  in1.value(output);
  outlist.push(`${val1} ^ ${val2} = ${output}`);
  createP(outlist[outlist.length - 1]);
}


// function draw() {
//   // background(255);
//   outlist.forEach(o => {
//     // Maybe we don't even need the #out:
//     x = createP(o);
//   });
// }
