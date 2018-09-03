
var in1, in2, out;
var outlist = [];

function setup() {
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

// Oh, or maybe I was totally wrong, and they all take 2 inputs? Or maybe the shifters implicitly take 1 as input?
function curryOps(op) {

  return function() {
    var val1 = in1.value();
    var val2 = in2.value();
    var output;
    var oneInput = op === '<<' || op === '>>' || op === '~';

    switch(op) {
      case '<<': output = val1 << 1; break;
      case '>>': output = val1 >> 1; break;
      case '~': output = ~ val1; break;
      case '&': output = val1 & val2; break;
      case '|': output = val1 | val2; break;
      case '^': output = val1 ^ val2; break;
    }

    var x_out = '1';
    if (op == '~') x_out = '';
    var inString = parseInt(val1).toString(2);
    var inString2 = parseInt(val2).toString(2);
    var outString = output.toString(2);

    in1.value(output);
    if (oneInput) {
      outlist.push(`${val1} (${inString}) ${op} ${x_out} = ${output} (${outString})`);
    } else {
      outlist.push(`${val1} (${inString}) ${op} ${val2} (${inString2}) = ${output} (${outString})`);
    }
    createP(outlist[outlist.length - 1]);
  };

}

// These are the 3 operators that take 1 input:
var op_left = curryOps('<<');
var op_right = curryOps('>>');
// Not sure this is right: should x return -(x+1)? How do bits give rise to negative numbers? Yeah, it's intended.
var op_not = curryOps('~');

var op_and = curryOps('&');
var op_or = curryOps('|');
var op_xor = curryOps('^');
