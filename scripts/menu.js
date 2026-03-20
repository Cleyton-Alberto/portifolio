const burger = document.getElementById("burger");
const menu = document.getElementById("menuOptions");

burger.addEventListener("click", () => {
    const isHidden = getComputedStyle(menu).display === "none";
    menu.style.display = isHidden ? "flex" : "none";
});