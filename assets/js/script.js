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
  typeSpeed: 150,
  backSpeed: 150,
  backDelay: 500,
  startDelay: 100,
  shuffle: true,
});

// Create E-mail feature for our website using email.js

// Make the authentication our website with email js
(function () {
  emailjs.init({ publicKey: "aThx1hLQbNZV-H2w5" });
})();

// Get the details of user input in form
const CONTACT_FORM = document.getElementById("contact-form");

CONTACT_FORM.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();

  const CONTACT_FORM_DATA = {
    userName: document.getElementById("visitor-name").value,
    userEmail: document.getElementById("visitor-email").value,
    userMessage: document.getElementById("visitor-message").value,
  };

  //   Send e-mail to owner of the website
  const ACKNOWLEDGEMENT_MSG =
    document.getElementsByClassName("thank-you-message")[0];
  emailjs
    .send("service_3yesl79", "template_1xvz831", CONTACT_FORM_DATA)
    .then(() => {
      // Show the than you message after submit the form
      ACKNOWLEDGEMENT_MSG.style.display = "block";
      ACKNOWLEDGEMENT_MSG.style.fontWeight = 400;
      ACKNOWLEDGEMENT_MSG.style.color = "green";
      setTimeout(() => {
        document.getElementById("visitor-name").value = "";
        document.getElementById("visitor-email").value = "";
        document.getElementById("visitor-message").value = "";
        // CONTACT_FORM.reset();	This is alternative for clear the input fields in form
      }, 500);
      setTimeout(() => {
        ACKNOWLEDGEMENT_MSG.style.display = "none";
      }, 5000);
    })
    .catch(() => {
      ACKNOWLEDGEMENT_MSG.textContent =
        "Something went wrong. Please try again...";
      ACKNOWLEDGEMENT_MSG.style.fontWeight = 500;
      ACKNOWLEDGEMENT_MSG.style.color = "red";
      ACKNOWLEDGEMENT_MSG.style.display = "block";
    });
});