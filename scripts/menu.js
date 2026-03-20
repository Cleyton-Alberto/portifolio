const burger = document.getElementById("burger");
const menu = document.getElementById("menuOptions");

document.addEventListener("DOMContentLoaded", () => {
    menu.style.display = "none";
});

burger.addEventListener("click", () => {
    const isHidden = getComputedStyle(menu).display === "none";
    menu.style.display = isHidden ? "flex" : "none";
});