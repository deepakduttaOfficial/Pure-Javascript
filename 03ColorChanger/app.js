const randomColor = () => {
  const colorTextFormate = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + colorTextFormate[Math.floor(Math.random() * 15)];
  }
  return color;
};

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  document.querySelector("#canvas").style.backgroundColor = randomColor();
});
