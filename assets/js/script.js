// Write the code with safe by using strict mode
"use strict";

// Logo folder
const LOGO_FOLDER = "./assets/image/logo/";

// Logo name
const LOGO_NAME = [
  "express-js-logo.png",
  "react-js-logo.png",
  "node-js-logo.png",
  "mongodb-logo.png",
];
let logoCount = 0;

// Change the logo dynamically in header
function changeLogo() {
  const LOGO_PATH = LOGO_FOLDER + LOGO_NAME[logoCount++];
  if (logoCount === LOGO_NAME.length) {
    logoCount = 0;
  }
  const LOGO_IMAGE = document.getElementById("logo-image");
  LOGO_IMAGE.src = LOGO_PATH;
  console.log(LOGO_PATH);
}

// Call the logo change function specific interval
setInterval(changeLogo, 3000);

// Close the collapse items also click outside the toggle button
const COLLAPSE_BUTTON = document.getElementsByClassName("navbar-toggler")[0];
const COLLAPSE_ITEM_BOX = document.getElementById("navbar-toggle-items");
const BOOTSTRAP_COLLAPSE = new bootstrap.Collapse(COLLAPSE_ITEM_BOX, {
  toggle: false,
});

// Check clicked or not outside the toggle button and close the collapse items
document.addEventListener("click", (collapseHappen) => {
  const CLICK_INSIDE_BUTTON =
    COLLAPSE_ITEM_BOX.contains(collapseHappen.target) ||
    COLLAPSE_BUTTON.contains(collapseHappen.target);
  if (!CLICK_INSIDE_BUTTON && COLLAPSE_ITEM_BOX.classList.contains("show")) {
    BOOTSTRAP_COLLAPSE.hide();
  }
});

// Add to navigation bar active feature
const ALL_SECTIONS = document.querySelectorAll("section");
const ALL_NAV_BTNS = document.querySelectorAll(".nav-link");

// Function for highlight navigation bar based on visible
window.onscroll = () => {
  ALL_SECTIONS.forEach((section) => {
    const WINDOW_TOP = window.scrollY;
    const SECTION_TOP = section.offsetTop - 200;
    const SECTION_HEIGHT = section.offsetHeight;
    const SECTION_ID = section.getAttribute("id");
    if (
      WINDOW_TOP >= SECTION_TOP &&
      WINDOW_TOP < SECTION_TOP + SECTION_HEIGHT
    ) {
      ALL_NAV_BTNS.forEach((linkBtn) => {
        linkBtn.classList.remove("active");
        console.log(SECTION_ID);
        document
          .querySelector(`.nav-link[href="#${SECTION_ID}"]`)
          .classList.add("active");
      });
    }
  });
};

// Add the typing effect to role names
const ROLE_TYPE_EFFECT = new Typed(".role-text", {
  strings: [
    "Web Developer",
    "Front-End Developer",
    "Back-End Developer",
    "React.js Developer",
    "MERN Stack Developer",
    "Full-Stack Web Developer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 300,
  shuffle: true,
});