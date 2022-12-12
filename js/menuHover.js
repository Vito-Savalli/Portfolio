// MENU HOVER EFFECT //
const arrowHome = document.getElementById("arrow-home");
const home = document.getElementById("home");
home.addEventListener("mouseover", () => (arrowHome.style.opacity = "1"));
home.addEventListener("mouseleave", () => (arrowHome.style.opacity = "0"));

const arrowSkills = document.getElementById("arrow-skills");
const skills = document.getElementById("skills");
skills.addEventListener("mouseover", () => (arrowSkills.style.opacity = "1"));
skills.addEventListener("mouseleave", () => (arrowSkills.style.opacity = "0"));

const arrowAbout = document.getElementById("arrow-about");
const about = document.getElementById("about");
about.addEventListener("mouseover", () => (arrowAbout.style.opacity = "1"));
about.addEventListener("mouseleave", () => (arrowAbout.style.opacity = "0"));
