const button = document.getElementById("submit");
const main = document.getElementById("main");
const div = document.createElement("div");
main.appendChild(div);

button.addEventListener("click", generateQRCode);

function generateQRCode() {
  let website = document.getElementById("input").value;
  div.innerHTML = "";
  if (website) {
    new QRCode(div, {
      text: website,
      width: 128,
      height: 128,
    });
  } else {
    alert("Please enter a valid URL");
  }
}
