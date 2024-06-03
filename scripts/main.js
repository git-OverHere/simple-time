function showTime() {
  const userTimezone = document.querySelector("#userTimezone");
  const userTime = document.querySelector("#userTime");
  const userDate = document.querySelector("#userDate");

  userTimezone.innerHTML = window.userTimezone;
  userTime.innerHTML = window.userTime;
  userDate.innerHTML = window.userDate;

  const jstTimezone = document.querySelector("#jstTimezone");
  const jstTime = document.querySelector("#jstTime");
  const jstDate = document.querySelector("#jstDate");

  jstTimezone.innerHTML = window.jstTimezone;
  jstTime.innerHTML = window.jstTime;
  jstDate.innerHTML = window.jstDate;

  const estTimezone = document.querySelector("#estTimezone");
  const estTime = document.querySelector("#estTime");
  const estDate = document.querySelector("#estDate");

  estTimezone.innerHTML = window.estTimezone;
  estTime.innerHTML = window.estTime;
  estDate.innerHTML = window.estDate;

  const pstTimezone = document.querySelector("#pstTimezone");
  const pstTime = document.querySelector("#pstTime");
  const pstDate = document.querySelector("#pstDate");

  pstTimezone.innerHTML = window.pstTimezone;
  pstTime.innerHTML = window.pstTime;
  pstDate.innerHTML = window.pstDate;
}

function addArrayToOptions(arr) {
  const options = document.querySelector("#options");
  arr.forEach(function (option) {
    const newLi = document.createElement("li");
    newLi.innerHTML = option;
    options.appendChild(newLi);
  });
}

function toggleTimezones() {
  const options = document.querySelector("#options");
  const dropdownIcon = document.querySelector("#dropdown-icon");
  if (options.style.display === "none") {
    dropdownIcon.icon = "bxs:up-arrow";
    options.style.display = "block";
  } else {
    dropdownIcon.icon = "bxs:down-arrow";
    options.style.display = "none";
  }
}

function hideTimezones() {
  const options = document.querySelector("#options");
  options.style.display = "none";
}

const searchBtn = document.querySelector("#search");
searchBtn.innerHTML =
  window.userTimezone +
  "<iconify-icon icon='bxs:down-arrow' id='dropdown-icon'></iconify-icon>";

const timezoneArray = Intl.supportedValuesOf("timeZone");
addArrayToOptions(timezoneArray);

searchBtn.addEventListener("click", function () {
  toggleTimezones();
});

//get user choice from dropdown
const optionsArray = document.querySelectorAll("#options li");
optionsArray.forEach(function (option) {
  option.addEventListener("click", function () {
    const options = document.querySelector("#options");
    options.scrollTo(0, 0);
    const searchBtn = document.querySelector("#search");
    searchBtn.innerHTML =
      this.innerHTML +
      "<iconify-icon icon='bxs:down-arrow' id='dropdown-icon'></iconify-icon>";
    hideTimezones();
  });
});

const applyBtn = document.querySelector("#apply");
applyBtn.addEventListener("click", function () {
  window.changeTimezone(searchBtn.innerHTML.split("<")[0]);
});

showTime();
setInterval(function () {
  showTime();
}, 1000);
