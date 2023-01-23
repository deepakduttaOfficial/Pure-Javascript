const question = document.getElementById("question");
const answer = document.getElementById("answer");

function getValue(val) {
  if (answer.innerHTML.length > 0) {
    question.innerHTML = "";
    answer.innerHTML = "";
  }
  question.innerHTML = question.innerHTML + val;
}

function equal() {
  let inputValue = question.innerHTML;

  let devide = 0;

  let sum = false;
  let subStract = false;
  let multiplication = false;
  let division = false;
  let persentage = false;

  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i] === "+") {
      sum = true;
      devide = i;
    }
    if (inputValue[i] === "-") {
      subStract = true;
      devide = i;
    }
    if (inputValue[i] === "*") {
      multiplication = true;
      devide = i;
    }
    if (inputValue[i] === "/") {
      division = true;
      devide = i;
    }
    if (inputValue[i] === "%") {
      persentage = true;
      devide = i;
    }
  }

  let value1 = Number(inputValue.substring(0, devide));
  let value2 = Number(inputValue.slice(devide + 1));
  var value;

  if (sum) {
    value = sumCalculate(value1, value2);
  }
  if (subStract) {
    value = subStractCalculate(value1, value2);
  }
  if (multiplication) {
    value = multiplicationCalculate(value1, value2);
  }
  if (division) {
    value = divisionCalculate(value1, value2);
  }
  if (persentage) {
    value = persentageCalculate(value1, 100);
  }

  answer.innerHTML = value;
}

function clean() {
  question.innerHTML = "";
  answer.innerHTML = "";
}

function back() {
  question.innerHTML = question.innerHTML.substring(
    0,
    question.innerHTML.length - 1
  );
}

function sumCalculate(value1, value2) {
  return value1 + value2;
}
function subStractCalculate(value1, value2) {
  return value1 - value2;
}
function multiplicationCalculate(value1, value2) {
  return value1 * value2;
}
function divisionCalculate(value1, value2) {
  return value1 / value2;
}
function persentageCalculate(value1, value2) {
  return value1 / value2;
}
const online = document.querySelector(".blink-down");

setInterval(() => {
  if (online.classList[0] === "blink-down") {
    online.setAttribute("class", "blink-up");
  } else {
    online.setAttribute("class", "blink-down");
  }
}, 1000);

console.log(online.classList[0]);
