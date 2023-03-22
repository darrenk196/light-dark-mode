const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

let isDark = false;

const toggleDarkLightMode = (isDark) => {
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  toggleIcon.children[1].classList.remove(isDark ? "fa-sun" : "fa-moon");
  toggleIcon.children[1].classList.add(isDark ? "fa-moon" : "fa-sun");
  image1.src = `img/undraw_proud_coder_${isDark ? "dark" : "light"}.svg`;
  image2.src = `img/undraw_feeling_proud_${isDark ? "dark" : "light"}.svg`;
  image3.src = `img/undraw_conceptual_idea_${isDark ? "dark" : "light"}.svg`;
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
};

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    isDark = true;
    toggleDarkLightMode(isDark);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    isDark = false;
    toggleDarkLightMode(isDark);
  }
}
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    isDark = true;
    toggleDarkLightMode(isDark);
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
