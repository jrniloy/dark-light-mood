const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Switch Image Color
function switchImageMode(mode) {
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

// Toggle Dark and Light mode
function toggleDarkLightMood(dark) {
  nav.style.backgroundColor = dark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = dark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = dark ? "Dark Mode" : "Light Mode";
  dark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  dark ? switchImageMode("dark") : switchImageMode("light");
}

/*
// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";

  //   console.log(toggleIcon.children);
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

  switchImageMode("dark");
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";

  //   console.log(toggleIcon.children);
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  switchImageMode("light");
}

*/

// Switch theme dynamically
function switchTheme(e) {
  //   console.log(e.target.checked);

  if (e.target.checked) {
    //   dark
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMood(true);
  } else {
    //   light
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMood(false);
  }
}

//  Event Listener
toggleSwitch.addEventListener("change", switchTheme);

//  Check local storage for theme
const currentTheme = localStorage.getItem("theme");
// console.log(currentTheme);
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  currentTheme === "dark" &&
    (toggleSwitch.checked = true) &&
    toggleDarkLightMood(true);
}
