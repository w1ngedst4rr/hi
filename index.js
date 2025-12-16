function update() {
    localStorage.clear();
}

window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".fade-up");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 150);
    });
});
