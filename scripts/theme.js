const themeButton = document.querySelector("#theme a");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}

themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        themeIcon.src = "assets/icons/functionality_icons/brightness.png";
    } else {
        localStorage.setItem("darkMode", "disabled");
        themeIcon.src = "assets/icons/functionality_icons/moon.png";

    }
});