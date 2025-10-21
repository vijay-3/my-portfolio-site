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
