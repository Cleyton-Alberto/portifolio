const sliders = document.querySelectorAll(".projectContainer");

sliders.forEach(slider => {
    const images = slider.querySelectorAll(".projectImagesContainer img");
    const prev = slider.querySelector(".prevButton");
    const next = slider.querySelector(".nextButton");
    let index = 0;

    function showImage(i) {
        images.forEach((img, j) => {
            img.style.display = (j === i ? "block" : "none");
        });
    }

    prev.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });

    next.addEventListener("click", () => {
        index = (index + 1) % images.length;
        showImage(index);
    });

    // Start
    showImage(index);
});