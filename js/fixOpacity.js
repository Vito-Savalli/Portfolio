// FRONTEND ANIMATION HELPER

// SET BTN OPACITY TO 0
const animationBtn = document.getElementById("frontend-animation__btn");
animationBtn.style.opacity = 0;

// SET BTN OPACITY TO 1 ON DIV HOVER
const projectsDiv = document.getElementById("project-front");
projectsDiv.addEventListener(
  "mouseover",
  () => (animationBtn.style.opacity = 1)
);

// FIX FLOATING BTN ON MOUSEOUT
projectsDiv.addEventListener("mouseleave", function () {
  animationBtn.classList.add("animation-float");
});
