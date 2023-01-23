const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {});

generateEl.addEventListener("click", () => {
  if (
    !(
      uppercaseEl.checked ||
      lowercaseEl.checked ||
      numbersEl.checked ||
      symbolsEl.checked
    )
  ) {
    return alert("One field is required");
  }
  const result = generatePassword();
  resultEl.innerText = result;
});

function generatePassword() {
  let plainPassword = "";
  let password = "";
  if (uppercaseEl.checked) {
    plainPassword += randomFunc.upper();
  }
  if (lowercaseEl.checked) {
    plainPassword += randomFunc.lower();
  }
  if (numbersEl.checked) {
    plainPassword += randomFunc.number();
  }
  if (symbolsEl.checked) {
    plainPassword += randomFunc.symbol();
  }
  for (let i = 1; i <= lengthEl.value; i++) {
    password += plainPassword[Math.floor(Math.random() * plainPassword.length)];
  }
  return password;
}

function getRandomLower() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";
  for (let i = 0; i < lower.length; i++) {
    const randomIndex = Math.floor(Math.random() * lower.length);
    const randomLetter = lower.charAt(randomIndex);
    randomString += randomLetter;
  }
  return randomString;
}

function getRandomUpper() {
  const upper = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  let randomString = "";
  for (let i = 0; i < upper.length; i++) {
    const randomIndex = Math.floor(Math.random() * upper.length);
    const randomLetter = upper.charAt(randomIndex);
    randomString += randomLetter;
  }
  return randomString;
}

function getRandomNumber() {
  let randomNumber = "";
  for (let i = 0; i <= 9; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }
  return randomNumber;
}

function getRandomSymbol() {
  const symbol = "!@#$%^&*()_+";
  let randomSymbol = "";
  for (let i = 0; i < symbol.length; i++) {
    const randomIndex = Math.floor(Math.random() * symbol.length);
    const randomLetter = symbol.charAt(randomIndex);
    randomSymbol += randomLetter;
  }
  return randomSymbol;
}
