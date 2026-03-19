const toggleButton = document.querySelectorAll(".toggleButton");

toggleButton.forEach(button => {
    button.addEventListener("click", () => {
        const moreText = button.previousElementSibling;

        if (moreText.style.display === "block") {
            moreText.style.display = "none";
            button.textContent = "▶Ver mais...";
        } else {
            moreText.style.display = "block";
            button.textContent = "▶Ver menos";
        }
    });
});