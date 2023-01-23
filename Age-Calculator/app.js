const ageContainer = document.querySelector(".desc");
const yourAge = document.createElement("span");

const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

const input = document.getElementById("dob");
document.addEventListener("input", getAge);

function getAge() {
  const date = new Date(input.value);
  yourAge.innerHTML = "";
  let bDay = date.getDate();
  let bMonth = date.getMonth() + 1;
  let bYear = date.getFullYear();
  const DOB = calcAge(bDay, bMonth, bYear);
  displayAge(DOB);
}

function calcAge(bDay, bMonth, bYear) {
  const currentDate = new Date();
  let cYear = currentDate.getFullYear();
  let cMonth = currentDate.getMonth() + 1;
  let cDay = currentDate.getDate();

  if (cDay < bDay) {
    cDay = cDay + 30;
    cMonth = cMonth - 1;
  }
  if (cMonth < bMonth) {
    cMonth = cMonth + 12;
    cYear = cYear - 1;
  }

  const ageYear = cYear - bYear;
  const ageMonth = cMonth - bMonth;
  const ageDay = cDay - bDay;

  return { ageYear, ageMonth, ageDay };
}

function displayAge({ ageYear, ageMonth, ageDay }) {
  yourAge.innerHTML = ageYear;
  ageContainer.appendChild(yourAge);
  years.innerHTML = ageYear;
  months.innerHTML = ageMonth;
  days.innerHTML = ageDay;
}
