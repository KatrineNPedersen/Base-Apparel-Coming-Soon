"use strict";

const emailInput = document.querySelector("input[name='emails']");
const iconError = document.querySelector(".icon-error");
const textError = document.querySelector(".error");
let w = document.documentElement.clientWidth || window.innerWidth;
const mainImage = document.querySelector(".main-image");

function checkValidity() {
  emailInput.addEventListener("invalid", function (event) {
    event.preventDefault();
    let validityState = event.target.validity;

    for (let key in validityState) {
      if (validityState[key]) {
        iconError.classList.remove("hidden");
        textError.classList.remove("hidden");
        emailInput.style.border = "2px solid hsl(0, 93%, 68%)";
        return;
      }
    }
  });
}

checkValidity();

function tryAgain() {
  emailInput.addEventListener("input", function () {
    iconError.classList.add("hidden");
    textError.classList.add("hidden");
    emailInput.style.border = "0.5px solid hsl(0, 36%, 70%)";
  });
}
tryAgain();

function resizePage(w) {
  if (w < 1440) {
    console.log("mobile");
  } else {
    mainImage.src = "images/hero-desktop.jpg";
  }
}
resizePage(w);

window.onresize = function () {
  location.reload();
};
