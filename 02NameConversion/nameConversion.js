document.addEventListener("input", input);

// Camel case :
const toCamelCase = (value) => {
  return value
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

//pascalCase
const toPascalCase = (value) => {
  return value.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
};

// Snack case
const toSnakeCase = (value) => {
  value = value.replace(/\W+/g, " ").toLowerCase().split(" ").join("_");
  if (value.charAt(value.length - 1) === "_") {
    return value.substring(0, value.length - 1);
  }
  return value;
};

// screaming Snake Case
const toScreamingKebabCase = (value) => {
  value = value.replace("\b[A-Z]+(_[A-Z]+)*\b");
  return value;
};

//kebab Case
const tokebabCase = (value) => {
  return value
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

function input() {
  let value = document.getElementById("text").value;
  const btn = document.querySelector("#convert-btn");

  // Target all Case:
  const camelCase = document.querySelector("#camel-case");
  const pascalCase = document.querySelector("#pascal-case");
  const snakeCase = document.querySelector("#snake-case");
  const screamingSnakeCase = document.querySelector("#screaming-snake-case");
  const kebabCase = document.querySelector("#kebab-case");
  const screamingKebabCase = document.querySelector("#screaming-kebab-case");

  //  on button click
  btn.addEventListener("click", () => {
    camelCase.innerHTML = toCamelCase(value);
    pascalCase.innerHTML = toPascalCase(value);
    snakeCase.innerHTML = value;
    screamingSnakeCase.innerHTML = toSnakeCase(value);
    kebabCase.innerHTML = tokebabCase(value);
    screamingKebabCase.innerHTML = tokebabCase(value);
  });
}
