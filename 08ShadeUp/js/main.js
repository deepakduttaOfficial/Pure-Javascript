const hexCOut = document.getElementById("hexCOut");
const rgbCOut = document.getElementById("rgbCOut");
// Range rgb color
const rangeColorBox = document.getElementById("range-color-box");
const RrInput = document.getElementById("RrInput");
const GrInput = document.getElementById("GrInput");
const BrInput = document.getElementById("BrInput");
// Hex color
const colorBox = document.getElementById("color-box");
const hexInput = document.getElementById("hexInput");
// Color rgb code
const rgbColorBox = document.getElementById("rgb-color-box");
const RInput = document.getElementById("RInput");
const GInput = document.getElementById("GInput");
const BInput = document.getElementById("BInput");
// Random color
const randomValuePara = document.getElementById("randomValuePara");
const randomPicker = document.getElementById("randomPicker");

function randompickerbtn() {
  let val = `1234567890ABCDEF`;
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + val[Math.floor(Math.random() * 16)];
  }
  randomValuePara.innerHTML = color;
  randomPicker.style.backgroundColor = color;
}

function hexFindbtn() {
  colorBox.style.backgroundColor = `${hexInput.value}`;
}

function RGBFindbtn() {
  rgbColorBox.style.backgroundColor = `rgb(${RInput.value} ${GInput.value} ${BInput.value})`;
}

function RangeSelector() {
  rangeColorBox.style.backgroundColor = `rgb(${RrInput.value} ${GrInput.value} ${BrInput.value})`;
  rangeColorBox.innerHTML = `rgb(${RrInput.value} ${GrInput.value} ${BrInput.value})`;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  var aRgbHex = this.match(/.{1,2}/g);
  var aRgb = `${[
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ]}`;
  return aRgb;
};

function hexConvbtn() {
  const hexCInp = document.getElementById("hexCInp");
  hexCOut.innerHTML = `${hexCInp.value.convertToRGB()}`;
}

function rgbConvbtn() {
  const RCInput = document.getElementById("RCInput").value;
  const GCInput = document.getElementById("GCInput").value;
  const BCInput = document.getElementById("BCInput").value;
  let rgbValue =
    "#" +
    componentToHex(RCInput) +
    componentToHex(GCInput) +
    componentToHex(BCInput);
  rgbCOut.innerHTML = rgbValue;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
