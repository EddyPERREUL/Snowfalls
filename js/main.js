"use strict";

// Dark-mode
const btnToggle = document.getElementById("btnDarkMode");
const targetBody = document.getElementById("targetBody");

// Dark-mode Background default
const imageBackground = document.createElement("img");
imageBackground.classList.add("background-fixe");
imageBackground.classList.add("change");
imageBackground.src = "../asset/mountain_light_1080_50prc.jpg";
targetBody.prepend(imageBackground);

// Dark-mode icon button
btnToggle.innerHTML = '<i class="fas fa-sun"></i>';

// Dark-mode change scene
const changeSceneAnimate = document.querySelector(".change");

changeSceneAnimate.addEventListener("animationstart", () => {
  changeSceneAnimate.classList.add("active");
});

changeSceneAnimate.addEventListener("animationend", () => {
  changeSceneAnimate.classList.remove("active");
});

// Dark-mode Switch Background & icon button & change scene
let statToggleSwitch = true;
btnToggle.addEventListener("click", () => {
  changeSceneAnimate.classList.toggle("active");
  if (statToggleSwitch == true) {
    imageBackground.src = "../asset/mountain_dark_1080_50prc.jpg";
    btnToggle.innerHTML = '<i class="fas fa-moon"></i>';
    statToggleSwitch = false;
  } else {
    imageBackground.src = "../asset/mountain_light_1080_50prc.jpg";
    btnToggle.innerHTML = '<i class="fas fa-sun"></i>';
    statToggleSwitch = true;
  }
});

// Animation Script
function createDiv() {
  const divAnimate = document.createElement("div");
  divAnimate.id = "animate";
  divAnimate.classList.add("background-animate");
  targetBody.prepend(divAnimate);
}

createDiv();

// Animation active animate snow
function animationSnowDown() {
  const icon = 300;

  const NewImg = document.getElementById("animate");
  for (let i = 0; i < icon; i++) {
    const logo = document.createElement("img");
    logo.src = "../asset/snowflake.svg";
    logo.classList.add("all-icon");

    let size = Math.random() * 28;
    size = Math.floor(size);
    logo.style.width = size + "px";

    let right_position = Math.random() * 101;
    right_position = Math.floor(right_position);
    logo.style.right = right_position + "%";

    let left_position = Math.random() * 101;
    left_position = Math.floor(left_position);
    logo.style.left = left_position + "%";

    let speed_move = Math.random() * 90;
    speed_move = Math.floor(speed_move);
    logo.style.animation = `move ${speed_move}s ease infinite`;

    if (size > 10 && speed_move > 10) {
      NewImg.append(logo);
    }
  }
}
animationSnowDown();

// Animation button
const btnAnimateSwitch = document.getElementById("btnSwitchAnimate");
btnAnimateSwitch.innerHTML = '<i class="fas fa-play"></i>';
let statBtnAnimateSwitch = true;

btnAnimateSwitch.addEventListener("click", function () {
  if (statBtnAnimateSwitch == true) {
    const targetDivAnimate = document.getElementById("animate");
    targetDivAnimate.remove(targetDivAnimate);
    btnAnimateSwitch.innerHTML = '<i class="fas fa-pause"></i>';
    statBtnAnimateSwitch = false;
    console.log(statBtnAnimateSwitch);
  } else {
    createDiv();
    animationSnowDown();
    btnAnimateSwitch.innerHTML = '<i class="fas fa-play"></i>';
    statBtnAnimateSwitch = true;
    console.log(statBtnAnimateSwitch);
  }
});
